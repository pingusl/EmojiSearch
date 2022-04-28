const Line = (props) => {
  return (
    <div className="line">
      <div className="symbol">{props.symbol}</div>
      <div>&nbsp;{props.title}</div>
    </div>
  );
};
export default Line;
