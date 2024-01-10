import SectionTitle from "./SectionTitle";

const annoused =[
    {
        id:1,
        title:"Fardina Alam Joins UMD to Teach Courses in New Data Science Minor",
        body:"Fardina Alam will join the University of Maryland's Department of Computer Science in August 2023 as a lecturer. Alam, who recently earned her Ph.D. in computer science from George Mason University, was honored with the department's outstanding dissertation award for her research on utilizing deep learning techniques to extract meaningful information from protein structure data.“We are excited to welcome Dr. Alam to our department,” said Department Chair Matthias Zwicker, who holds the Elizabeth Iribe Chair for Innovation and the Phillip H. and Catherine C. Horvitz Professorship."
    },
    {
        id:2,
        title:"Fardina Alam Joins UMD to Teach Courses in New Data Science Minor",
        body:"Fardina Alam will join the University of Maryland's Department of Computer Science in August 2023 as a lecturer. Alam, who recently earned her Ph.D. in computer science from George Mason University, was honored with the department's outstanding dissertation award for her research on utilizing deep learning techniques to extract meaningful information from protein structure data.“We are excited to welcome Dr. Alam to our department,” said Department Chair Matthias Zwicker, who holds the Elizabeth Iribe Chair for Innovation and the Phillip H. and Catherine C. Horvitz Professorship."
    }
]


const Announcement = () => {
    return (
        <section className="section space-y-3 mt-8 ">
                <SectionTitle>
                Announcement
                </SectionTitle>

               <div className="md:max-h-[200px] overflow-x-auto announce mr-6">

               {
                    annoused.map(announce => <div key={announce.id} className="p-6 border-2 rounded-md space-y-3 my-4">
                            <h2 className="text-2xl">{announce.title}</h2>
                            <p>{announce.body}</p>
                    </div>)
                }
               </div>
        </section>
    );
};

export default Announcement;