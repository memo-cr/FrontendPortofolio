function BigCard(props) {
	return (
		<div className="bg-container">
			<img src={props.img}></img>
			<div className="wrapper">
				<h1>{props.name}</h1>
				<p>{props.des}</p>
			</div>
		</div>
	);
}

export default BigCard;
