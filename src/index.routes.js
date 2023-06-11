import { Routes, Route } from "react-router-dom";

import Car from "./Car";
import Bike from "./Bike";
import Truck from "./Truck";
import Layout from "./Layout";

export default function RoutesList(props) {
  const layoutify = (Component) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );

  return (
    <Routes>
      <Route path="/" element={layoutify(Car)} />
      <Route path="/bike" element={layoutify(Bike)}></Route>
      <Route path="/truck" element={layoutify(Truck)}></Route>
    </Routes>
  );
}
