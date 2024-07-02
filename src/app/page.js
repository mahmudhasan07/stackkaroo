import Image from "next/image";
import Banner from "./Components/Banner/Banner";
import Trust from "./Components/Trust-Stackkaroo/Trust";
import Chosen from "./Components/Choose-Us/Chosen";
import Service from "./Components/Service/Service";
import Difference from "./Components/Differenct_Business/Difference";
import Discover from "./Components/Discover_Stackkaroo/Discover";
import WorkAndPride from "./Components/WorkAndPride/WorkAndPride";

export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <Trust></Trust>
      <Chosen></Chosen>
      <Service></Service>
      <Difference></Difference>
      <Discover></Discover>
      <WorkAndPride></WorkAndPride>
    </main>
  );
}
