import HeroSlider from './component/HeroSection';
import Image from "next/image";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import App from './component/testimonies';
import WhyChooseUs from './component/whychooseus';
export default function Home() {
    return (
      <>
        <Navbar />
        <HeroSlider />
        <WhyChooseUs/>
        <App/>
        <Footer />
        </>
    );
}