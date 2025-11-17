import Image from "next/image";
import Slide from "./home/page";
import Header from "./header/page";
import Footer from "./footer/page";
import Landingpage from "./landingPage/page";
import Secpage from "./features/page";
import Pricepage from "./pricePage/page";
import Review from "./reviews/page";


export default function Home() {
  return (
    <main >
      {/* <Header/> */}
      <Slide/>
      <Landingpage/>
      <Secpage/>
      <Pricepage/>
      <Review/>
      {/* <Footer/> */}
    </main>
  );
}
