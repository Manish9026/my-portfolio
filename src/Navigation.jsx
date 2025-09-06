
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './components/project detail/ProjectDetail';
import App from './App';

// import './index.scss'; // Ensure your styles are imported

import React,{ useEffect } from 'react';
import { useLocation } from 'react-router-dom';

 function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

const Navigation = () => {
    return (
        <Router>
            <ScrollToHash/>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/projects/:projectId" element={<ProjectDetails />} />
                <Route path="*" element={<> not result found</>} />
            </Routes>
        </Router>
    )
}

export default Navigation