import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { StyledCard, HeaderText, HeaderBox, } from "./styles/MainStyles";
import { Header, Card, Button, Segment } from "semantic-ui-react";

class Departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
    axios.get("/api/departments")
      .then(res => {
        this.setState({ departments: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  };

  deleteDepartment = (id) => {
    let departs
    // make axios delete request
    axios.delete(`/api/departments/${id}`)
    // update state
    departs = this.state.departments.filter(department => {
      if (department.id !== id)
        return department
    })
    this.setState({ departments: departs })
  };

  renderDepartments = () => {
    const { departments, } = this.state;
    if (departments.length <= 0)
      return <Header as="h2">No Departments Found</Header>
    return departments.map(department => (
      <StyledCard key={department.id}>
        <Card.Content>
          <Card.Header>{department.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button color="blue" as={Link} to={`/departments/${department.id}`}>
            View
          </Button>
          <Button color="green" as={Link} to={`/departments/${department.id}/edit`}>
            Edit
          </Button>
          <Button color="red" onClick={() => this.deleteDepartment(department.id)}>
            Delete
          </Button>
        </Card.Content>
      </StyledCard>
    ))
  };

  render() {
    return (
      <div>
        <HeaderBox>
          <HeaderText>Departments</HeaderText>
        </HeaderBox>
        <br />
        <Button as={Link} to={"/departments/new"} color="black">New</Button>
        <br />
        <br />
        <Card.Group>
          {this.renderDepartments()}
        </Card.Group>

      </div>
    );
  };
};



export default Departments;