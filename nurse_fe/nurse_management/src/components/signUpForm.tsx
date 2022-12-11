export interface ISignUpFormProps {}

const SignUpForm: React.FC<ISignUpFormProps> = () => {
  return (
    <div>
      <h3>Sign up</h3>
      <form>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input
            type="email"
            className="form-control"
            id="nameInput"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            value={values.email || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
