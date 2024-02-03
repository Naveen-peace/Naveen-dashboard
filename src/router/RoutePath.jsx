// RoutePath.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashBoard from '../dash-component/home/DashBoard';
import About from '../dash-component/components/pages/About';
import Contact from '../dash-component/components/pages/Contact';
import Skill from '../dash-component/components/pages/Skill';
import Project from '../dash-component/components/pages/Project';


function RoutePath() {
  return ( 
      <Routes>
        <Route path="/Naveen-dashboard" element={<DashBoard />} />
        <Route path="/Naveen-dashboard/about-page" element={<About />} />
        <Route path="/Naveen-dashboard/skill-page" element={<Skill />} />
        <Route path="/Naveen-dashboard/project-page" element={<Project />} />
        <Route path="/Naveen-dashboard/contact-page" element={<Contact />} />
      </Routes>
  );
}

export default RoutePath;
