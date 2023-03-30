import camping2 from "../../assets/camping2.svg";
import InfoContent from "../../components/info-content/InfoContent";
import PromptItem from "../../components/prompt-item/PromptItem";
import SearchBar from "../../components/searchbar/SearchBar";
const Home = () => {
	return (
		<div className="home">
			<div className="main-landing">
				<div className="landing">
					<div className="textual">
						<div className="text">
							<h2>Travel to any corner of the world</h2>
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
				<div className="info">
					<InfoContent />
				</div>
			</div>
			<div className="graphical-prompt">
				<PromptItem />
			</div>
			<div className="searchbar">
				<SearchBar />
			</div>
		</div>
	);
};

export default Home;
