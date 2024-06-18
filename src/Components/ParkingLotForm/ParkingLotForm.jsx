import React from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap'; 

import './ParkingLotForm.css'

export default function ParkingLotForm() {
    return (
      <Form data-bs-theme="dark" className='parking-lot-form'>
        <FormGroup className="parking-lot-row">
          <Label htmlFor="link-date">Date</Label>
          <Input id="link-date" name="date" type="date" required />
        </FormGroup>
        <FormGroup className="parking-lot-row">
          <Label htmlFor="link-url">Link</Label>
          <Input id="link-url" name="url" type="url" required />
        </FormGroup>
        <FormGroup className="parking-lot-row">
          <Label htmlFor="link-description">Description</Label>
          <Input
            id="link-description"
            name="description"
            type="text"
            required
          />
        </FormGroup>
        <FormGroup className="parking-lot-row">
          <Input
            name="radio-priority"
            type="radio"
            value="High"
            id="prio-high"
          />
          &nbsp;
          <label htmlFor="prio-high">High</label>
          &nbsp;
          <Input
            name="radio-priority"
            type="radio"
            value="Medium"
            id="prio-medium"
          />
          &nbsp;
          <label htmlFor="prio-medium">Medium</label>
          &nbsp;
          <Input
            name="radio-priority"
            type="radio"
            value="Low"
            id="prio-low"
          />
          &nbsp;
          <label htmlFor="prio-low">Low</label>
        </FormGroup>
        <Button type="submit ">Submit</Button>
      </Form>
    );
}
