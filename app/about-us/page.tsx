import AboutUsSection from "@/components/Common/CommonHeader";

import WhoWeAre from "@/components/WhoWeAre";
import StatsSection from "./stats";
import OurClients from "@/components/OurClients";
import MeetOurTeam from "@/components/MeetOurTeam";
import Certification from "@/components/About/Certification";

const AboutUsPage = () => {
  return (
    <div>
      <AboutUsSection />
      <WhoWeAre />
      <StatsSection />
      {/* <AboutSection />
      <ArcoDeliver /> */}
      <OurClients />
      <MeetOurTeam />
      <Certification />
    </div>
  );
};

export default AboutUsPage;
