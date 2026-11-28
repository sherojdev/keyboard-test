import { Layout } from "antd";
import Cards from "./MacKeyboard";

const { Content } = Layout;

const MacContent = () => {
    return(
    <>
       <Content className="workspace-mac 2xl:flex 2xl:flex-wrap 2xl:p-2 2xl:m-2 2xl:justify-center 2xl:content-center xl:flex xl:flex-wrap xl:p-2 xl:m-6 xl:justify-center xl:content-center lg:flex lg:flex-wrap lg:p-2 lg:m-6 lg:justify-center lg:content-center md:flex md:flex-wrap md:p-2 md:m-6 md:justify-center md:content-center sm:flex sm:flex-wrap sm:p-2 2xl:m-6 sm:justify-center sm:content-center flex flex-wrap p-2 m-0 justify-center content-center">
          <div className="rounded-xl inner-workspace-mac h-[300px] w-[360px] 2xl:h-[575px] 2xl:w-[956px] xl:h-[450px] xl:w-[806px] lg:h-[440px] lg:w-[650px] md:h-[280px] md:w-[448px] sm:h-[200px] sm:w-[400px] 2xl:flex 2xl:flex-wrap 2xl:flex-row xl:flex xl:flex-wrap xl:flex-row lg:flex lg:flex-wrap lg:flex-row md:flex md:flex-wrap md:flex-row sm:flex sm:flex-wrap sm:flex-row flex flex-wrap flex-row 2xl:shadow-xl 2xl:shadow-slate-900/50 xl:shadow-xl xl:shadow-slate-900/50 lg:shadow-xl lg:shadow-slate-900/50 md:shadow-xl md:shadow-slate-900/50 sm:shadow-xl sm:shadow-slate-900/50 shadow-xl shadow-slate-900/50"   >
            <Cards />
          </div>
       </Content>
    </>
    )
}

export default MacContent;

