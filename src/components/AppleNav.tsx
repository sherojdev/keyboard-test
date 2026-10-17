import React from "react";
import { Layout, Menu } from "antd";
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
  key: index + 2,
  label: (
    <Link to="/AppleB">
      <AppleFilled />
    </Link>
  ),
}));

const Navbar: React.FC = () => {

  const { pathname } = useLocation();

  const currentYear = new Date().getFullYear();

  return (
    <Layout className="design-mac">
      <Header className="navbar-mac" >
        <div className="demo-logo" />
        <h1 className="project-mac">Keyboard-Test</h1>
        <Menu
          className="navbar-menu-mac"
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathname === "/AppleB" ? "2" : "1"]}
          items={[...items, ...items1]}
        />
      </Header>
      <Content className="workspace-mac pt-6 pl-9">
        <div className="rounded-xl inner-workspace-mac mt-6 ml-5"   >
          <AppleB />
        </div>
      </Content>
      <Footer className="base-mac">
        Keyboard-Test ©{currentYear} Crafted by <b>Rohit</b> with &#x2764;
      </Footer>
    </Layout>
  );
};

export default Navbar;
