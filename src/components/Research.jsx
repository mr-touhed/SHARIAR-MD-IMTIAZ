import { useContext } from "react";
import { NavigateContxt } from "../Context/NavigateContext";
import ResearchCard from "./ResearchCard";
import SectionTitle from "./SectionTitle";

const research = [
    {
      id: 1,
      image_url: "https://i.ibb.co/4p4Qd2y/iim.jpg",
      title: "Integral Imaging",
      short_details:
        "Integral imaging is a three-dimensional (3D) imaging technique that captures and displays 3D scenes with a high degree of realism. It is also known as 'integral photography' or 'plenoptic imaging'. Main goal is to display 3D image in the horizontal, wide vertical viewing angle. Full-parallax omnidirectional integral-floating image display.",
      application_area:
        "Light field image & display, depth map estimation, holographic and 3D display",
    },
    {
      id: 2,
      image_url: "https://i.ibb.co/T4LB0Yr/Screenshot-1.jpg",
      title: "Holography 3D Display",
      short_details:
        "Holography is a photographic technique that captures and reproduces three-dimensional images of objects. It uses laser light to create a hologram, which is a complex interference pattern that encodes both the intensity and phase of light.",
      application_area:
        "Holographic Art, Holographic Displays, Holographic Security, Holographic VR-AR Display",
    },
    {
      id: 3,
      image_url: "https://i.ibb.co/TWpPZdN/MRI-of-Human-Brain.jpg",
      title: "Biomedical Image Processing",
      short_details:
        "MRI (Magnetic Resonance Imaging) image processing is a critical component of medical imaging that involves various techniques to improve the quality and extract valuable information from MRI scans. It includes image enhancement to enhance clarity, segmentation and measurement, feature extraction, 3D reconstruction, and the application of machine learning and deep learning for automated analysis and diagnosis.",
      application_area:
        "Biotechnology, Medical Diagnosis, Disease Analysis, etc.",
    },
    {
      id: 4,
      image_url: "https://i.ibb.co/82QNBTh/skin-cancer.jpg",
      title: "Skin Diseases Classification Systems",
      short_details:
        "Skin diseases classification systems are frameworks or methods used by dermatologists and medical professionals to categorize and diagnose various skin conditions. These systems are crucial for accurate diagnosis, treatment planning, and research purposes.",
      application_area:
        "Classification of Diseases  system is used for healthcare administrative purposes, including insurance billing, epidemiological studies, and healthcare resource allocation.",
    },
  ];
const Research = () => {
  const {researchref} = useContext(NavigateContxt) 
    return (
        <section className="section" ref={researchref}>
            <SectionTitle>
                        Research
            </SectionTitle>

            <div className="grid md:grid-cols-4 grid-cols-1 gap-6 mt-8">
                {
                    research.map(info => <ResearchCard key={info.id} info={info}/>)
                }
            </div>
        </section>
    );
};

export default Research;