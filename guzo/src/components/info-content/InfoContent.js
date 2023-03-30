import { infoContentModel } from "./info-content-model";
const InfoContent = () => {
	return (
		<div className="info-container">
			{infoContentModel.map((model) => (
				<>
					<div className="info-content">
						<img src={model.image} alt={model.name} />
						<p>{model.title}</p>
					</div>
				</>
			))}
		</div>
	);
};

export default InfoContent;
