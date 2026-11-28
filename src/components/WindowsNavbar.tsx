import { Layout, Menu} from "antd";
import { WindowsFilled, AppleFilled} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

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


const WindowsNavbar = () => {

    const { pathname } = useLocation();

    return(
    <>
       <Header className="navbar 2xl:flex 2xl:items-center xl:flex xl:items-center lg:flex lg:items-center md:flex md:items-center sm:flex sm:items-center flex items-center">
             <p className="2xl:text-[52px] xl:text-[48px] lg:text-[44px] md:text-[38px] sm:text-[32px] text-[18px] 2xl:m-4 xl:m-4 lg:m-3 md:m-2 sm:m-1 m-1 2xl:p-3 xl:p-3 lg:p-2 md:p-2 sm:p-1 p-1 2xl:text-[#ff5400] xl:text-[#ff5400] lg:text-[#ff5400] md:text-[#ff5400] sm:text-[#ff5400] text-[#ff5400] font-bold 2xl:subpixel-antialiased xl:subpixel-antialiased lg:subpixel-antialiased md:subpixel-antialiased sm:subpixel-antialiased antialiased 2xl:font-[gothic-open-shaded] xl:font-[gothic-open-shaded] lg:font-[gothic-open-shaded] md:font-[gothic-open-shaded] sm:font-[gothic-open-shaded] font-[gothic-open-shaded] 2xl:items-baseline 2xl:cursor-default xl:cursor-default lg:cursor-default md:cursor-default sm:cursor-default cursor-default">Keyboard-Test</p>
             <div className="demo-logo" />
             <Menu
               className="navbar-menu"
               theme="dark"
               mode="horizontal"
               selectedKeys={[pathname === "/" ? "1" : "2"]}
               items={[...items, ...items1]}
             />
        </Header>
    </>
)

}

export default WindowsNavbar;