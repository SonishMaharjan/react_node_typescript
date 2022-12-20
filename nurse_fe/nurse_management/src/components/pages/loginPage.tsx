import LoginForm from "../loginForm";
import SignUpForm from "../signUpForm";

export interface ILoginPageProps {}

const LoginPage: React.FC<ILoginPageProps> = () => {
  return (
    <div>
      <div className="jumbotron">
        <div className="user-form-wrapper">
          <SignUpForm></SignUpForm>

          <div>
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
