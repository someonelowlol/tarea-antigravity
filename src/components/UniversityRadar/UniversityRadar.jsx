import { Sparkles, Trophy, Wallet, Landmark, BrainCircuit, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

const universities = [
    {
        id: 1,
        name: 'Universidad Nacional de Colombia',
        type: 'Pública',
        price: '~ $700.000 COP / sem',
        focus: 'Investigación y Ciencias Básicas',
        strengths: ['Prestigio histórico', 'Enfoque interdisciplinario', 'Alta calidad investigativa'],
        icon: Landmark,
        color: 'text-yellow-500',
        bg: 'bg-yellow-500/10'
    },
    {
        id: 2,
        name: 'Universidad de los Andes',
        type: 'Privada',
        price: '~ $21.870.000 COP / sem',
        focus: 'Innovación Tecnológica y Liderazgo',
        strengths: ['Networking élite', 'Infraestructura Top', 'Convenios internacionales'],
        icon: Trophy,
        color: 'text-amber-500',
        bg: 'bg-amber-500/10'
    },
    {
        id: 3,
        name: 'Universidad EAFIT',
        type: 'Privada',
        price: '~ $11.655.000 COP / sem',
        focus: 'Desarrollo de Software y Emprendimiento',
        strengths: ['Ecosistema emprendedor', 'Preparación para el mundo digital', 'Prácticas empresariales'],
        icon: BrainCircuit,
        color: 'text-blue-500',
        bg: 'bg-blue-500/10'
    },
    {
        id: 4,
        name: 'Pontificia Universidad Javeriana',
        type: 'Privada',
        price: '~ $15.451.000 COP / sem',
        focus: 'Ingeniería Aplicada y Ética',
        strengths: ['Acreditación internacional', 'Formación integral', 'Campus envidiable'],
        icon: Landmark,
        color: 'text-red-500',
        bg: 'bg-red-500/10'
    },
    {
        id: 5,
        name: 'Escuela Colombiana de Ingeniería Julio Garavito',
        type: 'Privada',
        price: '~ $10.900.000 COP / sem',
        focus: 'Ciencias de la Computación, IA y Analítica',
        strengths: ['Laboratorios de punta', 'Alta empleabilidad', 'Docentes de gran trayectoria'],
        icon: BrainCircuit,
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10'
    }
];

export default function UniversityRadar() {
    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    Radar Universitario
                </h1>
                <p className="text-zinc-400 mt-1">Comparativa de las 5 mejores universidades para Ingeniería de Sistemas en Colombia</p>
            </div>

            <div className="bg-[#18181b]/50 rounded-2xl border border-white/5 overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-white/[0.02] text-zinc-400 border-b border-white/5">
                            <tr>
                                <th className="px-6 py-5 font-medium">Universidad</th>
                                <th className="px-6 py-5 font-medium">Enfoque Principal</th>
                                <th className="px-6 py-5 font-medium">Inversión Estimada</th>
                                <th className="px-6 py-5 font-medium">Fortalezas Clave</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {universities.map((uni) => (
                                <tr key={uni.id} className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className={clsx("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 transition-transform", uni.bg, uni.color)}>
                                                <uni.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white whitespace-normal max-w-[200px] leading-tight">
                                                    {uni.name}
                                                </div>
                                                <div className="text-xs text-zinc-500 mt-1">{uni.type}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-zinc-300 whitespace-normal max-w-[200px]">
                                        {uni.focus}
                                    </td>
                                    <td className="px-6 py-5 font-mono text-zinc-400">
                                        <div className="flex items-center gap-2">
                                            <Wallet className="w-4 h-4 text-zinc-500" />
                                            {uni.price}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col gap-2">
                                            {uni.strengths.map((s, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400 bg-white/5 px-3 py-1.5 rounded-md w-fit border border-white/5">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                                    {s}
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* AI Conclusion Component */}
            <div className="relative rounded-3xl p-8 overflow-hidden glass border border-purple-500/20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="flex items-start gap-5 relative z-10 text-white">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-2xl shrink-0 shadow-lg shadow-purple-500/20">
                        <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold tracking-tight mb-3">Conclusión de la IA (Costo / Beneficio)</h3>
                        <div className="space-y-4 text-zinc-300 text-sm md:text-base leading-relaxed">
                            <p>
                                Si buscas la <strong>mejor relación costo-beneficio a nivel de prestigio y rigor</strong>, la <span className="text-yellow-400 font-semibold border-b border-yellow-400/30">Universidad Nacional de Colombia</span> es indiscutiblemente la ganadora. Su altísima calidad investigativa combinada con el costo subsidiado la convierte en la opción más inteligente financieramente, aunque requiere un alto puntaje ICFES/examen de admisión.
                            </p>
                            <p>
                                Sin embargo, si tu enfoque es el <strong>emprendimiento tecnológico moderno, desarrollo ágil de software e IA</strong> desde el sector privado, y dispones de presupuesto, la <span className="text-blue-400 font-semibold border-b border-blue-400/30">Universidad EAFIT</span> y la <span className="text-emerald-400 font-semibold border-b border-emerald-400/30">Escuela Julio Garavito</span> ofrecen un excelente retorno de inversión (aproximadamente la mitad del costo de Los Andes), con metodologías actualizadas y altísima empleabilidad en la industria digital.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
