import useForm from "../hooks/useForm";

import { signUpValidation } from "../rules/userValidation";

import { signUpUser } from "../services/userServices";

import { publish } from "../event";
import { ALERT_TYPE_CLASS } from "../constanst";

export interface ISignUpFormProps {}

/**
 * Component for sign up form.
 * @returns 
 */
const SignUpForm: React.FC<ISignUpFormProps> = () => {
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
  } = useForm(signUp, signUpValidation);

  async function signUp() {
    try {
      await signUpUser(values);
      resetForm();

      publish("showAlert", { message: "New user added." });
    } catch (err: any) {
      publish("showAlert", {
        message: `Can not add user: ${err.message}`,
        alertClass: ALERT_TYPE_CLASS.FAILED,
      });
    }
  }

  return (
    <div>
      <h3>Sign up</h3>
      <form>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input
            name="name"
            type="name"
            className="form-control"
            id="nameInput"
            aria-describedby="nameHelp"
            placeholder="Enter name"
            onChange={handleChange}
            value={values?.name || ""}
          />

          {errors?.name && (
            <small className="form-text text-danger">{errors?.name}</small>
          )}
        </div>
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
            type="text"
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
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
