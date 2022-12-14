import { LeftNetwork } from "./LeftNetwork";
import "./Network.css";
import { RightNetwork } from "./RightNetwork";
import { RightBottom } from "./RightBottom";

export const Network = () => {
  return (
    <div className="network" style={{ marginTop: "40px" }}>
      <div className="networkone">
        <LeftNetwork />
        <RightNetwork />
      </div>

      <RightBottom />
    </div>
  );
};
