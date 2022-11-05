import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

let ProgramTracks = lazy(() => import("../pages/ProgramTracks"));
let ErrorPage = lazy(() => import("../pages/Errorpage"));
let Home = lazy(() => import("../pages/Home"));
let Auth = lazy(() => import("../pages/components/Auth"));
let LoginForm = lazy(() => import("../pages/LoginForm"));
let SignupForm = lazy(() => import("../pages/SignupForm.js"));
let ProductDesign = lazy(() => import("../pages/ProductDesign"));
let ProductManagement = lazy(() => import("../pages/ProductManagement"));
let Software = lazy(() => import("../pages/Software"));
let Data = lazy(() => import("../pages/Data"));

const AppRouter = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<div className="loading">Loading</div>}>
          <Home />
        </Suspense>
      }
    />

    <Route
      path="/programtracks"
      element={
        <Suspense fallback={<div className="loading">Loading</div>}>
          <ProgramTracks />
        </Suspense>
      }
    >
      <Route path="productdesign" element={<ProductDesign />} />
      <Route path="productmanagement" element={<ProductManagement />} />
      <Route path="softwareengineering" element={<Software />} />
      <Route path="dataanalysis" element={<Data />} />
    </Route>

    <Route
      path="/auth"
      element={
        <Suspense fallback={<div className="loading">Loading</div>}>
          <Auth />
        </Suspense>
      }
    />
    <Route
      path="/login"
      element={
        <Suspense fallback={<div className="loading">Loading</div>}>
          <LoginForm />
        </Suspense>
      }
    />

<Route
      path="/signup"
      element={
        <Suspense fallback={<div className="loading">Loading</div>}>
          <SignupForm />
        </Suspense>
      }
    />

    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRouter;
