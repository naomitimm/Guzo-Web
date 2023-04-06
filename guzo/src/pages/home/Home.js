import { useState } from "react";
import camping2 from "../../assets/camping2.svg";
import "./home.css";
import InfoContent from "../../components/info-content/InfoContent";
import PromptItem from "../../components/prompt-item/PromptItem";
import SearchResult from "../../components/search-result/SearchResult";
import SearchBar from "../../components/searchbar/SearchBar";
import RecentSearches from "../../components/recent-searches/RecentSearches";
import ExploreCards from "../../components/explore-cards/ExploreCards";
const Home = () => {
	const [countries, setCountries] = useState([]);

	return (
		<div className="home">
			<div className="main-landing">
				<div className="landing">
					<div className="textual">
						<div className="text">
							<h1>Travel to any corner of the world</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
								nemo quibusdam laudantium tempore sit eius, autem illum quos
								placeat natus qui ut alias nisi perferendis. Et voluptas
								deserunt quia aperiam
							</p>
						</div>
						<button className="action-btn">Explore Now</button>
					</div>
					<div className="graphical">
						<img src={camping2} alt="" />
					</div>
				</div>

				<InfoContent />
			</div>

			<PromptItem />

			<div className="searchbar">
				<SearchBar setCountries={setCountries} />
				<SearchResult countries={countries} />
			</div>
			<RecentSearches />
			<ExploreCards spanned="Popular" normal="Destinations" />
			<ExploreCards spanned="Historical" normal="Sights" />
			<ExploreCards spanned="Desert" normal="Regions" />
		</div>
	);
};

export default Home;
