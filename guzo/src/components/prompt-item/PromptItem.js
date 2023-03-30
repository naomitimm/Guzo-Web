import { promptItemModel } from "./prompt-item-model";
const PromptItem = () => {
	return (
		<div className="prompt-container">
			{promptItemModel.map((model) => (
				<>
					<div className="prompt-item">
						<p> {model.title} </p>
						<img src={model.image} alt={model.name} />
					</div>
				</>
			))}
		</div>
	);
};

export default PromptItem;
