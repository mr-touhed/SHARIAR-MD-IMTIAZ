
import profileImg from "/shariar.png?url"
import { FaDownload } from "react-icons/fa6";

const HeroSection = () => {
   
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 items-center section min-h-screen gap-8" >
                <section className="grid grid-cols-1 place-items-center p-4 space-y-3 text-[1.2rem] max-w-[400px] mx-auto">
                <img src={profileImg} alt="" className=" rounded-full"/>
                    <h1 className="text-2xl font-extrabold">Shariar Md Imtiaz, Ph.D.</h1>
                    <p>Postdoctoral Researcher</p>
                    <p className="text-center">Department of Information and Communication Engineering,

                Chungbuk National University, Cheongju, South Korea.</p>
                <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/shariar-md-imtiaz/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="/linkedin.png" alt="" width={72} height={72}  className="w-12 h-12"/>
                </a>
                <a
                  href="https://scholar.google.com/citations?user=Ik7_T3kAAAAJ&hl=en"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src="/google-scholar.png"
                    alt=""
                    width={72}
                    height={72}
                    className="w-12 h-12"
                  />
                </a>
                <a
                  href="https://www.researchgate.net/profile/Shariar-Md-Imtiaz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src="/research-gate.png"
                    alt=""
                    width={72}
                    height={72}
                    className="w-12 h-12"
                  />
                </a>
                <a
                  href="https://sciprofiles.com/profile/ShariarMdImtiaz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="/sci.png" alt="" width={72} height={72}  className="w-12 h-12"/>
                </a>
                <a
                  href="https://orcid.org/0000-0002-7001-1667"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="/orcid.png" alt="" width={72} height={72}  className="w-12 h-12"/>
                </a>
                </div>

                </section>
            <section className="space-y-8 text-[1.2rem]">
                        
                        <div>
                        <h2 className="text-3xl font-bold">Hi, I'm <span className="text-teal-500"> SHARIAR MD IMTIAZ</span></h2>
                            <p className="leading-10"   >
                            I am working in the Optical Information Processing (OIP) Laboratory at Chungbuk National University (CBNU) as a Postdoctoral Researcher.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-teal-500">Biography:</h3>
                            <p className="leading-10">As a Graduate Research Assistant, I have worked under the supervision of Prof. Dr. Nam Kim at the Information and Communication Engineering Department of Chungbuk National University (CBNU) in Cheongju, South Korea. During my Ph.D. program, I dedicated my studies to delving into the extensive possibilities of deep learning and machine learning in the areas of depth estimation and 3D image visualization techniques. Through this program, I gained significant knowledge in computer vision, image reconstruction, and human-computer interaction.</p>
                        </div>
                        <div>
                        <h3 className="text-2xl font-semibold text-teal-500">Research Interests:</h3>
                            <p className="leading-10">Human-computer Interaction, Computer Vision, Image Processing, 3D image reconstruction, Deep Learning, and Machine Learning.</p>
                        </div>


                        <button className="btn bg-teal-500 text-white">
                        <FaDownload /> <span>download cv</span>
                        </button>
            </section>
        </div>
    );
};

export default HeroSection;