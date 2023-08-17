function SmallCard(props) {
	//wants img name and des
	return (
		<div className="sm-container">
			<div className="wrapper">
				<h1>{props.name}</h1>
				<p>{props.des}</p>
			</div>
			<img src={props.img}></img>
		</div>
	);
}

export default SmallCard;
