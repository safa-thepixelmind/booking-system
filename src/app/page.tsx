import HeroSlider from './component/HeroSection';
import Image from "next/image";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export default function Home() {
    return (
        <Navbar />
        <HeroSlider />
        <Footer />
    );
}