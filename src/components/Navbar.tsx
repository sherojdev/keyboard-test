import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Buttons from "./Buttons";
import { WindowsFilled,AppleFilled} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const items = Array.from({ length: 1 }).map((_, index) => ({
  key: index + 1,
  label: <WindowsFilled/>,
}));

const items1 = Array.from({ length: 1 }).map((_, index) => ({
  key: index + 1,
  label: <AppleFilled />,
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
        <h1>Keyboard-test</h1>
        <Menu
          className="hea"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[...items,...items1]}
          style={{ marginLeft: "20px", flex: 1, minWidth: 0}}
        />
      </Header>
      <Content style={{ padding: "0 48px" ,backgroundColor: "#0d1b2a"}}>
        <Breadcrumb style={{ margin: "16px 0"}} />
        <div
          style={{
            background: colorBgContainer,
            backgroundColor: "#373a49",
            minHeight: 580,
            padding: 14,
            borderRadius: borderRadiusLG,
          }}
        >
          <Buttons />
        </div>
      </Content>
      <Footer style={{ textAlign: "center", background: "#0d1b2a",color:"white"}}>
        Keyboard-test ©{currentYear} Crafted by <b>Rohit</b> with &#x2764; 
      </Footer>
    </Layout>
  );
};

export default App;
