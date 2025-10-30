import Header from "./Header";
import WeServe from "../../components/Sectors/WeServe";
import ValuableClients from "@/components/ValuableClients";
import GetInTouch from "../services/GetInTouch";
import Questions from "@/components/Questions";
import DownloadOurApp from "@/components/DownloadOurApp";

const SectorPage = () => {
  return (
    <div>
      <Header />
      <WeServe />
      <ValuableClients />
      <GetInTouch />
      <Questions />
      <DownloadOurApp />
    </div>
  );
};

export default SectorPage;
