
import ConferenceCard from "../ConferenceCard";
import SectionTitle from "../SectionTitle";
import Paginate from "../../assets/tools/paginate";

const conferences = [
    {
      _id: 1,
      type: "Conference",
      title:
        "Resolution Enhancement of an Integral Imaging Microscopy Using Generative Adversarial Network",
      authors:
        "M.S. Alam, K.C. Kwon, M. Erdenebat, Y. Lim, S.M. Imtiaz, M. A. Sufian, S. Jeon, and N. Kim",
      conference_title:
        "14th Pacific Rim Conference on Lasers and Electro-Optics",
      location: "Sydney, Australia",
      date: "3–5 August 2020",
      doi: "10.1364/CLEOPR.2020.C3G_4",
      url: "https://ieeexplore.ieee.org/document/9256105",
      abstract:
        "We propose a deep learning-based resolution enhancement method for integral imaging microscopy. The elemental images were captured through a microlens array which generates orthographic view images. Resolution enhancement was done by the generative adversarial network.",
    },
    {
      _id: 2,
      type: "Conference",
      title:
        "Centroid Shift Calibration of Microlens Array for Integral Image Microscope",
      authors: "S.M. Imtiaz, M.Y. Abbass, K.-C. Kwon, J. Jeong, and N. Kim",
      conference_title:
        "The 20th International Meeting on Information Display (IMID 2020)",
      location: "Seoul, South Korea",
      date: "25-28 August, 2020",
      doi: "N/A",
      url: "http://www.im_id.or.kr/2020/index.asp",
      abstract:
        "Microlens-array based light field cameras have the ability to take both angular and spatial information of light, thus delivering a 2D image with the depth information of the whole scene. The calibration of the microlenses is an important step in many applications, especially the three- dimensional shape measurement. To improve the calibration result, the rotational correction of the main lens method is proposed.",
    },
    {
      _id: 3,
      type: "Conference",
      title:
        "Microlens array displacement calibration method for integral imaging microscopy system",
      authors:
        "S.M. Imtiaz, M.S. Alam, M.Y. Abbass, K.-C. Kwon, S.H. Jeong, S.K. Gil, and N. Kim",
      conference_title: "Photonics Conference",
      location: "Seoul, South Korea",
      date: "25-26 Nov, 2020",
      doi: "N/A",
      url: "",
      abstract:
        "This paper presents a methodology for a manufacturing error calibration of the microlens array (MLA) in an integral imaging microscopy (IIM) system. Displacement errors occurred by manufacturing defects that causes 3D information loss and deviation. Step-by-step calibration procedures are defined for IIM system based on light ray. To improve the image quality, the error correction method is proposed.",
    },
    {
      _id: 4,
      type: "Conference",
      title:
        "User interactive high-resolution multi-view display system using a three-dimensional head-tracking camera",
      authors:
        "M.S. Alam, K.-C. Kwon, S.M. Imtiaz, J.K. Pan, J.R. Jeong, and N. Kim",
      conference_title: "Advances in Display Technologies XI (SPIE.)",
      location: "California, United States",
      date: "06-12 Mar, 2021",
      doi: "10.1117/12.2578331",
      url: "https://doi.org/10.1117/12.2578331",
      abstract:
        "Multiview display is a popular method to deliver three-dimensional (3D) images by generating a perspective directional view. However, there are some limitations such as a low resolution, lack of motion parallax, and a narrow viewing angle. In this paper, we propose a method to implement a multi-view display system that provides a 3D image in high resolution. The original setup is composed of a stereoscopic 3D display panel and a head tracking camera. The directional view image of a 3D object is captured by a camera array and shown on a stereoscopic 3D display.",
    },
    {
      _id: 5,
      type: "Conference",
      title:
        "User interactive 3D display system for integral imaging microscopy using a tracking camera",
      authors: "S.M. Imtiaz, K.-C. Kwon, O.S. Nam, S.H. Jeon, and N. Kim",
      conference_title:
        "The 28th Optoelectronics and Optical Communication Conference",
      location: "Busan, South Korea",
      date: "02-04 Jun, 2021",
      doi: "N/A",
      url: "",
      abstract:
        "The optical microscope has become the most used device in a w_ide range of applications to observe an object's microscopic images. Integral imaging microscopy (IIM) is a three-dimensional (3-D) microscopy system that can capture angular information using a microlens array (MLA). We present a system for implementing a multi-view display system for the IIM system that provides a true 3D image.",
    },
    {
      _id: 6,
      type: "Conference",
      title:
        "User interactive display system for integral imaging microscopy using a head-tracking camera",
      authors:
        "S.M. Imtiaz, K.-C. Kwon, O.S. Nam, S.H. Jeon, S.K. Gil and N. Kim",
      conference_title:
        "The 21st International Meeting on Information Display (IMID 2021)",
      location: "Seoul, South Korea",
      date: "25-27 Aug, 2021",
      doi: "N/A",
      url: "http://www.imid.or.kr/2021/index.asp",
      abstract:
        "Using a microlens array (MLA), integral imaging microscopy (IIM) captures angular information in three dimensions. In this paper, we provide a three-dimensional display system using a deep neural network and augmented reality (AR) for the IIM that renders a true 3D image. ",
    },
    {
      _id: 7,
      type: "Conference",
      title:
        "Microlens Array Rotational Error Calibration Method for Integral Imaging Microscopy System",
      authors:
        "S.M. Imtiaz, K.-C. Kwon, M. B. Hossain, N. Darkhanbaatar, O.S. Nam, R. Shinde, C.W. Shin, H. Kang, S.H. Jeon, and N. Kim",
      conference_title: "SPIE. Advanced Biophotonics Conference 2021",
      location: "Busan, South Korea",
      date: "4-6 Nov, 2021",
      doi: "N/A",
      url: "",
      abstract:
        "The integral imaging microscopy (IIM) system has a wide range of applications, although it requires some pre-processing of the raw images before advancing operation. This paper presents a methodology for the rotational calibration of the microlens array (MLA) in the IIM system. Rotational errors caused by the assembly of defects can result in 3D information loss and deviation. We define step-by-step calibration procedures for integral imaging microscopy with the image sensor and angular coordinates of the MLA based on light rays. The experimental results verify the accuracy of the proposed method using the ground truth value.",
    },
    {
      _id: 8,
      type: "Conference",
      title:
        "Deep learning-based depth estimation technique for integral imaging microscopy system",
      authors:
        "S.M. Imtiaz, A. Khuderchuluun, M.U. Erdenebat, K.C. Kwon, M.B. Hossain, H. Kang, and N. Kim",
      conference_title:
        "The 29th Optoelectronics and Optical Communication Conference",
      location: "Busan, South Korea",
      date: "25-27 May 2022",
      doi: "N/A",
      url: "",
      abstract:
        "Convolutional neural networks (CNNs) have recently shown impressive results for estimating depth-map from microscopic images. This study presents a depth estimation network using CNNs and microscopic epipolar plane images (EPIs) based on synthetic light field datasets. Multiple directions of microscopic images are chosen as inputs, and convolutional blocks are implemented according to the disparities in EPI's of different directions.",
    },
    {
      _id: 9,
      type: "Conference",
      title:
        "Occlusion-aware depth estimation for integral imaging microscopy system using a deep-learning method",
      authors:
        "S.M. Imtiaz, O.S. Nam, J.H. Kim, M.B. Hossain, S.H. Jeon, and N. Kim",
      conference_title: "Optics and Photonics Congress 2022",
      location: "Jeju, South Korea",
      date: "03-06 Jul 2022",
      doi: "N/A",
      url: "",
      abstract:
        "The epipolar plane images (EPIs) that represent the disparity of a 3D point are widely used to estimate depth in light fields. In this study, we use an approach that extracts EPIs in all possible directions from an elemental image array (EIA) of an integral imaging microscopy (IIM) system. Our work presents an occlusion-aware depth estimation network based on a convolutional neural network (CNNs) and multi-orientation microscopic EPIs.",
    },
    {
      _id: 10,
      type: "Conference",
      title:
        "Three-dimensional display system for an integral imaging microscope using a deep neural network and augmented reality",
      authors:
        "S.M. Imtiaz, A. Khuderchuluun, M.-U. Erdenebat, K.-C. Kwon, M.B. Hossain, H. Kang, J.-R. Jeong, and N. Kim",
      conference_title:
        "The 22nd International Meeting on Information Display (IMID 2022)",
      location: "Busan, Korea",
      date: "23-26 Aug 2022",
      doi: "N/A",
      url: "http://www.imid.or.kr/2022/index.asp",
      abstract:
        "Using a microlens array (MLA), integral imaging microscopy (IIM) captures angular information in three dimensions. In this paper, we provide a three-dimensional display system using a deep neural network and augmented reality (AR) for the IIM that renders a true 3D image. ",
    },
    {
      _id: 11,
      type: "Conference",
      title:
        "3D Reconstruction for Integral Imaging Microscopy System using Deep Neural Networks",
      authors:
        "S.M. Imtiaz, A. Khuderchuluun, F.M.F. Hossain, M.-U. Erdenebat, K.-C. Kwon, S.-K. Gil, and N. Kim",
      conference_title:
        "The 23rd International Meeting on Information Display (IMID-2023)",
      location: "Busan, South Korea",
      date: "22-25 Aug 2023",
      doi: "N/A",
      url: "http://www.imid.or.kr/2023/index.asp",
      abstract:
        "In this article, a new method is presented to improve the reconstruction of three-dimensional (3D) point clouds for an integral imaging microscopy system (IIM) using a fully convolutional neural network (CNN) based on the U-net architecture. Since IIM has a restricted directional view and may have noise and artifacts, it is difficult to reconstruct 3D point clouds accurately.",
    },
    // {
    //   _id: 12,
    //   type: "Conference",
    //   title: "",
    //   authors: "",
    //   conference_title: "",
    //   location: "Seoul, Korea",
    //   date: "",
    //   doi: "N/A",
    //   url: "",
    //   abstract: "",
    // },
  ];
const Conference = () => {
  const {currentItems,buttons} = Paginate(conferences)
    return (
        <section className="section ">
                    <SectionTitle>Conference</SectionTitle>
                    <div className="join flex justify-center mt-8">
          
          {buttons}
        

</div>
                    <div className="grid grid-cols-1 gap-4">
          {currentItems.map((confData) => (
            <ConferenceCard
              key={confData._id}
              confData={confData}
            ></ConferenceCard>
          ))}
        </div>

        
        </section>
    );
};

export default Conference;