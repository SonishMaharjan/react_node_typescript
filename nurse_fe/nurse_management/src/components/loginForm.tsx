import { publish } from "../event";
import { redirectTo } from "../utils";
import useForm from "../hooks/useForm";
import { ALERT_TYPE_CLASS } from "../constanst";
import { loginUser } from "../services/userServices";
import { loginValidation } from "../rules/userValidation";

export interface ILoginFormProps {}

/**
 * Component for login form.
 *
 * @returns
 */
const LoginForm: React.FC<ILoginFormProps> = () => {
  const {
    values,
    errors,
    resetForm,
    handleChange,
    handleSubmit,
  }: {
    values: any;
    errors: any;
    handleChange: any;
    handleSubmit: any;
    resetForm: any;
  } = useForm(signUp, loginValidation);

  async function signUp() {
    try {
      const res = await loginUser(values);

      localStorage.setItem("accessToken", res.accessToken);

      redirectTo("/");

      resetForm();

      publish("showAlert", { message: "Logged in succesfully." });
    } catch (err: any) {
      publish("showAlert", {
        message: `Can not login: ${err?.response?.data || ""}`,
        alertClass: ALERT_TYPE_CLASS.FAILED,
      });
    }
  }

  return (
    <div>
      <h3>Login</h3>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
            value={values?.email || ""}
          />

          {errors?.email && (
            <small className="form-text text-danger">{errors?.email}</small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={handleChange}
            value={values?.password || ""}
          />

          {errors?.password && (
            <small className="form-text text-danger">{errors?.password}</small>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
