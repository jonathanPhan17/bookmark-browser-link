import React from 'react';

import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap'; 



export default function ParkingLotItem({id, date, priority, link, description, deleteItem}) {

  function handleDelete() {
    deleteItem(id);
  }


  return (
    <>
      <Card className="my-2 parking-lot-item-container" color="secondary" inverse>
        <CardHeader className='card-header'>
          {date}(Priority: {priority})
          <Button color='danger' className='delete-button' onClick={handleDelete}><strong>X</strong></Button>
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">{description}</CardTitle>
          <CardText>
            Link: &nbsp;
            <a href={link} target="_blank" className="parking-lot-item-anchor">
              {link}
            </a>
          </CardText>
        </CardBody>
      </Card>

      {/* <section className="parking-lot-item-container">
        <p className="parking-lot-item-field">Date: {date}</p>
        <p className="parking-lot-item-field">Priority: {priority}</p>
        <p className="parking-lot-item-field">Description: {description}</p>
        <p className="parking-lot-item-field">Link: &nbsp;</p>
      </section> */}
    </>
  );
}
