/* eslint-disable react/jsx-no-undef */
import ConstructionExcellency from "@/components/About/ConstructionExcellency";
import OurMission from "@/components/About/OurMission";
import ClientTestimonials from "@/components/PeopleSays";
import Footer from "@/components/Footer";
import HeroImage from "@/components/Common/HeroImage/HeroImage";
import MeetOurTeam from "@/components/Questions";
import Navbar from "@/components/Navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <ConstructionExcellency />
      <OurMission />
      <MeetOurTeam />
      <ClientTestimonials />
      <Footer />
    </div>
  );
};

export default AboutPage;
