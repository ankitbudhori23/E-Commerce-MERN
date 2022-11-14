import Navbar from "./Navbar";
import Add from "./Add";
import View from "./View";
import "../Style.css";
import { useState } from "react";

export default function Dashboard() {
  const [set, setset] = useState(0);
  return (
    <>
      <Navbar />
      <div className="admin-panel">
        <div className="admin-left">
          <div className="aleft1" onClick={() => setset(1)}>
            View Products
          </div>
          <div className="aleft1" onClick={() => setset(2)}>
            Add Products
          </div>
        </div>
        <div className="admin-right">
          {set === 1 && <View />}
          {set === 2 && <Add />}
        </div>
      </div>
    </>
  );
}
