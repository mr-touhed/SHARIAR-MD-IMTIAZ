
import Img from "/shariar.png?url"
import { IoIdCardOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import SectionCard from "../components/SectionCard";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidNetworkChart } from "react-icons/bi";
import { GoPaperclip } from "react-icons/go";
const exprience = [
    {
        id:1,
         positon: "Associate Professor",
         institute:"Sylhet Agricultural University"
    },
    {
        id:2,
         positon: "Course Facilitator",
         institute:"MIT World Peace University"
    }
]

const SubLayout = ({children}) => {
    return (
        <section className="section">
            <div className="grid md:grid-cols-[1fr_3fr] grid-cols-1 gap-4">
            <div className="card bg-teal-500 min-h-screen p-4 text-center text-white space-y-4">
                        <img src={Img} alt="" className="w-[200px] h-[200px] rounded-full mx-auto" />
                        <p>MR</p>
                        <h2 className="text-2xl font-extrabold">SHARIAR MD IMTIAZ</h2>
                        <div className="border-dotted border-y-2 flex gap-4 px-2 py-1">
                                <span className="flex w-6 h-6 rounded-full border font-light bg-lime-500 text-[12px] justify-center items-center">ID</span>
                                <span>0000-0001-8260-0728</span>
                        </div>

                        <div className="p-2 my-6 border-dotted border-b-2">

                            {
                                exprience.map(exp => <ul key={exp.id} className="space-y-4">
                                        <li className="flex items-center text-left gap-6">
                                            <div className="w-6 h-6 bg-[#f1f1f151] rounded-full flex items-center justify-center">
                                            <IoIdCardOutline className=""/>
                                            </div>
                                            <div>
                                                <p>{exp.positon}</p>
                                                <p>{exp.institute}</p>
                                            </div>

                                        </li>
                                </ul>)
                            }
                        </div>
                        
                               <SectionCard>
                                        <li className="flex items-center gap-6">
                                            <div className="w-6 h-6 bg-[#f1f1f151] rounded-full flex items-center justify-center">
                                            <FaPhone  className=""/>
                                            
                                            </div>
                                            <span>+00 000 00000 0000</span>
                                        </li>
                                        <li className="flex items-center gap-6">
                                            <div className="w-6 h-6 bg-[#f1f1f151] rounded-full flex items-center justify-center">
                                            <FaPhone  className=""/>
                                            
                                            </div>
                                            <span>+00 000 00000 0000</span>
                                        </li>
                               </SectionCard>
                        

                                    {/* email section  */}


                                    <SectionCard>
                                        
                                        <li className="flex items-center gap-6">
                                            <div className="w-6 h-6 bg-[#f1f1f151] rounded-full flex items-center justify-center">
                                            <HiOutlineMailOpen  className=""/>
                                            
                                            </div>
                                            <span>some@mail.com</span>
                                        </li>
                                        <li className="flex items-center gap-6">
                                            <div className="w-6 h-6 bg-[#f1f1f151] rounded-full flex items-center justify-center">
                                            <HiOutlineMailOpen  className=""/>
                                            
                                            </div>
                                            <span>some@mail.com</span>
                                        </li>
                               </SectionCard>
                               {/* address section */}
                               <SectionCard>
                                        
                                        <li className="flex items-center gap-6">
                                            <div className="w-6 h-6 bg-[#f1f1f151] rounded-full flex items-center justify-center">
                                            <IoLocationSharp  className=""/>
                                            
                                            </div>
                                            <div>
                                            Sylhet Agricultural University, Department of Parasitology, <br/> Room Number 214 (2nd Floor, FVABS Old Building), Sylhet, 3100, Bangladesh
                                            </div>
                                        </li>
                                        
                               </SectionCard>
                                    {/* network section  */}
                               <SectionCard>
                                        
                                        <li className="flex items-center gap-6">
                                            <div className="w-6 h-6 bg-[#f1f1f151] rounded-full flex items-center justify-center">
                                            <BiSolidNetworkChart   className=""/>
                                            
                                            </div>
                                            <p>Collaboration Network</p>
                                        </li>
                                        
                               </SectionCard>
                                    {/* others  */}
                               <SectionCard>
                                        
                                        <li className="flex items-center gap-6">
                                            <div className="w-6 h-6 bg-[#f1f1f151] rounded-full flex items-center justify-center">
                                            <GoPaperclip    className=""/>
                                            
                                            </div>
                                            <p>Tilak Chandra Nath</p>
                                        </li>
                                        <li className="flex items-center gap-6">
                                            <div className="w-6 h-6 bg-[#f1f1f151] rounded-full flex items-center justify-center">
                                            <GoPaperclip    className=""/>
                                            
                                            </div>
                                            <p>Tilak Chandra Nath</p>
                                        </li>
                                        <li className="flex items-center gap-6">
                                            <div className="w-6 h-6 bg-[#f1f1f151] rounded-full flex items-center justify-center">
                                            <GoPaperclip    className=""/>
                                            
                                            </div>
                                            <p>Tilak Chandra Nath</p>
                                        </li>
                                        <li className="flex items-center gap-6">
                                            <div className="w-6 h-6 bg-[#f1f1f151] rounded-full flex items-center justify-center">
                                            <GoPaperclip    className=""/>
                                            
                                            </div>
                                            <p>Tilak Chandra Nath</p>
                                        </li>
                                        
                               </SectionCard>

                        
                </div>

            <div>
                {
                    children
                }
            </div>
            </div>
        </section>
    );
};

export default SubLayout;