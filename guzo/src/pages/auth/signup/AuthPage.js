import "./auth.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faGoogle,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const AuthPage = () => {
	const [addclass, setaddclass] = useState("");
	return (
		<div className="auth">
			<div className={`container ${addclass}`} id="container">
				<div className="form-container  sign-up-container">
					<form>
						<h1>Create Account</h1>
						<input type="text" placeholder="NAME" />
						<input type="email" placeholder="EMAIL" />
						<input type="password" placeholder="PASSWORD" />
						<button type="submit">REGISTER</button>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<form>
						<h1>Login</h1>
						<div className="social-media">
							<FontAwesomeIcon icon={faFacebookF} />
							<FontAwesomeIcon icon={faGoogle} />
							<FontAwesomeIcon icon={faTwitter} />
						</div>
						<p>Or login with email and password</p>
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
								<h4>Already have an account?</h4>
								<div className="btn login">
									<button
										className="ghost"
										id="signIn"
										onClick={() => setaddclass("")}>
										GO TO LOGIN
									</button>
								</div>
							</div>
						</div>
						<div className="overlay-panel overlay-right">
							<div className="overlay-actions">
								<h4>Don't have an account?</h4>
								<div className="btn">
									<button
										className="ghost"
										id="signUp"
										onClick={() => setaddclass("right-panel-active")}>
										GO TO REGISTER
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
