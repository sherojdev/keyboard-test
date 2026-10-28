import React from "react";
import { Layout, Menu, Collapse } from "antd";
import Buttons from "./Buttons";
import { WindowsFilled, AppleFilled } from "@ant-design/icons";
import type { CollapseProps } from "antd";
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

const faq1 = `
  Keyboard-Test is a free online tool that lets you check whether every key on your keyboard works. Press a key and it lights up on the on-screen keyboard.
`;

const faq2 = `
  Just press any key. The matching key on the screen changes color, so you can see it was registered. Go through all the keys one by one to find any that don’t respond.
`;

const faq3 = `

No. It runs in your browser, with no download, no account and no sign-up.
`;

const faq4 = `



No. Key presses are only detected in your browser to light up the keys. Nothing is sent to a server or saved.
`;

const faq5 = `

Press it a few more times, then clean around the key with compressed air. Check for dust or debris, and try the keyboard on another computer. If it still fails, the switch may be faulty or the key may need replacing.
`;

const faq6 = `
Yes. Use the Windows layout on the home page and the Apple layout from the Apple tab. Keys such as ⌘, option and control are included.
`;

const faq7 = `
  Yes. Any keyboard that your browser can read will work, whether it is wired, wireless, mechanical or built into a laptop.
`;

const faq8 = `



Some keys are handled by the operating system or by keyboard firmware before the browser sees them. Fn usually never reaches the browser, and shortcuts like Win or Print Screen may be intercepted by the OS.
`;

const faq9 = `


Ghosting is when a keyboard fails to register some keys pressed at the same time. Hold several keys together, for example W + A + Space, and see whether all of them light up. If one doesn’t, your keyboard may have limited key rollover.
`;

const faq10 = `
It is made for physical keyboards. On a phone or tablet you can use it with a connected Bluetooth or USB keyboard.
`;

const faq11 = `
Chrome, Edge, Firefox, Safari and other modern browsers.
`;

const faq12 = `
 Yes, it is completely free.
`;

const faqitems: CollapseProps["items"] = [
  {
    key: "1",
    label: "What is Keyboard-Test?",
    children: <p>{faq1}</p>,
  },
  {
    key: "2",
    label: "How do I test my keyboard?",
    children: <p>{faq2}</p>,
  },
  {
    key: "3",
    label: "Do I need to install anything or sign up?",
    children: <p>{faq3}</p>,
  },
  {
    key: "4",
    label: "Is my typing recorded or stored??",
    children: <p>{faq4}</p>,
  },
  {
    key: "5",
    label: "What should I do if a key doesn’t light up?",
    children: <p>{faq5}</p>,
  },
  {
    key: "6",
    label: "Does it work for both Windows and Mac keyboards??",
    children: <p>{faq6}</p>,
  },
  {
    key: "7",
    label:
      "Can I test laptop keyboards, mechanical keyboards and external keyboards?",
    children: <p>{faq7}</p>,
  },
  {
    key: "8",
    label:
      "Why does a key not show up, such as Fn, Print Screen or the Windows key?",
    children: <p>{faq8}</p>,
  },
  {
    key: "9",
    label: "What is ghosting, and can this tool detect it?",
    children: <p>{faq9}</p>,
  },
  {
    key: "10",
    label: "Does it work on mobile or tablets?",
    children: <p>{faq10}</p>,
  },
  {
    key: "11",
    label: "Which browsers are supported?",
    children: <p>{faq11}</p>,
  },
  {
    key: "12",
    label: "Is it free?",
    children: <p>{faq12}</p>,
  },
];

const Navbar: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const { pathname } = useLocation();

  const currentYear = new Date().getFullYear();

  return (
    <Layout className="design">
      <Header className="navbar">
        <div className="demo-logo" />
        <h1>Keyboard-Test</h1>
        <Menu
          className="navbar-menu"
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathname === "/" ? "1" : "2"]}
          items={[...items, ...items1]}
        />
      </Header>

      <Content className="workspace pt-6 pl-9">
        <div className="rounded-xl inner-workspace mt-6 ml-5">
          <Buttons />
        </div>
      </Content>

      <Footer className="base">
        <div className="container flex items-start text-4xl font-bold mb-4">
          <p>Frequently Asked Questions</p>
        </div>
        <Collapse
          className="faq rounded-md"
          items={faqitems}
          defaultActiveKey={["1"]}
          onChange={onChange}
        />
        Keyboard-Test ©{currentYear} Presented by <b>SherojDev</b> crafted by{" "}
        <b>Rohit</b> with &#x2764;
      </Footer>
    </Layout>
  );
};

export default Navbar;
