import React from "react";

const Overlay = ({ active }) => {
  return active && <div className="overlay"></div>;
};

export default Overlay;