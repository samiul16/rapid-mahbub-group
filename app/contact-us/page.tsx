import Hero from "../../components/contact-us/HeroContact";
import GetInTouch from "../../components/contact-us/GetInTouch";
import Contact from "../../components/contact-us/Contact";
import Map from "../../components/contact-us/Map";
import OurClients from "@/components/OurClients";
import DownloadOurApp from "@/components/DownloadOurApp";

export default function page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GetInTouch />
      {/* <Contact /> */}
      <Map />
      <OurClients />
    </div>
  );
}
