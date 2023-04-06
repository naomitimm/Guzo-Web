import "./auth.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthSocials from "../../../components/auth-social-media/AuthSocials";
import Logo from "../../../components/logo/Logo";
const AuthPage = () => {
	const [addclass, setaddclass] = useState("");
	return (
		<div className="auth">
			<div className={`container ${addclass}`} id="container">
				<div className="form-container  sign-up-container">
					<Logo />
					<form>
						<h1>Create Account</h1>
						<AuthSocials />
						<p className="option">Or use your email to register</p>
						<input type="text" placeholder="NAME" />
						<input type="email" placeholder="EMAIL" />
						<input type="password" placeholder="PASSWORD" />
						<button type="submit">SIGNUP</button>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<Logo />
					<form>
						<h1>Login</h1>
						<AuthSocials />
						<p className="option">Or login with email and password</p>
						<input type="email" placeholder="EMAIL" />
						<input type="password" placeholder="PASSWORD" />
						<Link to="">
							<p>Forgot password?</p>
						</Link>
						<button type="submit">LOGIN</button>
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<div className="overlay-actions">
								<h1>Welcome back to Guzo!</h1>
								<h3>
									You've been missed. Keep connected with us by logging in to
									your account.
								</h3>
								<div className="btn login">
									<button
										className="ghost"
										id="signIn"
										onClick={() => setaddclass("")}>
										LOGIN
									</button>
								</div>
							</div>
						</div>
						<div className="overlay-panel overlay-right">
							<div className="overlay-actions">
								<h1>Welcome to Guzo!</h1>
								<h3>
									The world is at your fingertips. Register to start your
									journey today.
								</h3>
								<div className="btn">
									<button
										className="ghost"
										id="signUp"
										onClick={() => setaddclass("right-panel-active")}>
										REGISTER
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthPage;
