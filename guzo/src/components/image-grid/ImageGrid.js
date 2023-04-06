import "./image-grid.css";
const ImageGrid = () => {
	return (
		<div className="image-grid">
			<div className="image span-2"></div>
			<div className="image"></div>
			<div className="image"></div>
			<div className="image span-2"></div>
			<div className="image span-row"></div>
		</div>
	);
};

export default ImageGrid;
