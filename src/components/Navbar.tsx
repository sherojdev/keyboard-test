import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Buttons from "./Buttons";

const { Header, Content, Footer } = Layout;

const items = Array.from({ length: 2 }).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const currentYear = new Date().getFullYear();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0, backgroundColor: "#cdb4db" }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }} />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 480,
            padding: 14,
            borderRadius: borderRadiusLG,
          }}
        >
          <Buttons />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{currentYear} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
