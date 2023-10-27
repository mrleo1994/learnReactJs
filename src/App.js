import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./DemoComponent/ClassComponent";
import FunctionComponent from "./DemoComponent/FunctionComponent";
import Ex_Layout from "./Ex_Layout/Ex_Layout";
import DataBinding from "./DataBinding/DataBinding";
import DemoState from "./DemoState/DemoState";
import EventHanding from "./EventHanding/EventHanding";
import Ex_Car from "./Ex_Car/Ex_Car";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoProps from "./DemoProps/DemoProps";
import Ex_Phone from "./Ex_Phone/Ex_Phone";
import Ex_Shoe from "./Ex_Shoe/Ex_Shoe";

function App() {
  // jsx : html + js
  return (
    <div className="container">
      {/* <ClassComponent />
      <FunctionComponent /> */}
      {/* <Ex_Layout /> */}
      {/* <DataBinding /> */}
      {/* <DemoState /> */}
      {/* <EventHanding /> */}
      {/* <Ex_Car /> */}
      {/* <RenderWithMap /> */}
      {/* <DemoProps /> */}
      {/* <Ex_Phone /> */}
      <Ex_Shoe />
    </div>
  );
}

export default App;
