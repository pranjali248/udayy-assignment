import React from "react";
import { Card } from "react-bootstrap";
import { tourData } from "./tourData";

const Country = ({ match }) => {
  const countryName = match.params.countryName;
  const country = tourData[countryName];
  return (
    <React.Fragment>
    {country.city.map(cityObj=>(
            <Card>
            <Card.Img variant="top" src={require(`../../images/${cityObj.img}.jpg`)} />
            <Card.Body>
              <Card.Title>{cityObj.place}</Card.Title>
              <Card.Text>{cityObj.info}</Card.Text>
            </Card.Body>
      </Card>
  ))}
  </React.Fragment>
  );
};

export default Country;
