import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout/AppLayout";

import "./App.css";
import "./queries.css";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Authentication from "./pages/Authentication/Authentication";
import { FC } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import AnimeDetailPage from "./pages/AnimeDetailPage/AnimeDetailPage";

const App: FC = () => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/auth" element={<Authentication />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="anime/:animeid" element={<AnimeDetailPage />} />
    </Routes>
  );
};

export default App;
