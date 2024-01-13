

const ResearchCard = ({info}) => {
    const { title, application_area, short_details, image_url } = info;
    return (
        <div className="card card-compact max-w-96 bg-base-100 shadow-xl border border-teal-600 rounded mx-auto">
      <figure>
        <img src={image_url} alt="image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Research Topic: {title}</h2>
        <p className="text-justify">{short_details}</p>
        <p className="text-justify">Application area: {application_area}</p>
      </div>
    </div>
    );
};

export default ResearchCard;