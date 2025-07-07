import Footer from "../../components/shared/footer/Footer";
import Navbar from "../../components/shared/navbar/Navbar";
import React from "react";

const template = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default template;
