import { Routes, Route } from "react-router-dom";

import Car from "./Car";
import Bike from "./Bike";
import Truck from "./Truck";

export default function RoutesList(props) {
  return (
    <Routes>
      <Route path="/" element={<Car {...props} />} />
      <Route path="/bike" element={<Bike {...props} />}></Route>
      <Route path="/truck" element={<Truck {...props} />}></Route>
    </Routes>
  );
}
