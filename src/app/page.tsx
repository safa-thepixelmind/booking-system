import HeroSlider from './component/HeroSection';
import Image from "next/image";
import App from './component/testimonies';
import WhyChooseUs from './component/whychooseus';
import AboutUs from './component/about';
import PopularDestinations from './component/explore';
export default function Home() {
    return (
      <>
       
        <HeroSlider />
        <AboutUs/>
        <WhyChooseUs/>
        <PopularDestinations/>
        <App/>
        
        </>
    );
}