function Bath(props) {
  return (
    <div className={`bath ${props.size}`}>
      <header>{props.size} Bath</header>
    </div>
  );
}

export default Bath;
