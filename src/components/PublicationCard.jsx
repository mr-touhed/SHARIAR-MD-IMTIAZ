import React from 'react';

const PublicationCard = ({info}) => {
    const {
        title,
        type,
        authors,
        publication,
        published_date,
        doi,
        image_url,
        article_url,
        abstract,
      } = info;
    return (
        <div className="card card-compact bg-base-100 shadow-xl rounded mx-auto">
      <div className="card-body p-3">
        <div className="md:flex gap-4 py-2">
          <div className="z-1">
            <p className="border border-teal-600 rounded w-12 text-center">
              {type}
            </p>

            <h2 className="card-title text-2xl py-2">
              <a href={article_url} target="_blank" rel="noreferrer">
                {title}
              </a>
            </h2>
            <p className="text-lg">{authors}</p>
            <p className="text-lg py-2">
              {published_date} &#x2022; {publication}
            </p>
            <p className="text-lg">
              <span className="font-bold">DOI: </span>
              <a href={article_url} target="_blank" rel="noreferrer">
                {doi}
              </a>
            </p>
          </div>
          {/* <figure className="w-2/4 z-0">
            <img src={image_url} alt="image" />
          </figure> */}
        </div>
        <div tabIndex={0} className="collapse collapse-arrow -mx-4">
          <div className="collapse-title text-lg font-medium">Abstract</div>
          <div className="collapse-content">
            <p className="">{abstract}</p>
          </div>
        </div>
      </div>
      {/* <hr className="text-teal-600" /> */}
    </div>
    );
};

export default PublicationCard;