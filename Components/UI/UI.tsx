import Header from "./Header/page";
import Banner from "./Banner/page";
import Services from "./Services/page";
import AnimatedTestimonialsDemo from "./Reviews/testimonials";
import AboutUs from "./AboutUs/page";
import Footer from "./Footer/page";
import "./globals.css";

export default function UI() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <AnimatedTestimonialsDemo />
      <AboutUs />
      <Footer />
    </>
  );
}