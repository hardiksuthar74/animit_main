import { FC, ReactNode, useEffect } from "react";
import "./ProtectedRoute.css";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface ParentComponentProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ParentComponentProps> = ({ children }) => {
  const two: number = 2;
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (two !== 2) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return children;
};

export default ProtectedRoute;
