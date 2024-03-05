import Image from "next/image";
import Header from "./components/Header/page";
import About from "./components/About/page";
import Contract from "./components/Contract/page";
import Footer from "./components/Footer/page";
import Skills from "./components/Skills/page";
import Works from "./components/Works/page";
import Text from "./components/Text/page";
export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <div className="">
          <div className=" pt-[200px]  px-4 md:px-20 lg:pl-[800px] xl:pl-[1000px] 2xl:pl-[1100px]">
            <div>
              {" "}
              <About />
            </div>{" "}
          </div>
        </div>
        <Text />
        <Skills />
        <Works />
        <Contract />
        <Footer />
      </div>
    </div>
  );
}
