import { useState } from 'react';
import { BookOpen, Calendar, CheckSquare, Compass, PlayCircle, ExternalLink, Bookmark } from 'lucide-react';
import clsx from 'clsx';

const resources = [
    { id: 1, title: 'Icfes Interactivo Oficial', type: 'Simulador', link: 'https://www.icfes.gov.co', color: 'bg-blue-500/10 text-blue-400' },
    { id: 2, title: 'Clases de Matemáticas (YouTube)', type: 'Video', link: '#', color: 'bg-red-500/10 text-red-400' },
    { id: 3, title: 'Guía de Lectura Crítica', type: 'PDF', link: '#', color: 'bg-emerald-500/10 text-emerald-400' },
    { id: 4, title: 'App Puntaje Nacional', type: 'App', link: '#', color: 'bg-purple-500/10 text-purple-400' }
];

const plan10Days = [
    { day: 1, title: 'Conoce a tu Enemigo', area: 'Lectura Crítica', desc: 'Analizar la estructura del ICFES. Leer 2 textos científicos cortos e identificar ideas principales (Subrayado).' },
    { day: 2, title: 'Desafío Numérico', area: 'Matemáticas', desc: 'Resolver 15 preguntas de álgebra y geometría usando técnica Pomodoro (25min estudio/5min descanso).' },
    { day: 3, title: 'Mapas Temporales', area: 'Sociales y Ciudadanas', desc: 'Crear líneas de tiempo de la historia de Colombia y mapas conceptuales sobre mecanismos de participación.' },
    { day: 4, title: 'Exploración Científica', area: 'Ciencias Naturales', desc: 'Resumir fórmulas de física y química en fichas (flashcards). Usar Active Recall para repasarlas.' },
    { day: 5, title: 'English Time', area: 'Inglés', desc: 'Simulacro completo de la sección de inglés. Extraer 30 palabras de vocabulario desconocido y memorizar.' },
    { day: 6, title: 'Medio Maratón', area: 'Simulacro', desc: 'Simulacro continuo de 2 horas (Lectura, Mates, Inglés). Medir estrictamente el tiempo por pregunta.' },
    { day: 7, title: 'Autopsia del Simulacro', area: 'Revisión', desc: 'Revisar CADA respuesta incorrecta del día 6. Entender por qué fallaste y anotar el concepto clave.' },
    { day: 8, title: 'Refuerzo Táctico', area: 'Debilidades', desc: 'Dedicación exclusiva al área con menor puntaje en el simulacro usando recursos online y videos didácticos.' },
    { day: 9, title: 'Control Jedi', area: 'Mindset', desc: 'Técnicas de respiración para ansiedad. Definir estrategia de tiempos: ¿Qué área responder primero el día real?' },
    { day: 10, title: 'Descanso Activo', area: 'Logística', desc: 'NO ESTUDIAR HOY. Preparar citación, lápiz No. 2, borrador, sacapuntas y documento de identidad. Dormir 8 horas.' },
];

export default function SmartPlanner() {
    const [completedDays, setCompletedDays] = useState([1]);
    const [selectedDay, setSelectedDay] = useState(1);

    const toggleDay = (day) => {
        if (completedDays.includes(day)) {
            setCompletedDays(completedDays.filter(d => d !== day));
        } else {
            setCompletedDays([...completedDays, day]);
        }
    };

    const currentPlan = plan10Days.find(p => p.day === selectedDay);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent flex items-center gap-3">
                    <Compass className="w-8 h-8 text-emerald-400" />
                    Planificador Inteligente ICFES
                </h1>
                <p className="text-zinc-400 mt-1">Tu ruta intensiva de 10 días para dominar las Pruebas Saber 11 usando métodos comprobados.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* Left Column: Calendar UI */}
                <div className="lg:col-span-1 border border-white/5 rounded-2xl bg-[#18181b]/50 p-4">
                    <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-400" />
                        Reto 10 Días
                    </h3>
                    <div className="space-y-2">
                        {plan10Days.map((p) => {
                            const isCompleted = completedDays.includes(p.day);
                            const isActive = selectedDay === p.day;
                            return (
                                <button
                                    key={p.day}
                                    onClick={() => setSelectedDay(p.day)}
                                    className={clsx(
                                        "w-full text-left px-4 py-3 rounded-xl transition-all border flex items-center justify-between",
                                        isActive ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-transparent border-transparent text-zinc-400 hover:bg-white/5 hover:text-white",
                                        isCompleted && !isActive && "text-zinc-500 opacity-60"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-sm leading-none pt-0.5">Día {p.day}</span>
                                    </div>
                                    {isCompleted && <CheckSquare className="w-4 h-4 text-emerald-500" />}
                                </button>
                            )
                        })}
                    </div>

                    <div className="mt-6 p-4 rounded-xl bg-purple-600/10 border border-purple-500/20">
                        <div className="text-sm text-purple-200 font-medium">Progreso Global</div>
                        <div className="mt-2 h-2 w-full bg-black/40 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-purple-500 to-emerald-500 transition-all duration-500"
                                style={{ width: `${(completedDays.length / 10) * 100}%` }}
                            />
                        </div>
                        <div className="text-right text-xs text-purple-300 mt-1">{completedDays.length}/10 Días</div>
                    </div>
                </div>

                {/* Center/Right: Day Detail Container */}
                <div className="lg:col-span-3 flex flex-col gap-6">

                    {/* Day Detail Card */}
                    <div className="glass-card flex-1 p-8 lg:p-10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full group-hover:bg-emerald-500/10 transition-colors pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-emerald-500 text-white font-bold px-3 py-1 rounded-lg">
                                    DÍA {currentPlan.day}
                                </span>
                                <span className="text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 rounded-lg text-sm font-medium">
                                    {currentPlan.area}
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                {currentPlan.title}
                            </h2>

                            <div className="text-zinc-300 text-lg leading-relaxed flex-1">
                                {currentPlan.desc}
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                                <button
                                    onClick={() => toggleDay(currentPlan.day)}
                                    className={clsx(
                                        "px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all shadow-lg",
                                        completedDays.includes(currentPlan.day)
                                            ? "bg-zinc-800 text-emerald-400 hover:bg-zinc-700 border border-emerald-500/30"
                                            : "bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-600/20"
                                    )}
                                >
                                    {completedDays.includes(currentPlan.day) ? (
                                        <> <CheckSquare className="w-5 h-5" /> Misión Cumplida </>
                                    ) : (
                                        <> <PlayCircle className="w-5 h-5" /> Marcar como Completado </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Recommended Resources Panel */}
                    <div className="bg-[#18181b]/50 border border-white/5 rounded-2xl p-6">
                        <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                            <Bookmark className="w-4 h-4 text-purple-400" />
                            Recursos Recomendados
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {resources.map(res => (
                                <a key={res.id} href={res.link} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] transition-colors group">
                                    <div className={clsx("w-fit px-2.5 py-1 rounded-md text-xs font-semibold mb-3", res.color)}>
                                        {res.type}
                                    </div>
                                    <h4 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors flex items-center justify-between">
                                        {res.title}
                                        <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h4>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
