import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, Clock, GraduationCap, BrainCircuit } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
    { path: '/', label: 'Inicio / Proyecto', icon: LayoutDashboard },
    { path: '/projects', label: 'Gestor de Proyectos', icon: CheckSquare },
    { path: '/social-hours', label: 'Horas Sociales', icon: Clock },
    { path: '/radar', label: 'Radar Universitario', icon: GraduationCap },
    { path: '/planner', label: 'Planificador ICFES', icon: BrainCircuit },
];

export default function Sidebar() {
    return (
        <aside className="w-64 flex flex-col h-full bg-[#18181b] border-r border-white/5 shrink-0 py-6 px-4">
            <div className="flex items-center gap-3 px-2 mb-10">
                <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-600/20">
                    SW
                </div>
                <h1 className="font-bold text-xl tracking-tight text-white">Student Space</h1>
            </div>

            <nav className="flex-1 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            clsx(
                                'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 font-medium text-sm',
                                isActive
                                    ? 'bg-purple-600/10 text-purple-400'
                                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                            )
                        }
                    >
                        <item.icon className="w-5 h-5" />
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <div className="mt-auto px-4 py-4 rounded-xl bg-purple-600/10 border border-purple-500/20">
                <div className="text-xs text-purple-300 font-medium uppercase tracking-wider mb-1">
                    Modo Estudiante
                </div>
                <div className="text-zinc-400 text-xs">
                    Grado 11 - Prom
                </div>
            </div>
        </aside>
    );
}
