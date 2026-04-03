import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Guide from "./pages/Guide";
import GettingStarted from "./pages/GettingStarted";
import SendMessages from "./pages/SendMessages";
import Media from "./pages/Media";
import UploadExcel from "./pages/UploadExcel";
import UsingVariables from "./pages/UsingVariables";
import NotFound from "./pages/NotFound";
import "./index.css";

function QueryParamRedirect() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("p");
    if (p) {
      navigate(p, { replace: true });
    }
  }, [navigate]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <QueryParamRedirect />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/guide/getting-started" element={<GettingStarted />} />
        <Route path="/guide/send-messages" element={<SendMessages />} />
        <Route path="/guide/media" element={<Media />} />
        <Route path="/guide/upload-excel" element={<UploadExcel />} />
        <Route path="/guide/using-variables" element={<UsingVariables />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
