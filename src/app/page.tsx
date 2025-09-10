import Footer from "./component/Footer";
import HeroSlider from './component/HeroSection';
import App from './component/testimonies';
import WhyChooseUs from './component/whychooseus';
import Navbar from "./component/Navbar";

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