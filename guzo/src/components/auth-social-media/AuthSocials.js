import "./auth-socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faGoogle,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const AuthSocials = () => {
	return (
		<div className="social-media">
			<FontAwesomeIcon icon={faFacebookF} />
			<FontAwesomeIcon icon={faGoogle} />
			<FontAwesomeIcon icon={faTwitter} />
		</div>
	);
};

export default AuthSocials;
