import { useEffect, useState } from "react";
import BestSeller from "./BestSeller";
import ContactUs from "./ContactUs";
import FrequentlyQuestion from "./FrequentlyQuestion";
import Gototop from "./Gototop";
import MainSectionHome from "./MainSectionHome";
import Overlay from "./Overlay";
import WhoWeAre from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if(loading){
    return <Overlay/>
  }
  return (
    <>
      <MainSectionHome />
      <WhyChooseUs />
      <BestSeller />
      <WhoWeAre />
      <FrequentlyQuestion />
      <Gototop />
      <ContactUs />
     
    </>
  );
};
export default Home;
