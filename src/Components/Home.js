import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
import "./assets/Home.css";
import Button from "react-bootstrap/esm/Button";
import Addscenario from "./Addscenario";
import Allscenario from "./Allscenario";
import Addvehicles from "./Addvehicles";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Data from "./Data";

function Home() {
  

  return (
    <div>
      <Container>
        <Row>
          <Col md={2} className="home">
            <Dropdown>
              <Dropdown.Toggle  className="dropdow">
                Home
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Add Scenario</Dropdown.Item>
                <Dropdown.Item>All Scenario</Dropdown.Item>
                <Dropdown.Item>Add Vehicles</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={10} className="scenario_col">
            <div className="scenario">
              <div>Scenario</div>
              <Dropdown>
                <Dropdown.Toggle>Test Scenario</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Test Scenario</Dropdown.Item>
                  <Dropdown.Item> My Scenario</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Table className="table">
              <thead className="table_head">
                <tr>
                  <th>Vehicle Id</th>
                  <th>Vehicle Name</th>
                  <th>Position X</th>
                  <th>Position Y</th>
                  <th>Speed</th>
                  <th>Direction</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className="table_data">
                <tr>
                  <td>1</td>
                  <td>Bus</td>
                  <td>30</td>
                  <td>215</td>
                  <td>3</td>
                  <td>Towards</td>
                  <td>
                    <MdEdit />
                  </td>
                  <td>
                    <RiDeleteBin5Fill />
                  </td>
                </tr>
                <tr>
                  <td id="2">2</td>
                  <td>Car</td>
                  <td>500</td>
                  <td>500</td>
                  <td>5</td>
                  <td>Upwards</td>
                  <td>
                    <MdEdit />
                  </td>
                  <td>
                    <RiDeleteBin5Fill />
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="buttons">
              <Button variant="success" className="start_simulation">
                Start Simulation
              </Button>
              <Button variant="info" className="stop_simulation">
                Stop Simulation
              </Button>
            </div>
            <div>
              <Addscenario />
            </div>
            <div>
              <Allscenario />
            </div>
            <div>
              <Addvehicles />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
