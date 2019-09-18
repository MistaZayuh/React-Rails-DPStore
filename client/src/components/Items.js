import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Header, Card, Button, } from "semantic-ui-react";

class Items extends React.Component {
  state = { items: [], };

  componentDidUpdate() {
    if (this.state.items.length === 0) {
    axios.get(`/api/departments/${this.props.department_id}/items`)
      .then(res => {
        this.setState({ items: res.data, })
      })
      .catch(err => {
        console.log(err)
      })
    };
  };

  deleteItem = (id) => {
    let ites
    // make axios delete request
    axios.delete(`/api/departments/${this.props.department_id}/items/${id}`)
    // update state
    ites = this.state.items.filter(item => {
      if (item.id !== id)
        return item
    })
    this.setState({ items: ites })
  };

  renderItems = () => {
    const { items, } = this.state;
    if (items.length <= 0)
      return <Header as="h3">No Items Found</Header>
    return items.map(item => (
      <Card key={item.id}>
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button color="blue" as={Link} to={{pathname: `/departments/${this.props.department_id}/items/${item.id}`, state: {department_id: `${this.props.department_id}`} }}>
            View
          </Button>
          <Button color="green" as={Link} to={{pathname: `/departments/${this.props.department_id}/items/${item.id}/edit`, state: {department_id: `${this.props.department_id}`} }}>
            Edit
          </Button>
          <Button color="red" onClick={() => this.deleteItem(item.id)}>
            Delete
          </Button>
        </Card.Content>
      </Card>
    ))
  };


  render() {
    return (
      <div>

        <Header as="h2">Items</Header>
        <br />
        <Button as={Link} to={{pathname: `/departments/${this.props.department_id}/items/new`, state: {department_id: `${this.props.department_id}`} }} color="black">New Item</Button>
        <br />
        <br />
        <Card.Group>
          {this.renderItems()}
        </Card.Group>

      </div>
    );
  };
};


export default Items;