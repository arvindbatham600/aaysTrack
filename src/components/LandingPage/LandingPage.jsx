import Navbar from "../Navbar/Navbar";
import Landing from "./Landing";
import "./landingPage.scss";

const LandingPage = () => {
  return (
    <>
      <div id="landingPage-main">
        <Navbar />
        <Landing />
      </div>
    </>
  );
};

export default LandingPage;
