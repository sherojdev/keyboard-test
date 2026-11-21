import React from "react";
import { Layout, Menu, Collapse} from "antd";
import Buttons from "./Buttons";
import { WindowsFilled, AppleFilled} from "@ant-design/icons";
import type { CollapseProps} from "antd";
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

const faq1: string = `
  Keyboard-Test is a free online tool that lets you check whether every key on your keyboard works. Press a key and it lights up on the on-screen keyboard.
`;

const faq2: string = `
  Just press any key. The matching key on the screen changes color, so you can see it was registered. Go through all the keys one by one to find any that don’t respond.
`;

const faq3: string = `
No. It runs in your browser, with no download, no account and no sign-up.
`;

const faq4: string = `
No. Key presses are only detected in your browser to light up the keys. Nothing is sent to a server or saved.
`;

const faq5: string = `
Press it a few more times, then clean around the key with compressed air. Check for dust or debris, and try the keyboard on another computer. If it still fails, the switch may be faulty or the key may need replacing.
`;

const faq6: string = `
Yes. Use the Windows layout on the home page and the Apple layout from the Apple tab. Keys such as ⌘, option and control are included.
`;

const faq7: string = `
  Yes. Any keyboard that your browser can read will work, whether it is wired, wireless, mechanical or built into a laptop.
`;

const faq8: string = `
Some keys are handled by the operating system or by keyboard firmware before the browser sees them. Fn usually never reaches the browser, and shortcuts like Win or Print Screen may be intercepted by the OS.
`;

const faq9: string = `
Ghosting is when a keyboard fails to register some keys pressed at the same time. Hold several keys together, for example W + A + Space, and see whether all of them light up. If one doesn’t, your keyboard may have limited key rollover.
`;

const faq10: string = `
It is made for physical keyboards. On a phone or tablet you can use it with a connected Bluetooth or USB keyboard.
`;

const faq11: string = `
Chrome, Edge, Firefox, Safari and other modern browsers.
`;

