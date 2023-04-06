import SpannedText from "../spanned-text/SpannedText";
import "./explore.css";
const ExploreCards = ({ spanned, normal }) => {
	return (
		<div className="explore-container">
			<h2>
				<SpannedText spanned={spanned} normal={normal} />
			</h2>
			<div className="scroll">
				<div className="explore">
					<div className="explore-content"></div>
					<div className="explore-content"></div>
					<div className="explore-content"></div>
					<div className="explore-content"></div>
					<div className="explore-content"></div>
					<div className="explore-content"></div>
				</div>
			</div>
		</div>
	);
};

export default ExploreCards;
