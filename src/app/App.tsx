import React from 'react';
import {PageIndex} from "../pages/MainPage/index";
import './App.css'
import AppRouter from "./router/AppRouter";

function App() {
  return (
      <div className="App">
          <PageIndex />
          <AppRouter/>
      </div>
  );
}

export default App;