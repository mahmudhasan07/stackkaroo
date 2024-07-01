import Image from "next/image";
import Banner from "./Components/Banner/Banner";
import Trust from "./Components/Trust-Stackkaroo/Trust";
import Chosen from "./Components/Choose-Us/Chosen";

export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <Trust></Trust>
      <Chosen></Chosen>
    </main>
  );
}
