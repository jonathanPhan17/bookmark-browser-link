import React from 'react';

import ParkingLotItem from './ParkingLotItem';

import './ParkingLot.css';

export default function ParkingLotList( {parkingLotItems, deleteItem, isEmpty }) {

  const ParkingLotItemJsx = parkingLotItems.map(item =>
     <ParkingLotItem key={item.id} {...item} deleteItem={deleteItem}/>)

  if (isEmpty) {
    return null;
  }

  return (
    <section className='parking-lot-list-container'>
      {ParkingLotItemJsx}
    </section>
  )
}


