import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import CustomOrder from './Components/CustomOrder/CustomOrder';
import CustomSolar from './Components/CustomSolar/CustomSolar';
import Model3 from './Components/Model-3/Model3';
import ModelS from './Components/Model-s/ModelS';
import ModelX from './Components/Model-x/ModelX';
import Modely from './Components/Model-y/Modely';
import Panel from './Components/Panel/Panel';
import Shop from './Components/Shop/Shop';
import SolarRoof from './Components/Solar-Roof/SolarRoof';
import TeslaMain from './Components/Tesla Main/TeslaMain';


function App() {
  return (
    <>
      <div>
        {/* <TeslaMain/> */}
        <Routes>
          <Route path='/' element = {<Navigate replace to='/home'/>} />
          <Route element = {<TeslaMain/>} path = '/home'/>
          <Route element = {<ModelS/>} path = '/models'/>
          <Route element = {<Model3/>} path = '/model3'/>
          <Route element = {<ModelX/>} path = '/modelx'/>
          <Route element = {<Modely/>} path = '/modely'/>
          <Route element = {<Shop/>} path = '/shop'/>
          <Route element = {<SolarRoof/>} path = '/solar-roof'/>
          <Route element = {<Panel/>} path = '/solar-panel'/>
          <Route element = {<CustomOrder/>} path={`/:id/customOrder`}/>
          <Route element = {<CustomSolar/>} path={`/:id/custom solar order`}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
