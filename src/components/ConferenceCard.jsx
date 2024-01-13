
const ConferenceCard = ({confData}) => {
    const {
        type,
        title,
        authors,
        conference_title,
        location,
        date,
        doi,
        url,
        abstract,
      } = confData;
    return (
        <div className="card card-compact bg-base-100 shadow-xl rounded mx-auto">
      <div className="card-body p-3">
        <div className="md:flex gap-4 py-2">
          <div className="z-1">
            <p className="border border-teal-600 rounded w-20 text-center">
              {type}
            </p>

            <h2 className="card-title text-xl py-2">
              <a href={url} target="_blank" rel="noreferrer">
                {title}
              </a>
            </h2>
            <p className="">
              <span className="font-bold">Authors:</span> {authors}
            </p>
            <p className="py-2">
              <span className="font-bold">Conference Title:</span>{" "}
              {conference_title}
            </p>
            <p className="">
              <span className="font-bold">Location:</span> {location}
            </p>
            <p className="pt-2">
              <span className="font-bold">Date:</span> {date}
            </p>
            <p className="py-2">
              <span className="font-bold">DOI:</span> {doi}
            </p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-arrow -mx-4 -mt-6">
          <div className="collapse-title text-lg font-medium">Abstract</div>
          <div className="collapse-content">
            <p>{abstract}</p>
          </div>
        </div>
      </div>
      {/* <hr className="text-teal-600" /> */}
    </div>
    );
};

export default ConferenceCard;