import { useParams } from "react-router-dom";
import useFetch from "../../functionalities/useFetch";
import "./country-detail.css";
import PromptItem from "../../components/prompt-item/PromptItem";
import { imageDb } from "./country-img";
const CountryDetails = () => {
	const { countryName } = useParams();
	const {
		data: country,
		isLoading,
		error,
	} = useFetch(`https://restcountries.com/v3.1/name/${countryName}`);
	console.log(country);

	// const [container, setContainer] = useState(false);
	// const changeBackground = () => {
	// 	if (window.scrollY >= 10) {
	// 		setContainer(true);
	// 	} else {
	// 		setContainer(false);
	// 	}
	// };
	// window.addEventListener("scroll", changeBackground);

	return (
		<div className="country-detail">
			{country.map((country) => (
				<>
					<div className="country-intro">
						<h1>
							<span>Explore</span> {country.name.common}
						</h1>
						<div className="graphical-prompt">
							<PromptItem />
						</div>
					</div>

					<div className="image-grid">
						<div className="image span-2"></div>
						<div className="image"></div>
						<div className="image"></div>
						<div className="image span-2"></div>
						<div className="image span-row"></div>
					</div>
				</>
			))}
		</div>
	);
};

export default CountryDetails;
