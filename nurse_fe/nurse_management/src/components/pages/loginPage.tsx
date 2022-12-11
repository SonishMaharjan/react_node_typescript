import { useState } from "react";

import SignUpForm from "../signUpForm";

export interface ILoginPageProps {}

const LoginPage: React.FC<ILoginPageProps> = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Nurse Management</h1>
      </div>

      <div className="jumbotron">
        <div className="user-form-wrapper">
          <SignUpForm></SignUpForm>

          <div>
            <h3>Login</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
