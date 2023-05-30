import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";
import "./assets/Allscenario.css";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

function Allscenario() {
  return (
    <div>
      <Container>
        <Row className="all_scenario_row">
          <Col className="all_scenario_col1">All scenario</Col>
          <Col className="all_scenario_col2">
            <Button variant="success" className="all_scenario_button">
              New Scenario
            </Button>
            <Button variant="danger" className="all_scenario_button">
              Add Scenario
            </Button>
            <Button variant="info" className="all_scenario_button">
              Delete All
            </Button>
          </Col>
        </Row>
        <Table className="all_scenario_table">
          <thead className="all_scenario_table_head">
            <tr>
              <th>scenario Id</th>
              <th>scenario Name</th>
              <th>scenario Time</th>
              <th>Number of Vehicles</th>
              <th>Add Vehicles</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="all_scenario_table_data">
            <tr>
              <td>1</td>
              <td>Test Scenario</td>
              <td>2s</td>
              <td>1</td>
              <td>+</td>
              <td>
                <MdEdit />
              </td>
              <td>
                <RiDeleteBin5Fill />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>My Scenario</td>
              <td>10s</td>
              <td>3</td>
              <td>+</td>
              <td>
                <MdEdit />
              </td>
              <td>
                <RiDeleteBin5Fill />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Scenario ABC</td>
              <td>12s</td>
              <td>0</td>
              <td>+</td>
              <td>
                <MdEdit />
              </td>
              <td>
                <RiDeleteBin5Fill />
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Allscenario;
