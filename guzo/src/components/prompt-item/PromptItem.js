import { promptItemModel } from "./prompt-item-model";
import "./prompt-item.css";
const PromptItem = () => {
	return (
		<div className="prompt-container">
			{promptItemModel.map((model, id) => (
				<>
					<div className="prompt-item" key={id}>
						<p> {model.title} </p>
						<img src={model.image} alt={model.name} />
					</div>
				</>
			))}
		</div>
	);
};

export default PromptItem;
