import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import ProjectManager from './components/ProjectManager/ProjectManager';
import SocialHours from './components/SocialHours/SocialHours';
import Landing from './components/Landing/Landing';
import UniversityRadar from './components/UniversityRadar/UniversityRadar';
import SmartPlanner from './components/SmartPlanner/SmartPlanner';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Module 3 is often the root or landing page */}
        <Route index element={<Landing />} />
        <Route path="projects" element={<ProjectManager />} />
        <Route path="social-hours" element={<SocialHours />} />
        <Route path="radar" element={<UniversityRadar />} />
        <Route path="planner" element={<SmartPlanner />} />
      </Route>
    </Routes>
  );
}

export default App;
