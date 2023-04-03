import { infoContentModel } from "./info-content-model";
import "./info-content.css";
const InfoContent = () => {
	return (
		<div className="info-container">
			{infoContentModel.map((model) => (
				<>
					<div className="info-content" key={model.id}>
						<img src={model.image} alt={model.name} />
						<p>{model.title}</p>
					</div>
				</>
			))}
		</div>
	);
};

export default InfoContent;
