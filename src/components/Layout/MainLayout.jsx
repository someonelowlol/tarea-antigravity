import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function MainLayout() {
    return (
        <div className="flex h-screen bg-[#0f1115] text-[#e4e4e7] overflow-hidden">
            <Sidebar />
            <main className="flex-1 h-full overflow-y-auto w-full">
                <div className="p-8 max-w-7xl mx-auto min-h-full">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
