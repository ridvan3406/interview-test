import React from 'react';

const SingleVehicle = ({
  id, description, price, meta, modelYear, media
}) => {
  console.log(`/images/16x9/${id}_${modelYear}.jpg`);
  return (
    <div className="card">
      <div className="img">
        <img src={media[0].url} alt={media[0].name} />
      </div>
      <div className="containers">
        <p className="vehiclename">{media[0].name.toUpperCase()}</p>
        <p>
          From
          {' '}
          {price}
        </p>
        <p>{description}</p>
      </div>
            {/* <p>{meta.passengers}</p>
            <ul>
                {meta.drivetrain.map((el) => (
                    <li>{el}</li>
                ))}
            </ul>
            <ul>
                {meta.bodystyles.map((bodystyle) => (
                    <li>{bodystyle}</li>
                ))}
            </ul>
            <div>
                <p>
                    template <span>{meta.emissions.template}</span>
                </p>
                <p>
                    value <span>{meta.emissions.value}</span>
                </p>
                <p>{modelYear}</p>
            </div> */}
        </div>
    );
};

export default SingleVehicle;
