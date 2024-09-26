import { useEffect, useState } from "react";
import Overlay from "./Overlay";
import AboutMainSection from "./AboutmainSection";
import WhatClientSay from "./WhatClientSay";
import WhoWeAreAbout from "./WhoWeAreAboutUs";
import OurGoalAbout from "./OurGoalAbout";

const About = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return <Overlay />;
  }
  return (
    <>
      <AboutMainSection />
      <OurGoalAbout />
      <WhoWeAreAbout />
      <WhatClientSay />
    </>
  );
};
export default About;
