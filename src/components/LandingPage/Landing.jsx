import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="landing-main">
        <div className="landing-text">
          <h1>Transform Your Employee Review Process</h1>
          <p>
            Make smarter and fairer appraisals with our powerful solution, built
            to streamline employee reviews and drive growth within your
            organization. Say goodbye to bias and inefficiency!
          </p>
          <button onClick={() => navigate("/signup")} className="get-started-button">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Landing;
