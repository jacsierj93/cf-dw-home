import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import { Img } from "components";
const HomeDesktop = React.lazy(() => {
  return Promise.all([
    import("pages/HomeDesktop"),
    new Promise(resolve => setTimeout(resolve, 3000))
  ])
  .then(([moduleExports]) => moduleExports);
});
const Cabins = React.lazy(() => import("pages/Cabins"));
const CabinDetail = React.lazy(() => import("pages/CabinDetail"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<><div className="absolute top-0 left-0 w-full h-full bg-gradient6 flex justify-center items-center"> <Img className="h-[95px] md:h-[55px] animate-pulse" src="/images/img_logocruisefestivalmesa.png" alt="logocruisefesti_One"/></div></>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeDesktop />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cabinas" element={<Cabins />}/>
          <Route path="/cabina/:slug" element={<CabinDetail />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
