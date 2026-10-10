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
      <Header style={{ display: "flex", alignItems: "center" }} className="hea">
        <div className="demo-logo" />
        <Menu
          className="hea"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0}}
        />
      </Header>
      <Content style={{ padding: "0 48px" ,backgroundColor: "#640d14"}}>
        <Breadcrumb style={{ margin: "16px 0"}} />
        <div
          style={{
            background: colorBgContainer,
            backgroundColor: "#ad2831",
            minHeight: 580,
            padding: 14,
            borderRadius: borderRadiusLG,
          }}
        >
          <Buttons />
        </div>
      </Content>
      <Footer style={{ textAlign: "center", background: "linear-gradient(to bottom, #432e36, #ad2831)",color:"white"}}>
        Ant Design ©{currentYear} Created by <b>Rohit</b> with &#x2764;
      </Footer>
    </Layout>
  );
};

export default App;
