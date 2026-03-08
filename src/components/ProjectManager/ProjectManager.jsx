import { useState } from 'react';
import { Plus, LayoutGrid, List, Calendar as CalendarIcon, Clock, MoreVertical } from 'lucide-react';
import clsx from 'clsx';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const initialTasks = [
    { id: 1, title: 'Investigar requerimientos', status: 'Idea', deadline: '2026-03-10', priority: 'Alta' },
    { id: 2, title: 'Diseñar base de datos', status: 'En Desarrollo', deadline: '2026-03-15', priority: 'Media' },
    { id: 3, title: 'Prototipo UI/UX', status: 'Revisión del Profesor', deadline: '2026-03-05', priority: 'Alta' },
    { id: 4, title: 'Configurar Repositorio', status: 'Entregado', deadline: '2026-03-01', priority: 'Baja' },
];

const columns = ['Idea', 'En Desarrollo', 'Revisión del Profesor', 'Entregado'];

export default function ProjectManager() {
    const [tasks, setTasks] = useState(initialTasks);
    const [view, setView] = useState('kanban'); // 'kanban', 'list', 'calendar'
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        if (!newTaskTitle.trim()) return;
        const newTask = {
            id: Date.now(),
            title: newTaskTitle,
            status: 'Idea',
            deadline: format(new Date(), 'yyyy-MM-dd'),
            priority: 'Media'
        };
        setTasks([...tasks, newTask]);
        setNewTaskTitle('');
    };

    const moveTask = (id, newStatus) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        Gestor de Proyectos
                    </h1>
                    <p className="text-zinc-400 mt-1">Organiza las tareas de tu Media Técnica</p>
                </div>

                <div className="flex items-center gap-2 bg-[#18181b] p-1 rounded-xl border border-white/5">
                    <button onClick={() => setView('kanban')} className={clsx("p-2 rounded-lg transition-all", view === 'kanban' ? "bg-purple-600 shadow-lg text-white" : "text-zinc-400 hover:text-white")}>
                        <LayoutGrid className="w-5 h-5" />
                    </button>
                    <button onClick={() => setView('list')} className={clsx("p-2 rounded-lg transition-all", view === 'list' ? "bg-purple-600 shadow-lg text-white" : "text-zinc-400 hover:text-white")}>
                        <List className="w-5 h-5" />
                    </button>
                    <button onClick={() => setView('calendar')} className={clsx("p-2 rounded-lg transition-all", view === 'calendar' ? "bg-purple-600 shadow-lg text-white" : "text-zinc-400 hover:text-white")}>
                        <CalendarIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <form onSubmit={handleAddTask} className="flex gap-3">
                <input
                    type="text"
                    placeholder="Nueva tarea..."
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    className="flex-1 bg-[#18181b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-zinc-500"
                />
                <button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 shadow-lg shadow-purple-600/20">
                    <Plus className="w-5 h-5" />
                    Añadir
                </button>
            </form>

            {view === 'kanban' && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 overflow-x-auto pb-4">
                    {columns.map(status => (
                        <div key={status} className="bg-[#18181b]/50 rounded-2xl p-4 border border-white/5 min-w-[280px]">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
                                    {status}
                                    <span className="text-xs font-normal bg-white/10 px-2 py-0.5 rounded-full text-zinc-400">
                                        {tasks.filter(t => t.status === status).length}
                                    </span>
                                </h3>
                            </div>

                            <div className="space-y-3">
                                {tasks.filter(t => t.status === status).map(task => (
                                    <div key={task.id} className="glass-card p-4 transition-transform hover:-translate-y-1">
                                        <h4 className="font-medium text-white mb-3 text-sm">{task.title}</h4>

                                        <div className="flex items-center justify-between text-xs text-zinc-400">
                                            <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-md">
                                                <Clock className="w-3.5 h-3.5" />
                                                {format(new Date(task.deadline), 'MMM dd', { locale: es })}
                                            </div>

                                            <select
                                                className="bg-transparent border-none text-zinc-500 hover:text-white cursor-pointer focus:outline-none focus:ring-0 appearance-none text-right"
                                                value={task.status}
                                                onChange={(e) => moveTask(task.id, e.target.value)}
                                            >
                                                {columns.map(c => <option key={c} value={c} className="bg-[#18181b] text-white">{c}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                ))}

                                {tasks.filter(t => t.status === status).length === 0 && (
                                    <div className="text-center py-6 text-zinc-600 text-sm border-2 border-dashed border-white/5 rounded-xl">
                                        Sin tareas
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {view === 'list' && (
                <div className="bg-[#18181b]/50 rounded-2xl border border-white/5 overflow-hidden">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="lowercase bg-white/[0.02] text-zinc-400 border-b border-white/5">
                            <tr>
                                <th className="px-6 py-4 font-medium">Tarea</th>
                                <th className="px-6 py-4 font-medium">Estado</th>
                                <th className="px-6 py-4 font-medium">Fecha de Entrega</th>
                                <th className="px-6 py-4 font-medium">Prioridad</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {tasks.map(task => (
                                <tr key={task.id} className="hover:bg-white/[0.02] transition-colors">
                                    <td className="px-6 py-4 font-medium text-zinc-200">{task.title}</td>
                                    <td className="px-6 py-4">
                                        <span className={clsx(
                                            "px-2.5 py-1 text-xs rounded-full font-medium border",
                                            task.status === 'Entregado' ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                                                task.status === 'En Desarrollo' ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                                                    task.status === 'Revisión del Profesor' ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                                                        "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
                                        )}>
                                            {task.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-zinc-400">
                                        {format(new Date(task.deadline), 'dd de MMMM, yyyy', { locale: es })}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={clsx(
                                            "px-2 py-0.5 text-xs rounded",
                                            task.priority === 'Alta' ? "text-red-400" :
                                                task.priority === 'Media' ? "text-yellow-400" : "text-zinc-400"
                                        )}>
                                            {task.priority}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {view === 'calendar' && (
                <div className="bg-[#18181b]/50 rounded-2xl border border-white/5 p-6 space-y-4">
                    <h2 className="text-xl font-semibold mb-4 text-zinc-200">Próximas Entregas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline)).map(task => (
                            <div key={task.id} className="flex gap-4 items-start bg-[#1f1f22]/60 p-4 rounded-xl border border-white/5">
                                <div className="bg-purple-600/10 border border-purple-500/20 rounded-lg p-3 text-center min-w-[60px]">
                                    <div className="text-xs text-purple-400 font-medium uppercase font-sans">
                                        {format(new Date(task.deadline), 'MMM', { locale: es })}
                                    </div>
                                    <div className="text-xl font-bold text-white leading-none mt-1">
                                        {format(new Date(task.deadline), 'dd', { locale: es })}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-zinc-200 line-clamp-1">{task.title}</h4>
                                    <p className="text-sm text-zinc-500 mt-1">{task.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
