// pages/projects/page.tsx

import Header from "./Header";
import WeHear from "./WeHear";
import Engineering from "./Engineering";
import OurClients from "@/components/OurClients";
import DownloadOurApp from "@/components/DownloadOurApp";

export default function Projects() {
  return (
    <>
      <Header />
      <WeHear />
      <Engineering />
      <OurClients />
      <DownloadOurApp />
    </>
  );
}
