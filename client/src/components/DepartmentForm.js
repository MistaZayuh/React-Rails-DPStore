import React from "react";
import axios from "axios";
// import { Link, } from "react-router-dom";
import { Header, Form, Button } from "semantic-ui-react";

class DepartmentForm extends React.Component {
  state = { name: "", };

  componentDidMount() {
    if (this.props.match.params.id ) {
      axios.get(`/api/departments/${this.props.match.params.id}`) 
      .then( res => {
        this.setState({ name: res.data.name })
      })
      .catch(err => {
        console.log(err)
      })
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.match.params.id){
      axios.put(`/api/departments/${this.props.match.params.id}`, this.state)
      .then( res => {
        this.props.history.push("/departments")
      })
      .catch(err => {
        console.log(err)
      })
    } else {
    axios.post("/api/departments", this.state )
    .then( res => {
      this.props.history.push("/departments")
    })
    .catch(err => {
      console.log(err)
    })
    }
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
          <Button color="yellow" onClick={this.handleSubmit}>Submit</Button>
        </Form>
        <br />
        <Button color="black" onClick={this.props.history.goBack}>Back</Button>
      </div>
    );
  };
};

export default DepartmentForm;