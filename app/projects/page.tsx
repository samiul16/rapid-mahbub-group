// pages/projects/page.tsx
import ProjectsPage from "./ProjectsPage";
import Header from "./Header";
import ClientTestimonials from "./ClientsTestimonial";
import OurWorks from "./OurWorks";
import OurClients from "@/components/OurClients";

export default function Projects() {
  return (
    <>
      <Header />
      {/* <ProjectsPage />
      <ClientTestimonials /> */}
      <OurWorks />
      <OurClients />
    </>
  );
}
