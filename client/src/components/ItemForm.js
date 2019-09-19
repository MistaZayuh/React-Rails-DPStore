import React from "react";
import axios from "axios";
import { Header, Form, Button } from "semantic-ui-react";

class ItemForm extends React.Component {
  state = { name: "", price: "", };

  componentDidMount() {
    if (this.props.match.params.path == "/departments/:id/items/new" ) {
      axios.get(`/api/departments/${this.props.location.state.department_id}/items/${this.props.match.params.id}`) 
      .then( res => {
        this.setState({ name: res.data.name, price: res.data.price })
      })
      .catch(err => {
        console.log(err)
      })
    }; 
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.match.params.id){
      axios.put(`/api/departments/${this.props.location.state.department_id}/items/${this.props.match.params.id}`, this.state)
      .then( res => {
        this.props.history.push(`/departments/${this.props.location.state.department_id}`)
      })
      .catch(err => {
        console.log(err)
      })
    } else {
    axios.post(`/departments/${this.props.location.state.department_id}/items`, this.state )
    .then( res => {
      this.props.history.push(`/departments/${this.props.location.state.department_id}`)
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
        <Header as="h1">{ this.props.match.params.url !== `/departments/${this.props.match.params.id}/items/new` ? "Create Item" : "Edit Item" }  </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group
            widths="equal"
          >
            <Form.Input
            label="Name" 
            placeholder="Name"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleChange}
            />
            <Form.Input
            label="Price" 
            placeholder="Price"
            name="price"
            required
            value={this.state.price}
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

export default ItemForm;