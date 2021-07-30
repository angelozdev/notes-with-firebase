import { ChangeEvent, useState, FormEvent } from "react";
import { Wrapper } from "src/components";
import { useAuth } from "src/hooks";
import AuthService from "src/services/auth";

function Login() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { login } = useAuth();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    setErrorMessage("");
    const { email, password } = values;

    if (!email || !password) {
      return setErrorMessage("The fields are invalid");
    }

    const auth = new AuthService();

    setIsLoading(true);
    auth
      .login({ email, password })
      .then(({ user }) => {
        if (!user) throw new Error("There is no user");
        const { email, uid: id } = user;
        if (!email) throw new Error("There is no email");
        login({ email, id });
      })
      .catch((error) => {
        setErrorMessage(error?.message);
        setIsLoading(false);
      });
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="my-6">
      <Wrapper>
        <form onSubmit={handleLogin} className="max-w-md w-full mx-auto">
          <h1 className="text-3xl mb-4">Log in!</h1>

          <div className="form-control mb-4">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChangeValue}
              placeholder="Enter your email"
              className="input input-bordered"
              value={values.email}
              disabled={isLoading}
            />
          </div>

          <div className="form-control mb-4">
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChangeValue}
              placeholder="Enter your password"
              className="input input-bordered"
              value={values.password}
              disabled={isLoading}
            />
          </div>

          {errorMessage && (
            <div role="alert" className="alert alert-error mb-4">
              {errorMessage}
            </div>
          )}

          <div>
            <button
              disabled={isLoading}
              className={[
                "btn",
                "btn-square",
                "btn-block",
                isLoading ? "loading" : "",
              ].join(" ")}
            >
              {isLoading ? "" : "Log in"}
            </button>
          </div>
        </form>
      </Wrapper>
    </div>
  );
}

export default Login;
