import camping2 from "../assets/camping2.svg";
const Home = () => {
	const platform = new URL("../assets/platforms.png", import.meta.url);
	const review = new URL("../assets/reviews.png", import.meta.url);
	const guidelines = new URL("../assets/guidelines.png", import.meta.url);

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
					<div className="info-content">
						<img src={review} alt="review icon" />
						<p>Reliable Reviews</p>
					</div>
					<div className="info-content">
						<img src={platform} alt="review icon" />
						<p>Access From Any Platform</p>
					</div>
					<div className="info-content">
						<img src={guidelines} alt="review icon" />
						<p>Guides & Community</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
