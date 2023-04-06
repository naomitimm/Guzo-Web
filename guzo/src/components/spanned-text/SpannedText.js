const SpannedText = ({ spanned, normal }) => {
	return (
		<p>
			<span>{spanned} </span>
			{normal}
		</p>
	);
};

export default SpannedText;
