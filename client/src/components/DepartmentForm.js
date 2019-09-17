import React from "react";
import axios from "axios";
import { Header, Form, } from "semantic-ui-react";

class DepartmentForm extends React.Component {
  state = { name: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/departments", this.state )
    .then( res => {
      this.props.history.push("/departments")
    })
    .catch(err => {
      console.log(err)
    })
    this.setState({ name: "", })
  };

  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value });
  };


  render() {
    return (
      <div>
        <Header as="h1">{ this.props.match.params.id ? "Edit Department" : "Create Department" }  </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
            label="Name" 
            placeholder="Name"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
      </div>
    );
  };
};

export default DepartmentForm;