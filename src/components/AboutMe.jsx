import SectionTitle from "./SectionTitle";

const degree = [
    {
        id:1,
        title:"Ph.D. in Information and Communication Engineering (Summer 2023)",
        institute: "Chungbuk National University, Cheongju, South Korea."
    },
    {
        id:2,
        title:"M.Sc. in Computer Science and Engineering (2014)",
        institute: "Jashore University of Science and Technology, Jashore, Bangladesh."
    },
    {
        id:3,
        title:"B.Sc. in Computer Science and Engineering (2012)",
        institute: "Jashore University of Science and Technology, Jashore, Bangladesh."
    },
    {
        id:4,
        title:"H.Sc. - Higher Secondary School Certificate (2007)",
        institute: "Nawabganj Govt. College, Chapainawabganj, Bangladesh."
    },
    {
        id:5,
        title:"S.Sc. - Secondary School Certificate (2005),",
        institute: "Harimohan Govt High School, Chapainawabganj, Bangladesh."
    },
    
]

const skills = [
    {
        id:1,
        title: "Technologies:",
        tools:["Neural Network","TensorFlow","PyTorch","Keras","Numpy","Open CV","Matplotlib","Sciki-learn","Panda"]
    },
    {
        id:2,
        title: "Programming languages:",
        tools:["Python","Matlab","Java","Javascript","Visual C# (.Net)","Open CV","C/C++","SQL","MongoDB"]
    },
    {
        id:3,
        title: "Web Technologies:",
        tools:["HTML","CSS","Javascript","TypeScript","Python","React","Next JS","Tailwind CSS","Bootstrap","Express JS","Rest API","TanStack Query"]
    },
    {
        id:4,
        title: "Tools:",
        tools:["Anaconda","PyCharm","Jupyter Notebooks","Origin","VS Code","Git","GitHub","Firebase","Tailwind CSS "]
    }
]
const AboutMe = () => {
    return (
        <section className="section my-8">
                <SectionTitle>About Me</SectionTitle>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-8">
                    <article>
                    <h2 className="text-3xl font-bold text-green-900 mb-8">Degrees</h2>
                        <ul className="list-disc space-y-6 text-[1.2rem]">
                            {
                                degree.map(deg => <li key={deg.id}> <span className="text-2xl font-bold">{deg.title}</span> <br/> {deg.institute}</li>)
                            }
                        </ul>
                    </article>
                    <article>
                    <h2 className="text-3xl font-bold text-green-900 mb-8">Degrees</h2>
                    {
                                skills.map(skill => <div key={skill.id}> 
                                
                                    <h2 className="text-2xl font-bold">{skill.title}</h2>
                                    <div className="">
                                    {
                                        skill.tools.map(tool => <button key={tool} className="btn m-3"> {tool}</button>)
                                    }
                                    </div>
                                
                                
                                </div>)
                            }
                    </article>

            </div>
        </section>
    );
};

export default AboutMe;