import { useState } from "react";
import LoginView from "./login";
import RegisterView from "./register";

export const UnauthenticatedApp = () => {
  const [isRegister, setRegister] = useState(false);
  return (
    <div>
      {isRegister ? <RegisterView /> : <LoginView />}
      <button onClick={() => setRegister(!isRegister)}>
        切换到{isRegister ? "登录" : "注册"}
      </button>
    </div>
  );
};
