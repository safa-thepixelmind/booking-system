import Footer from "./component/Footer";
import HeroSlider from './component/HeroSection';
import Navbar from "./component/Navbar";

export default function Home() {
    return (
      <>
        <Navbar />
        <HeroSlider />
        <Footer />
      </>
    );
}