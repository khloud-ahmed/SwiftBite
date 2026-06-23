import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerUser, clearError } from "../../store/authSlice";
import style from "./Register.module.css";
import logo from "../../assets/logo.png";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { loading, error, token } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [localError, setLocalError] = useState("");
  const [agreed, setAgreed] = useState(false);

  // redirect if already logged in
  useEffect(() => {
    if (token) navigate("/home");
  }, [token, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
    if (error) dispatch(clearError());
    if (localError) setLocalError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return setLocalError("Passwords do not match.");
    }
    if (!agreed) {
      return setLocalError("Please agree to the Terms & Conditions.");
    }

    // حل نهائي ومضمون لـ unused-vars: نأخذ نسخة من الـ formData ونحذف منها الـ confirmPassword بدون تعريف متغير جديد
    const payload = { ...formData };
    delete payload.confirmPassword;
    
    const result = await dispatch(registerUser(payload));

    if (registerUser.fulfilled.match(result)) {
      navigate(result.payload.redirectTo || "/home");
    }
  };

  const displayError = localError || error;

  return (
    <div className={style.page}>
      <div className={style.register}>

        <div className={style.header}>
          <img src={logo} alt="logo" className={style.logo} />
          <h1>SwiftBite</h1>
        </div>

        <h2 className={style.title}>Create your account</h2>

        <p className={style.subtitle}>
          Join the fastest delivery network in the city.
        </p>

        {displayError && <p className={style.errorMsg}>{displayError}</p>}

        <form className={style.form} onSubmit={handleSubmit}>

          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />

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

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="0125255856"
            value={formData.phoneNumber}
            onChange={handleChange}
          />

          <div className={style.passwordContainer}>

            <div className={style.passwordField}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className={style.passwordField}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className={style.checkbox}>
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>
              By creating an account, I agree to the
              <a href="/"> Terms & Conditions </a>
              and
              <a href="/"> Privacy Policy</a>.
            </span>
          </div>

          <button
            type="submit"
            className={style.btn}
            disabled={loading}
          >
            {loading ? "Creating account…" : "Create Account"}
          </button>

        </form>

        <div className={style.divider}>
          <span></span>
          <p>Or continue with</p>
          <span></span>
        </div>

        <div className={style.socialButtons}>
          <button type="button">Google</button>
          <button type="button">Facebook</button>
        </div>

        <p className={style.login}>
          Already have an account?
          <Link to="/login">Sign In</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;