import React from "react";
import ConditionalRendering1 from "./ConditionalRendering1";
import ConditionalRendering2 from "./ConditionalRendering2";
import Header from "./header";
import Carousel from "./Carousel";
import Footer from "./footer";

const App = () => {
  return (
    <>
      {/* <h1 className="text-center text-danger bg-dark">Conditional Rendering</h1>
      <ConditionalRendering1 /> */}
      <Header />
      <Carousel />
      <ConditionalRendering2 />
      <Footer />
    </>
  );
};

export default App;
