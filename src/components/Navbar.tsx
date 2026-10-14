import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Buttons from "./Buttons";
import { WindowsFilled, AppleFilled } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Header, Content, Footer} = Layout;

const items = Array.from({ length: 1 }).map((_, index) => ({
  key: index + 1,
  label: (
    <Link to="/">
      <WindowsFilled />
    </Link>
  ),
}));

const items1 = Array.from({ length: 1 }).map((_, index) => ({
  key: index + 2,
  label: (
    <Link to="/AppleB">
      <AppleFilled />
    </Link>
  ),
}));

const Navbar: React.FC = () => {

  const { pathname } = useLocation();

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const currentYear = new Date().getFullYear();

  return (
    <Layout  style={{
    minHeight: "100vh",
    background: "linear-gradient(150deg, #1E1B4B, #7C3AED, #F472B6)",
  }}>
      <Header style={{ display: "flex", alignItems: "center" }} className="hea">
        <div className="demo-logo" />
        <h1>Keyboard-Test</h1>
        <Menu
          className="hea"
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathname === "/" ? "1" : "2"]}
          items={[...items ,...items1]}
          style={{ marginLeft: "20px", flex: 1, minWidth: 0 }}
        />
      </Header>
      
      <Content style={{ padding: "0 48px",  background: "transparent"}}>
        <Breadcrumb style={{ margin: "16px 0" }} />
        <div
          style={{
            background: "linear-gradient(to bottom, #0F172A, #334155)",
            minHeight: 580,
            padding: 14,
            borderRadius: borderRadiusLG,
          }}
        >
          <Buttons />
        </div>
      </Content>
    
      <Footer
        style={{ textAlign: "center",  background: "transparent", color: "white" }}
      >
        Keyboard-Test ©{currentYear} Crafted by <b>Rohit</b> with &#x2764;
      </Footer>
    </Layout>

  );
};

export default Navbar;
