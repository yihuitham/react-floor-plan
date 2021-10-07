import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen() {
  return (
    <div className="column">
      <div>
        <Oven />
        <Sink />
      </div>
      <div className="kitchen column">
        <header>Kitchen</header>
      </div>
    </div>
  );
}

export default Kitchen;
