import { useState, useMemo } from 'react';
import Papa from 'papaparse';
import { UploadCloud, Target, TrendingUp, Clock, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { format, addWeeks } from 'date-fns';
import { es } from 'date-fns/locale';

export default function SocialHours() {
    const [data, setData] = useState([
        // Sample Default Data
        { date: '2026-01-15', location: 'Biblioteca Pública', type: 'Apoyo', hours: 10 },
        { date: '2026-02-10', location: 'Alcaldía', type: 'Logística', hours: 15 },
        { date: '2026-02-25', location: 'Biblioteca Pública', type: 'Apoyo', hours: 8 },
    ]);
    const [weeklyHours, setWeeklyHours] = useState(5);

    const GOAL = 80;

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            Papa.parse(file, {
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true,
                complete: function (results) {
                    const parsedData = results.data.map(row => ({
                        date: row.Fecha || row.date || row.Date || format(new Date(), 'yyyy-MM-dd'),
                        location: row.Lugar || row.location || row.Location || 'Desconocido',
                        type: row.Tipo || row.type || row.Type || 'General',
                        hours: Number(row.Horas || row.hours || row.Hours || 0)
                    }));
                    setData(parsedData);
                }
            });
        }
    };

    const { totalHours, missingHours, mainLocation, chartData } = useMemo(() => {
        let total = 0;
        const locationCounts = {};
        const monthlyAcc = {};

        data.forEach(entry => {
            total += entry.hours;

            // Calculate main location
            locationCounts[entry.location] = (locationCounts[entry.location] || 0) + entry.hours;

            // Calculate monthly chart data
            const date = new Date(entry.date);
            if (!isNaN(date)) {
                const monthKey = format(date, 'MMM', { locale: es });
                monthlyAcc[monthKey] = (monthlyAcc[monthKey] || 0) + entry.hours;
            }
        });

        const missing = Math.max(0, GOAL - total);

        let mainLoc = 'Ninguno';
        let maxHrs = 0;
        for (const [loc, hrs] of Object.entries(locationCounts)) {
            if (hrs > maxHrs) {
                maxHrs = hrs;
                mainLoc = loc;
            }
        }

        const cData = Object.keys(monthlyAcc).map(month => ({
            name: month,
            Horas: monthlyAcc[month]
        }));

        return { totalHours: total, missingHours: missing, mainLocation: mainLoc, chartData: cData };
    }, [data]);

    const estimatedCompletionDate = useMemo(() => {
        if (missingHours <= 0) return '¡Meta Cumplida!';
        if (weeklyHours <= 0) return 'Introduce horas semanales';
        const weeksNeeded = Math.ceil(missingHours / weeklyHours);
        const estDate = addWeeks(new Date(), weeksNeeded);
        return format(estDate, "dd 'de' MMMM, yyyy", { locale: es });
    }, [missingHours, weeklyHours]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        Horas Sociales
                    </h1>
                    <p className="text-zinc-400 mt-1">Dashboard de seguimiento para tu meta de 80 horas</p>
                </div>

                <label className="cursor-pointer bg-purple-600/10 hover:bg-purple-600/20 text-purple-400 border border-purple-500/20 px-4 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2">
                    <UploadCloud className="w-5 h-5" />
                    Subir CSV
                    <input type="file" accept=".csv" onChange={handleFileUpload} className="hidden" />
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                        <Target className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-zinc-400 text-sm font-medium">Progreso Total</p>
                        <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-3xl font-bold text-white">{totalHours}</span>
                            <span className="text-zinc-500 text-sm">/ {GOAL} hrs</span>
                        </div>
                        <div className="w-full bg-white/5 h-2 rounded-full mt-3 overflow-hidden">
                            <div
                                className="bg-blue-500 h-full rounded-full transition-all duration-500"
                                style={{ width: `${Math.min(100, (totalHours / GOAL) * 100)}%` }}
                            />
                        </div>
                    </div>
                </div>

                <div className="glass-card p-6 flex items-start gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-zinc-400 text-sm font-medium">Horas Faltantes</p>
                        <div className="text-3xl font-bold text-white mt-1">{missingHours}</div>
                        <p className="text-zinc-500 text-xs mt-2">Sigues en camino</p>
                    </div>
                </div>

                <div className="glass-card p-6 flex items-start gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                        <AlertCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-zinc-400 text-sm font-medium">Lugar Principal</p>
                        <div className="text-xl font-bold text-white mt-2 line-clamp-1">{mainLocation}</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 glass-card p-6">
                    <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
                        <TrendingUp className="w-5 h-5 text-purple-400" />
                        Progreso Mensual
                    </h2>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    cursor={{ fill: '#ffffff05' }}
                                    contentStyle={{ backgroundColor: '#18181b', border: '1px solid #ffffff10', borderRadius: '8px' }}
                                />
                                <Bar dataKey="Horas" fill="#9333ea" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="glass-card p-6 space-y-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2 text-white">
                        <Clock className="w-5 h-5 text-purple-400" />
                        Simulador de Finalización
                    </h2>

                    <div>
                        <label className="text-sm font-medium text-zinc-400 block mb-2">Horas dedicadas por semana</label>
                        <input
                            type="number"
                            min="1"
                            value={weeklyHours}
                            onChange={(e) => setWeeklyHours(Number(e.target.value))}
                            className="w-full bg-[#18181b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all font-mono text-lg"
                        />
                    </div>

                    <div className="bg-purple-600/10 p-5 rounded-2xl border border-purple-500/20 text-center">
                        <p className="text-sm text-purple-300 font-medium mb-1">Fecha Estimada de Finalización</p>
                        <div className="text-lg font-bold text-white capitalize">{estimatedCompletionDate}</div>
                    </div>

                    <div className="text-xs text-zinc-500 text-center px-4">
                        El cálculo asume que mantendrás un ritmo constante de {weeklyHours} hrs a la semana a partir de hoy.
                    </div>
                </div>
            </div>
        </div>
    )
}
