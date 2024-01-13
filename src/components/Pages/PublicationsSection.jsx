
import PublicationCard from "../PublicationCard";
import SectionTitle from "../SectionTitle";
import Paginate from "../../assets/tools/paginate";
const publications = [
    {
      id: 1,
      title:
        "Identification and Correction of Microlens-array Error in an Integral-imaging-microscopy System",
      type: "Article",
      authors:
        "S.M. Imtiaz, K.-C. Kwon, M.S. Alam, M.B. Hossain, N. Changsup and N. Kim",
      publication: "Current Optics and Photonics 2021, 5(5), 524-531.",
      published_date: "25 October 2021",
      doi: "https://doi.org/10.3807/COPP.2021.5.5.524",
      image_url:
        "https://i.ibb.co/g7MBm14/Figure-4-Process-diagram-for-the-proposed-method-of-microlens-error-estimation-and-correction.jpg",
      article_url: "https://www.coppjournal.org/journal/view.html?uid=1420",
      abstract:
        "In an integral-imaging microscopy (IIM) system, a microlens array (MLA) is the primary optical element; however, surface errors impede the resolution of a raw image’s details. Calibration is a major concern with regard to incorrect projection of the light rays. A ray-tracing-based calibration method for an IIM camera is proposed, to address four errors: MLA decentering, rotational, translational, and subimage-scaling errors. All of these parameters are evaluated using the reference image obtained from the ray-traced white image. The areas and center points of the microlens are estimated using an “8-connected” and a “center-of-gravity” method respectively. The proposed approach significantly improves the rectified-image quality and nonlinear image brightness for an IIM system. Numerical and optical experiments on multiple real objects demonstrate the robustness and effectiveness of our proposed method, which achieves on average a 35% improvement in brightness for an IIM raw image.",
    },
    {
      id: 2,
      title:
        "Depth Estimation for Integral Imaging Microscopy Using a 3D–2D CNN with a Weighted Median Filter",
      type: "Article",
      authors:
        "S.M. Imtiaz, K.-C. K, M.B. Hossain, M.S. Alam, S.-H. Jeon, and N. Kim",
      publication: "Sensors 2022, 22, 5288.",
      published_date: "15 July 2022",
      doi: "https://doi.org/10.3390/s22145288",
      image_url: "https://i.ibb.co/VD35F9D/New-Result.png",
      article_url: "https://www.mdpi.com/1424-8220/22/14/5288",
      abstract:
        "This study proposes a robust depth map framework based on a convolutional neural network (CNN) to calculate disparities using multi-direction epipolar plane images (EPIs). A combination of three-dimensional (3D) and two-dimensional (2D) CNN-based deep learning networks is used to extract the features from each input stream separately. The 3D convolutional blocks are adapted according to the disparity of different directions of epipolar images, and 2D-CNNs are employed to minimize data loss. Finally, the multi-stream networks are merged to restore the depth information. A fully convolutional approach is scalable, which can handle any size of input and is less prone to overfitting. However, there is some noise in the direction of the edge. A weighted median filtering (WMF) is used to acquire the boundary information and improve the accuracy of the results to overcome this issue. Experimental results indicate that the suggested deep learning network architecture outperforms other architectures in terms of depth estimation accuracy.",
    },
    {
      id: 3,
      title:
        "Enhanced 3D Point Cloud Reconstruction for Light Field Microscopy Using U-Net-Based Convolutional Neural Networks",
      type: "Article",
      authors:
        "S.M. Imtiaz, K.-C. K, F. M. F. Hossain, M.B. Hossain, R. K. Shinde, S.-K. Gil, and N. Kim",
      publication:
        "Computer Systems Science and Engineering 2023, 47(3), 2921-2937.",
      published_date: "09 November 2023",
      doi: "https://doi.org/10.32604/csse.2023.040205",
      image_url: "https://i.ibb.co/0mxwyM0/fig13.jpg",
      article_url: "https://www.techscience.com/csse/v47n3/54577",
      abstract:
        "This article describes a novel approach for enhancing the three-dimensional (3D) point cloud reconstruction for light field microscopy (LFM) using U-net architecture-based fully convolutional neural network (CNN). Since the directional view of the LFM is limited, noise and artifacts make it difficult to reconstruct the exact shape of 3D point clouds. The existing methods suffer from these problems due to the self-occlusion of the model. This manuscript proposes a deep fusion learning (DL) method that combines a 3D CNN with a U-Net-based model as a feature extractor. The sub-aperture images obtained from the light field microscopy are aligned to form a light field data cube for preprocessing. A multi-stream 3D CNNs and U-net architecture are applied to obtain the depth feature from the directional sub-aperture LF data cube. For the enhancement of the depth map, dual iteration-based weighted median filtering (WMF) is used to reduce surface noise and enhance the accuracy of the reconstruction. Generating a 3D point cloud involves combining two key elements: the enhanced depth map and the central view of the light field image. The proposed method is validated using synthesized Heidelberg Collaboratory for Image Processing (HCI) and real-world LFM datasets. The results are compared with different state-of-the-art methods. The structural similarity index (SSIM) gain for boxes, cotton, pillow, and pens are 0.9760, 0.9806, 0.9940, and 0.9907, respectively. Moreover, the discrete entropy (DE) value for LFM depth maps exhibited better performance than other existing methods.",
    },
  ];

const PublicationsSection = () => {
  
  const {currentItems,buttons} = Paginate(publications)
 
 
    return (
        <section>
                <SectionTitle>
                Publications
                </SectionTitle>

                <div className="join flex justify-center mt-8">
          
         {buttons}
        

</div>
                <div className="grid grid-cols-1 gap-4">
          {currentItems.map((info) => (
            <PublicationCard key={info.id} info={info}></PublicationCard>
          ))}
        </div>
        </section>
    );
};

export default PublicationsSection;