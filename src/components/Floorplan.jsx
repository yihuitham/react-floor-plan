import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

function Floorplan() {
  return (
    <div className="column">
      <div>
        <div className="column">
          <Bedroom bedNum={1} />
          <Bath size="Full" />
        </div>
        <div>
          <LivingRoom />
          <Kitchen />
        </div>
      </div>
      <div>
        <Bedroom bedNum={2} />
        <Bath size="Half" />
        <Bedroom bedNum={3} />
      </div>
    </div>
  );
}

export default Floorplan;
