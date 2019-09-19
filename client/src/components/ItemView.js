import React from "react";
import axios from "axios";
import { HeaderBox, HeaderText } from "./styles/MainStyles";
import { Segment, Header, Button } from "semantic-ui-react";

class ItemView extends React.Component {
  state = { item: {}, };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.location.state.department_id}/items/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ item: res.data, })
    })
    .catch(err => {
      console.log(err)
    })    
  };

  render() {
    const { name, price } = this.state.item
    return (
      <div>
        <HeaderBox>
          <HeaderText>{ name } - ${ price }</HeaderText>
        </HeaderBox>
        <br />
        <br />
        <Button color="green" onClick={this.props.history.goBack}>Back</Button>
      </div>
    );
  };
};

export default ItemView;