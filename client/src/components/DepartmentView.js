import React from "react";
import axios from "axios";
import Items from "./Items";
import { HeaderText, HeaderBox } from "./styles/MainStyles"
import { Segment, Header, Button, } from "semantic-ui-react";

class DepartmentView extends React.Component {
  state = { department: {}, };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ department: res.data, })
    })
    .catch(err => {
      console.log(err)
    })    
  };

  render() {
    const { name, } = this.state.department
    return (
      <div>
        <HeaderBox>
          <HeaderText>{ name }</HeaderText>
        </HeaderBox>
        <br />
        <br />
        
        <Items department_id={this.state.department.id} />
        <Button color="green" onClick={this.props.history.goBack}>Back</Button>
      </div>
    );
  };
};

export default DepartmentView;