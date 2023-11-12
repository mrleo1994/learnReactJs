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
import DemoRedux from "./DemoRedux/DemoRedux";
import Ex_Shoe_Redux from "./Ex_Shoe_Redux/Ex_Shoe_Redux";
import Ex_Tai_xiu from "./Ex_Tai_xiu/Ex_Tai_xiu";
import DemoLifeCycle from "./DemoLifeCycle/DemoLifeCycle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import Header from "./page/Header";

function App() {
  // jsx : html + js
  return (
    <div>
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
      {/* <Ex_Shoe /> */}
      {/* <DemoRedux /> */}
      {/* <Ex_Shoe_Redux /> */}
      {/* <Ex_Tai_xiu /> */}
      {/* <DemoLifeCycle /> */}

      {/* --- router - phan trang --- */}
      <BrowserRouter>
        <Header />
        <Routes>
          {/** liet ke cac page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
