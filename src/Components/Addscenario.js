import React from "react";
import "./assets/Addscenario.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
function Addscenario() {
  return (
    <Container>
      <Form className="form">
        <Row className="form_row">
          <Col className="scenario_name">
            <Form.Label>Scenario Name</Form.Label>
            <Form.Control
              className="scenario_placeholder"
              type="text"
              placeholder="Test Scenario"
            />
          </Col>
          <Col className="scenario_time">
            <Form.Label>Scenario Time(seconds)</Form.Label>
            <Form.Control
              className="scenario_placeholder"
              type="num"
              placeholder="10"
            />
          </Col>
        </Row>
      </Form>
      <div className="button">
        <Button variant="success" className="formbelow_button">
          Add
        </Button>
        <Button variant="danger" className="formbelow_button">
          Reset
        </Button>
        <Button variant="info" className="formbelow_button">
          Go Back
        </Button>
      </div>
    </Container>
  );
}

export default Addscenario;
