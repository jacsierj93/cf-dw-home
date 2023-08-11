import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const HomeDesktop = React.lazy(() => import("pages/HomeDesktop"));
const Cabins = React.lazy(() => import("pages/Cabins"));
const CabinDetail = React.lazy(() => import("pages/CabinDetail"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeDesktop />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homedesktop" element={<HomeDesktop />} />
          <Route path="/cabinas" element={<Cabins />}/>
          <Route path="/cabina/:id" element={<CabinDetail />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