const faq12: string = `
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
    label: "Does it work for both Windows and Mac keyboards?",
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
    <Layout className="design 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:justify-evenly xl:flex xl:flex-col xl:justify-center xl:justify-evenly lg:flex lg:flex-col lg:justify-center lg:justify-evenly md:flex md:flex-col md:justify-center md:justify-evenly sm:flex sm:flex-col sm:justify-center sm:justify-evenly flex flex-col justify-center justify-evenly 2xl:h-full 2xl:w-full xl:h-full xl:w-full lg:h-full lg:w-full md:h-full md:w-full sm:h-full sm:w-full h-full w-full">
      <Header className="navbar 2xl:flex 2xl:items-center xl:flex xl:items-center lg:flex lg:items-center md:flex md:items-center sm:flex sm:items-center flex items-center">
        <p className="2xl:text-[52px] xl:text-[48px] lg:text-[44px] md:text-[38px] sm:text-[32px] text-[18px] 2xl:m-4 xl:m-4 lg:m-3 md:m-2 sm:m-1 m-1 2xl:p-3 xl:p-3 lg:p-2 md:p-2 sm:p-1 p-1 2xl:text-white-600 xl:text-white-600 lg:text-white-600 md:text-white-600 sm:text-white-600 text-white-600 font-semibold 2xl:subpixel-antialiased xl:subpixel-antialiased lg:subpixel-antialiased md:subpixel-antialiased sm:subpixel-antialiased antialiased 2xl:font-[gothic-open-shaded] xl:font-[gothic-open-shaded] lg:font-[gothic-open-shaded] md:font-[gothic-open-shaded] sm:font-[gothic-open-shaded] font-[gothic-open-shaded] 2xl:items-baseline">Keyboard-Test</p>
        <div className="demo-logo" />
        <Menu
          className="navbar-menu"
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathname === "/" ? "1" : "2"]}
          items={[...items, ...items1]}
        />
      </Header>

      <Content className="workspace 2xl:flex 2xl:flex-wrap 2xl:p-2 2xl:m-2 2xl:justify-center 2xl:content-center xl:flex xl:flex-wrap xl:p-2 xl:m-6 xl:justify-center xl:content-center lg:flex lg:flex-wrap lg:p-2 lg:m-6 lg:justify-center lg:content-center md:flex md:flex-wrap md:p-2 md:m-6 md:justify-center md:content-center sm:flex sm:flex-wrap sm:p-2 2xl:m-6 sm:justify-center sm:content-center flex flex-wrap p-2 m-0 justify-center content-center">
        <div className="rounded-xl inner-workspace h-[400px] w-[360px] 2xl:h-[600px] 2xl:w-[1380px] xl:h-[520px] xl:w-[1140px] lg:h-[400px] lg:w-[838px] md:h-[330px] md:w-[578px] sm:h-[220px] sm:w-[450px] 2xl:flex 2xl:flex-wrap 2xl:flex-row xl:flex xl:flex-wrap xl:flex-row lg:flex lg:flex-wrap lg:flex-row md:flex md:flex-wrap md:flex-row sm:flex sm:flex-wrap sm:flex-row flex flex-wrap flex-row"> 
           <Buttons />
        </div>
      </Content>
      
      <div className="2xl:flex 2xl:flex-wrap 2xl:justify-center xl:flex xl:flex-wrap xl:justify-center lg:flex lg:flex-wrap lg:justify-center md:flex md:flex-wrap md:justify-center sm:flex sm:flex-wrap sm:justify-center flex flex-wrap justify-center 2xl:h-[1000px] 2xl:w-full 2xl:pr-0 xl:h-[800px] xl:w-full lg:h-[600px] lg:w-full md:h-[510px] md:w-full sm:h-[360px] sm:w-full h-[1100px] w-full 2xl:p-2 xl:p-1 lg:p-2 md:p-1 sm:p-2 p-1 2xl:m-1 xl:m-1 lg:m-1 md:p-1 sm:m-1 m-1">
      <Footer className="base 2xl:flex 2xl:flex-wrap 2xl:justify-center xl:content-center xl:flex xl:flex-wrap xl:justify-center xl:content-center lg:flex lg:flex-wrap lg:justify-center lg:content-center md:flex md:flex-wrap md:justify-center md:content-center sm:flex sm:flex-wrap sm:justify-center sm:content-center flex flex-wrap justify-center content-center 2xl:h-[1000px] 2xl:w-[1500px] 2xl:pr-0 xl:h-[800px] xl:w-[1400px] lg:h-[600px] lg:w-[1110px] md:h-[510px] md:w-[950px] sm:h-[360px] sm:w-[750px] h-[1100px] w-[450px] 2xl:m-4">
        <div className="flex 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-full 2xl:m-4 xl:m-4 lg:m-4 md:m-4 sm:m-4 m-4 2xl:p-1 xl:p-1 lg:p-1 md:p-1 sm:p-1 p-1 flex-row font-bold 2xl:flex 2xl:flex-row 2xl:font-bold xl:flex xl:flex-row xl:font-bold lg:flex lg:flex-row lg:font-bold md:flex md:flex-row md:flex-bold sm:flex sm:flex-row sm:flex-bold flex flex-row flex-bold">
          <p className=" 2xl:text-[46px] xl:text-[38px] lg:text-[26px] md:text-[16px] sm:text-[12px] text-[10px]">Frequently Asked Questions</p>
        </div>
        <Collapse
          className="faq rounded-md 2xl:h-[900px] 2xl:w-[1420px] h-[300px] w-[430px] sm:h-[360px] sm:w-[640px] sm:overflow-auto sm:scroll-smooth sm:scrollbar-thumb-transparent md:h-[480px] md:w-[800px] md:overflow-auto md:scroll-smooth md:scrollbar-thumb-transparent lg:h-[580px] lg:w-[1100px] lg:overflow-auto lg:scroll-smooth lg:scrollbar-thumb-transparent xl:h-[700px] xl:w-[1380px] xl:overflow-auto xl:scroll-smooth xl:scrollbar-thumb-transparent overflow-auto scroll-smooth scrollbar-thumb-transparent"
          items={faqitems}
          defaultActiveKey={["1"]}
          onChange={onChange}
        />
      </Footer>
      </div>
       <p className="2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] text-[8px] 2xl:text-center xl:text-center lg:text-center md:text-center sm:text-center text-center 2xl:text-white xl:text-white lg:text-white md:text-white sm:text-white text-white 2xl:m-2 xl:m-2 lg:m-1 md:m-1 sm:m-1 m-1 2xl:p-1 xl:p-1 lg:p-1 md:p-1 sm:p-1 p-1 2xl:subpixel-antialiased xl:subpixel-antialiased lg:subpixel-antialiased md:subpixel-antialiased sm:subpixel-antialiased antialiased">Keyboard-Test ©{currentYear} Presented and crafted by <b>Rohit</b> with &#x2764;</p>
    </Layout>
  );
};

export default Navbar;
