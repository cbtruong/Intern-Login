import React, { useContext, useEffect, useRef, useState } from "react";
import {ThemeContext} from '../../useContext/ThemeContext' 
import "./signin.css";

const SignIn = () => {
	const value=useContext(ThemeContext);
	const [loginData, setLoginData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:3000/users");
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const jsonData =await response.json();
				console.log(typeof(jsonData))
				setLoginData(jsonData);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});
	const isInitialRenderEmail = useRef(true);
	const isInitialRenderPassword = useRef(true);
	// ====================== FUNCTION ===========================
	// Check ERROR Input Email
	const checkErrEmail = () => {
		const newErrors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email || !regex.test(email)) {
			newErrors.email = "Invalid Email";
		}
		return newErrors;
	};
	// FUNCTION Check ERROR Input Email
	const checkErrPass = () => {
		const newErrors = {};
		if (!password) {
			newErrors.password = "Invlaid Password";
		} else if (password.length < 6) {
			newErrors.password = "Password must be at least 6 characters long";
		}
		return newErrors;
	};
	//  FUNCTION CHECK LOGIN
	const handleLogin = (e) => {
		e.preventDefault();
		const formErrors = { ...checkErrEmail(), ...checkErrPass() };
		if (Object.keys(formErrors).length === 0) {
			const users = loginData.find((user) => user.email === email && user.password === password);
			if (users) {
			  setErrors({});
			  value.setData({email,password})
			  alert("Login thành công! Đã lưu dữ liệu bằng useContext")
			} else {
				
			  setErrors({ login: 'Invalid email or password' });
			  console.log(users)
			}
		  } else {
			setErrors(formErrors);
		  }
		
	};
	// ========================= HANDLE =================================
	// check input email when it's change
	useEffect(() => {
		if (isInitialRenderEmail.current) {
			isInitialRenderEmail.current = false;
		} else {
			const formErrors = checkErrEmail();
			setErrors((prevErrors) => ({
				...prevErrors,
				email: formErrors.email,
			}));
		}
	}, [email]);
	// check input pass when it's change
	useEffect(() => {
		if (isInitialRenderPassword.current) {
			isInitialRenderPassword.current = false;
		} else {
			const formErrors = checkErrPass();
			setErrors((prevErrors) => ({
				...prevErrors,
				password: formErrors.password,
			}));
		}
	}, [password]);
	// Call API
	return (
		<div className="signin-content alignment">
			<form onSubmit={handleLogin} className="signin-wrapper">
				<h1 className="sign-title">Hello there</h1>
				<p className="signin-subtitle">
					Sign In now for great values at <span>GovDeals.</span>
				</p>
				<div className="input-wrapper">
					<input
						type="email"
						placeholder="Email"
						value={email}
						className={`${errors.email ? "error_input" : ""}`}
						onChange={(e) => setEmail(e.target.value)}
					/>
					{errors.email && (
						<span className="show_error">{errors.email}</span>
					)}
				</div>
				<div className="input-wrapper">
					<input
						type="password"
						placeholder="Password"
						className={`${errors.password ? "error_input" : ""}`}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{errors.password && (
						<span className="show_error">{errors.password}</span>
					)}
				</div>
				<div className="input-wrapper checkbox_wrapper">
					<input type="checkbox" />
					<span className="stay-signin">Stay Signed In</span>
				</div>
				{errors.login && (
						<span className="show_error">{errors.login}</span>
					)}
				<button type="submit" className="button--flex button">
					Sign in
				</button>
				<span>
					Forgot your <a href="">username </a>
					or <a href="">password</a>?
				</span>
				<h5>Don’t have an account?</h5>
				<button className="btnRegister ">Register</button>
			</form>
		</div>
	);
};

export default SignIn;
