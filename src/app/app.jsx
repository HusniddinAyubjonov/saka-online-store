import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/shared/ui/toast";
import { HomePage } from "@/pages/home";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Toaster />
    </BrowserRouter>
  );
};
