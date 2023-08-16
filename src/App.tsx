import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout/AppLayout";

import "./App.css";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Authentication from "./pages/Authentication/Authentication";
import { FC } from "react";

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
      </Route>
      <Route path="/auth" element={<Authentication />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
