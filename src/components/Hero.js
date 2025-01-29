import HeroImg from '../assets/hero1.jpg.jpeg';
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";

export default function Hero() {
    return (
        <section className="flex md:flex-row flex-col-reverse lg:flex-row items-center px-5 py-32 bg-primary justify-center">
            <div className="md:w-1/2 flex flex-col">
                <h1 className="text-white text-6xl lg:text-6xl font-hero leading-tight">
                    Hi, <br /> I'm Ragavi
                    <p className="text-white text-2xl lg:text-4xl">
                        I'm a Full-stack developer
                    </p>
                </h1>
                <div className="flex py-10">
                    {/* Instagram Link */}
                    <a 
                        href="https://www.instagram.com/yourusername" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="pr-5 hover:text-white"
                    >
                        <AiOutlineInstagram size={40} />
                    </a>

                    {/* Facebook Link */}
                    <a 
                        href="https://www.facebook.com/__.kitty__queen__" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="pr-5 hover:text-white"
                    >
                        <AiOutlineFacebook size={40} />
                    </a>

                    {/* LinkedIn Link */}
                    <a 
                        href="https://www.linkedin.com/in/ragavi123" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-white"
                    >
                        <AiOutlineLinkedin size={40} />
                    </a>
                </div>
            </div>

            <img 
                className="md:w-1/6 lg:w-1/6 h-auto object-contain mb-10 lg:mb-0" 
                src={HeroImg} 
                alt="Hero" 
            />
        </section>
    );
}
