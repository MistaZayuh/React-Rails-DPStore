import React from "react";
import axios from "axios";
import { Segment, Header, Button } from "semantic-ui-react";

class ItemView extends React.Component {
  state = { item: {}, };

  componentDidMount() {
    debugger
    axios.get(`/api/departments/${this.props.location.state.department_id}/items/${this.props.match.params.id}`)
    .then( res => {
      debugger
      this.setState({ item: res.data, })
    })
    .catch(err => {
      debugger
      console.log(err)
    })    
  };

  render() {
    debugger
    const { name, price } = this.state.item
    return (
      <div>
        <Segment>
          <Header as="h1">{ name } - ${ price }</Header>
        </Segment>
        <br />
        <br />
        <Button color="green" onClick={this.props.history.goBack}>Back</Button>
      </div>
    );
  };
};

export default ItemView;