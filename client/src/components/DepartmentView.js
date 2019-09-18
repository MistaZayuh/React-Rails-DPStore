import React from "react";
import axios from "axios";
import Items from "./Items";
import { Segment, Header, Button, } from "semantic-ui-react";

class DepartmentView extends React.Component {
  state = { department: {}, items: [], };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ department: res.data, })
    })
    .catch(err => {
      console.log(err)
    })
    // axios.get(`/api/departments/${this.state.department.id}/items`)
    // .then(res => {
    //   debugger
    //   this.setState({ items: res.data, })
    // })
    // .catch(err => {
    //   debugger
    //   console.log(err)
    // })
    
  };

  

  render() {
    const { name, } = this.state.department
    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
        </Segment>
        <br />
        <br />
        
        <Items department_id={this.state.department.id} />
        <Button color="green" onClick={this.props.history.goBack}>Back</Button>
      </div>
    );
  };
};

export default DepartmentView;