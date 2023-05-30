import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import "./assets/Addvehicle.css";

function Addvehicles() {
  return (
    <Container>
      <div className="vehicle_add">Vehicle/add</div>
      <div className="add_vehicle">Add Vehicle</div>
      <Form className="add_vehicle_form">
        <Row className="add_vehicle_form_row">
          <Col className="add_vehicle_formlabel">
            <Form.Label>Scenario List</Form.Label>
            <Form.Control
              className="scenario_placeholder"
              placeholder="Select Scenario"
            />
          </Col>
          <Col className="add_vehicle_formlabel">
            <Form.Label>Vehicle Name</Form.Label>
            <Form.Control
              className="scenario_placeholder"
              placeholder="Target abc"
            />
          </Col>
          <Col className="add_vehicle_formlabel">
            <Form.Label>Speed</Form.Label>
            <Form.Control className="scenario_placeholder" placeholder="2" />
          </Col>
        </Row>
        <Row className="add_vehicle_form_row">
          <Col className="add_vehicle_formlabel2">
            <Form.Label>Position X</Form.Label>
            <Form.Control className="scenario_placeholder" placeholder="1000" />
          </Col>
          <Col className="add_vehicle_formlabel2">
            <Form.Label>Position Y</Form.Label>
            <Form.Control className="scenario_placeholder" placeholder="20" />
          </Col>
          <Col className="add_vehicle_formlabel2">
            <Form.Label>Direction</Form.Label>
            <Form.Control
              className="scenario_placeholder"
              placeholder="Select Direction"
            />
          </Col>
        </Row>
      </Form>
      <div className="add_vehicle_buttons">
        <Button variant="success" className="add_vehicle_button">
          Add
        </Button>
        <Button variant="danger" className="add_vehicle_button">
          Reset
        </Button>
        <Button variant="info" className="add_vehicle_button">
          Go Back
        </Button>
      </div>
    </Container>
  );
}
export default Addvehicles;
