function Line(props) {
  return (
    <div >
      {props.dot ? <span className="dot">{props.dot}</span> : null}
      {props.comment ? <span className="comment">{props.comment}</span> : null}
      {props.methods ? <span className="methods">{props.methods}</span> : null}
      {props.propname ? (
        <span className="propname">{props.propname}</span>
      ) : null}
      {props.thisname ? (
        <span className="scope">
          this.<span className="prop2">{props.thisname} </span>=
        </span>
      ) : null}
      {props.children}
    </div>
  );
}

export default Line;