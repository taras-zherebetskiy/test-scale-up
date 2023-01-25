import React from "react";

import './App.scss';

import { Header } from "./Header";
import { Gallery } from "./Gallery";
import { Description } from "./Description";
import { Poll } from "./Poll";
import { Feedback } from "./Feedback";

function App() {
  return (
    <div>
      <Feedback />

      <Header />

      <div className="App__content">
        <Gallery />

        <div>
          <Description />
          <Poll />
        </div>
      </div>

    </div >
  );
}

export default App;
