import AboutImg from '../assets/about.png';

export default function About() {
    return (
        <section className="flex flex-col md:flex-row bg-secondary px-5 py-10 items-center " id='about'>
            {/* Image Section */}
            <div className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0">
                <img 
                    src={AboutImg} 
                    alt="About Me" 
                    className="w-3/4 h-auto object-cover rounded-2xl shadow-lg"
                />
            </div>
            
            {/* Text Section */}
            <div className="md:w-1/2 w-full flex justify-center">
                <div className="flex flex-col justify-center max-w-md">
                    {/* Heading */}
                    <h1 className="text-4xl text-black border-b-4 border-primary mb-5 font-bold">
                        About Me
                    </h1>
                    
                    {/* About Description */}
                    <p className="text-black text-lg leading-7 mb-4">
                        Hi, my name is <span className="font-bold">Ragavi N</span>. 
                        I am a passionate Full-Stack Web Developer with experience in building beautiful and functional websites using 
                        <span className="font-bold"> React.js</span> and <span className="font-bold">Tailwind CSS</span>.
                    </p>
                    
                    <p className="text-black text-lg leading-7 mb-4">
                        I have expertise in Frontend technologies like <span className="font-bold">React.js</span>, 
                        <span className="font-bold">Axios</span>, and <span className="font-bold">Tailwind CSS</span>. My goal is to create seamless and responsive web experiences that enhance user satisfaction.
                    </p>

                    <p className="text-black text-lg leading-7">
                        On the backend, I am proficient in <span className="font-bold">Laravel</span>, 
                        <span className="font-bold"> PHP</span>, and <span className="font-bold">MySQL</span>. I specialize in creating robust APIs, managing databases, and ensuring the smooth integration between the frontend and backend.
                    </p>
                </div>
            </div>
        </section>
    );
}
