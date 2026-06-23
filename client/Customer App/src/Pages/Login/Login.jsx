import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser, clearError } from "../../store/authSlice";
import style from "./Login.module.css";
import logo from "../../assets/logo.png";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({ email: "", password: "" });

  // redirect if already logged in
  useEffect(() => {
    if (token) navigate("/home");
  }, [token, navigate]);

  // clear error when user starts typing again
  useEffect(() => {
    if (error) dispatch(clearError());
  }, [formData]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(loginUser(formData));

    if (loginUser.fulfilled.match(result)) {
      const { redirectTo } = result.payload;
      navigate(redirectTo || "/home");
    }
  };

  return (
    <div className={style.page}>
      <div className={style.loginCard}>

        <div className={style.header}>
          <img src={logo} alt="logo" />
          <h1>SwiftBite</h1>
        </div>

        <p className={style.subtitle}>
          Fresh flavors delivered fast to your door.
        </p>

        {error && <p className={style.errorMsg}>{error}</p>}

        <form className={style.form} onSubmit={handleSubmit}>

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className={style.passwordHeader}>
            <label htmlFor="password">Password</label>
            <a href="/">Forgot Password?</a>
          </div>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className={style.loginBtn}
            disabled={loading}
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>

        </form>

        <div className={style.divider}>
          <span></span>
          <p>Or continue with</p>
          <span></span>
        </div>

        <div className={style.socialButtons}>
          <button type="button">Google</button>
          <button type="button">Apple</button>
        </div>

      </div>

      <p className={style.registerText}>
        New to SwiftBite?
        <Link to="/register" className={style.signBtn}>
          Create an account
        </Link>
      </p>
    </div>
  );
}

export default Login;
