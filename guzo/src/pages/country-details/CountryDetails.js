import { useParams } from "react-router-dom";
import useFetch from "../../functionalities/useFetch";
import "./country-detail.css";
import PromptItem from "../../components/prompt-item/PromptItem";
import ImageGrid from "../../components/image-grid/ImageGrid";
import Essentials from "../../components/essentials/Essentials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPersonHiking,
	faBowlFood,
	faBed,
} from "@fortawesome/free-solid-svg-icons";
import SpannedText from "../../components/spanned-text/SpannedText";

const CountryDetails = () => {
	const { countryName } = useParams();
	const {
		data: country,
		isLoading,
		error,
	} = useFetch(`https://restcountries.com/v3.1/name/${countryName}`);
	console.log(country);

	return (
		<div className="country-detail">
			{country.map((country) => (
				<>
					<div className="country-intro">
						<h1>
							<span>Explore</span> {country.name.common}
						</h1>

						<PromptItem />
					</div>

					<ImageGrid />

					<div className="about">
						<h2>
							<SpannedText spanned="About" normal={country.name.common} />
						</h2>
						<p>
							<SpannedText spanned="Capital City :" normal={country.capital} />
						</p>
						<p>
							<SpannedText spanned="Car Side :" normal={country.car.side} />
						</p>
						<p>
							<SpannedText spanned="Population :" normal={country.population} />
						</p>
						<h3>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
							autem vero est labore dicta ea tempora harum eum accusantium
							expedita! Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Cumque excepturi id doloribus sunt, earum doloremque nisi
							facilis reiciendis eum dolor. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Nam vitae vero architecto ducimus
							excepturi sit porro illum repellendus amet vel!
						</h3>
					</div>

					<div className="essentials">
						<h2>
							<span>Essentials In</span> {country.name.common}
						</h2>
						<Essentials
							title="Where to stay?"
							icon={<FontAwesomeIcon icon={faBed} />}
						/>
						<Essentials
							title="What to do?"
							icon={
								<FontAwesomeIcon
									icon={faPersonHiking}
									style={{ color: "#ffffff" }}
								/>
							}
						/>

						<Essentials
							title="Where to eat?"
							icon={<FontAwesomeIcon icon={faBowlFood} color="white" />}
						/>
					</div>
				</>
			))}
		</div>
	);
};

export default CountryDetails;
