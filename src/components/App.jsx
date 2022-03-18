import React from "react";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="main">
      <Sidebar />
      <div className="products">
      <Main/>
      </div>
      </div>
    </div>
  );
};

export default App;
