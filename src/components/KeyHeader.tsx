import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { WindowsFilled, AppleFilled } from "@ant-design/icons";


const { Header } = Layout;

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


const KeyHeader: React.FC = () => {

      const { pathname } = useLocation();

  return (
    <Layout  style={{
    minHeight: "100vh",
    background: "transparent",
  }}>
  <Header style={{ display: "flex", alignItems: "center" }} className="hea">
        <div className="demo-logo" />
        <h1>Keyboard-Test</h1>
        <Menu
          className="heaa"
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathname === "/" ? "1" : "2"]}
          items={[...items ,...items1]}
          style={{ marginLeft: "20px", flex: 1, minWidth: 0 }}
        />
      </Header>
      </Layout>
  )
  }


export default KeyHeader;
