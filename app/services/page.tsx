import Header from "./Header";
import OurServices from "./OurServices";
import ValuableClients from "@/components/ValuableClients";
import GetInTouch from "./GetInTouch";
import SectorsWeServe from "@/components/Sectors/WeServe";
import FAQSection from "@/components/Questions";
import DownloadOurApp from "@/components/DownloadOurApp";

const ServicesPage = () => {
  return (
    <div>
      <Header />
      <OurServices />
      <SectorsWeServe />
      <FAQSection />
      <ValuableClients />
      <GetInTouch />
      <DownloadOurApp />
    </div>
  );
};

export default ServicesPage;
