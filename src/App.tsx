import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Matrix from "./components/Matrix/Matrix";

const App = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="matrix-one">
          <Matrix />
        </div>
      </div>
    </>
  );
};

export default App;
