import "./essentials.css";
const Essentials = ({ title, icon }) => {
	return (
		<div className="essentials-container">
			<div className="essential-content black">
				<p>{title}</p>
				{icon}
			</div>
			<div className="essential-content"></div>
			<div className="essential-content"></div>
			<div className="essential-content"></div>
		</div>
	);
};

export default Essentials;
