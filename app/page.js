
import ContactHome from "../components/ContactHome";
import CaseStudies from "../components/home/CaseStudies";
import Hero from "../components/home/Hero";
// import Home1 from "../components/home/Home1";

export default function Home() {
  return (
    <div className=" overflow-visible">

      <Hero />
     
      <CaseStudies />
      {/* <Home1 /> */}
      <ContactHome />
    </div>
  );
}
