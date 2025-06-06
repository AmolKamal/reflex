import { type FunctionComponent } from "react";
import "../App.css";

interface Compon1props {
  //   cName: string;
  //   ldisc: boolean;
  //   rdisc: boolean;
}

const Compon1: FunctionComponent<Compon1props> = () => {
  return (
    <>
      <div className="bgfeel">
        <div className="dis">
          <div className="leftbox">
            <div className="ldisc"></div>
          </div>
          <div className="rightbox">
            <div className="rdisc"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compon1;
