import React, { useState } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap'; 

import './ParkingLotForm.css'

  const PRIORITIES = {
    Low: "Low",
    Medium: "Medium",
    High: "High",
  };

export default function ParkingLotForm() {

  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(PRIORITIES.Medium);

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handlePriorityChange(e) {
    setPriority(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(date, link, description, priority)
  }

    return (
      <Form data-bs-theme="dark" className="parking-lot-form" onSubmit={handleSubmit}>
        <FormGroup className="parking-lot-row">
          <Label htmlFor="link-date">Date</Label>
          <Input
            id="link-date"
            name="date"
            type="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </FormGroup>
        <FormGroup className="parking-lot-row">
          <Label htmlFor="link-url">Link</Label>
          <Input
            id="link-url"
            name="url"
            type="url"
            value={link}
            onChange={handleLinkChange}
            required
          />
        </FormGroup>
        <FormGroup className="parking-lot-row">
          <Label htmlFor="link-description">Description</Label>
          <Input
            id="link-description"
            name="description"
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </FormGroup>
        <FormGroup className="parking-lot-row">
          <Input
            name="radio-priority"
            type="radio"
            value={PRIORITIES.High}
            checked={priority === PRIORITIES.High}
            onChange={handlePriorityChange}
            id="prio-high"
          />
          &nbsp;
          <label htmlFor="prio-high" className="radio-btn-row">
            High
          </label>
          &nbsp;
          <Input
            name="radio-priority"
            type="radio"
            value={PRIORITIES.Medium}
            checked={priority === PRIORITIES.Medium}
            onChange={handlePriorityChange}
            id="prio-medium"
          />
          &nbsp;
          <label htmlFor="prio-medium" className="radio-btn-row">
            Medium
          </label>
          &nbsp;
          <Input
            name="radio-priority"
            type="radio"
            value={PRIORITIES.Low}
            checked={priority === PRIORITIES.Low}
            onChange={handlePriorityChange} 
            id="prio-low"
          />
          &nbsp;
          <label htmlFor="prio-low" className="radio-btn-row">
            Low
          </label>
        </FormGroup>
        <Button type="submit ">Submit</Button>
      </Form>
    );
}
