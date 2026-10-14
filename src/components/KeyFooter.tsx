import React from "react";
import {Layout} from "antd";


const { Footer } = Layout;

const AppFooter: React.FC = () => {


  const currentYear = new Date().getFullYear();

  return (
    <Layout  style={{
    minHeight: "100vh",
    background: "transparent",
  }}>
      <Footer
        style={{ textAlign: "center",  background: "transparent", color: "white" }}
      >
        Keyboard-Test ©{currentYear} Crafted by <b>Rohit</b> with &#x2764;
      </Footer>
    </Layout>

  );
};

export default AppFooter;
