import React from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import PagesRouters from "../../routes/PagesRouters.js";
const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <PagesRouters />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
