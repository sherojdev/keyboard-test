import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import AppleB from "./AppleB";
import { WindowsFilled, AppleFilled } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const items = Array.from({ length: 1 }).map((_, index) => ({
  key: index + 1,
  label: (
    <Link to="/">
      <WindowsFilled />
    </Link>
  ),
}));

const items1 = Array.from({ length: 1 }).map((_, index) => ({
  key: index + 1,
  label: (
    <Link to="/AppleB">
      <AppleFilled />
    </Link>
  ),
}));

const Navbar: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const currentYear = new Date().getFullYear();

  return (
    <Layout>
      <Header
        style={{ display: "flex", alignItems: "center" }}
        className="heaa"
      >
        <div className="demo-logo" />
        <h1 style={{ color: "#1d3557" }}>Keyboard-test</h1>
        <Menu
          className="heaa"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[...items, ...items1]}
          style={{ marginLeft: "20px", flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px", backgroundColor: "#fec5bb" }}>
        <Breadcrumb style={{ margin: "16px 0" }} />
        <div
          style={{
            background: colorBgContainer,
            backgroundColor: "#f8edeb",
            minHeight: 580,
            padding: 14,
            borderRadius: borderRadiusLG,
          }}
        >
          <AppleB />
        </div>
      </Content>
      <Footer
        style={{ textAlign: "center", background: "#fec5bb", color: "black" }}
      >
        Keyboard-test ©{currentYear} Crafted by <b>Rohit</b> with &#x2764;
      </Footer>
    </Layout>
  );
};

export default Navbar;
