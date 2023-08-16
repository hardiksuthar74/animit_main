import { FC, useEffect, useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import loginPicture from "../../assets/luffy_login.png";
import "./Authentication.css";

const Authentication: FC = () => {
  const [formType] = useState("login");

  const [state, setState] = useState(0);

  useEffect(() => {
    setState(1);
  }, []);

  return (
    <>
      <div className={`blur-background-login`}>
        <div
          id="login-modal-container"
          className={`hidden ${state === 1 ? "show" : ""}`}
        >
          <div id="login-modal">
            <div className="login-modal-image">
              <img src={loginPicture} draggable="false" alt="luffy" />
            </div>
            {formType === "login" && <LoginForm />}
            {formType === "register" && <RegisterForm />}
            {/* {formType === "forgotpassword" && <ForgotForm />} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
