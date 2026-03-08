import { ArrowRight, Zap, ShieldCheck, Smartphone, Target, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <section className="relative text-center py-20 px-4">
                <div className="absolute inset-0 max-w-lg mx-auto bg-purple-600/20 blur-[100px] rounded-full -z-10" />
                <span className="bg-purple-600/10 text-purple-400 border border-purple-500/20 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
                    v1.0 Media Técnica Project
                </span>
                <h1 className="text-5xl md:text-6xl font-extrabold mt-8 tracking-tight bg-gradient-to-br from-white via-white to-zinc-500 bg-clip-text text-transparent leading-tight max-w-3xl mx-auto">
                    Transformando la Vida del Estudiante Moderno
                </h1>
                <p className="text-zinc-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
                    Una suite de aplicaciones web integradas para gestionar proyectos, rastrear horas sociales, preparar el ICFES y elegir tu futuro universitario. Todo en un solo lugar.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => navigate('/projects')}
                        className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-[0_0_30px_-5px_#9333ea] flex items-center justify-center gap-2"
                    >
                        Ver Prototipo
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    <a href="#beneficios" className="bg-[#18181b] hover:bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-xl font-medium transition-all flex items-center justify-center">
                        Conocer Más
                    </a>
                </div>
            </section>

            {/* Benefits */}
            <section id="beneficios" className="max-w-6xl mx-auto space-y-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white">Beneficios del Proyecto</h2>
                    <p className="text-zinc-400 mt-2">Diseñado para resolver los problemas reales de grado 11</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass-card p-8 group">
                        <div className="w-12 h-12 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
                            <Zap className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">Centralización Total</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">Olvídate de usar 5 apps diferentes. Gestiona tareas, horas y estudio en un único entorno con diseño premium.</p>
                    </div>
                    <div className="glass-card p-8 group">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
                            <Target className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">Enfoque en Metas</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">Simuladores de fechas y calculadoras de progreso que te mantienen motivado y en control de tus entregas.</p>
                    </div>
                    <div className="glass-card p-8 group">
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                            <Smartphone className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">Diseño Responsivo</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">Desarrollado con las últimas tecnologías web para que funcione perfecto tanto en tu PC como en tu celular.</p>
                    </div>
                </div>
            </section>

            {/* 3 Step Resolution */}
            <section className="max-w-5xl mx-auto bg-gradient-to-br from-[#18181b] to-black border border-white/5 rounded-3xl p-10 md:p-14 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full" />
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Resolución del Problema en 3 Pasos</h2>

                    <div className="space-y-8">
                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 shrink-0 bg-white text-black font-bold text-xl rounded-full flex items-center justify-center shadow-lg">1</div>
                            <div>
                                <h4 className="text-xl font-semibold text-white mb-2 tracking-tight">Identificación de Necesidades</h4>
                                <p className="text-zinc-400">Analizamos los principales dolores de cabeza en grado 11: desorden con las horas sociales, falta de planeación para el ICFES y estrés con la Media Técnica.</p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 shrink-0 bg-white text-black font-bold text-xl rounded-full flex items-center justify-center shadow-lg">2</div>
                            <div>
                                <h4 className="text-xl font-semibold text-white mb-2 tracking-tight">Desarrollo Modular</h4>
                                <p className="text-zinc-400">Creamos 5 módulos independientes pero interconectados usando React y Tailwind CSS, asegurando velocidad y una estética SaaS moderna.</p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 shrink-0 bg-white text-black font-bold text-xl rounded-full flex items-center justify-center shadow-lg">3</div>
                            <div>
                                <h4 className="text-xl font-semibold text-white mb-2 tracking-tight">Despliegue y Uso Diario</h4>
                                <p className="text-zinc-400">Implementamos la plataforma en la nube, dándote acceso 24/7 a tu planificador inteligente, radar universitario y gestor de proyectos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
