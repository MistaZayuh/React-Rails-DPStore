import React from "react";
import { Link, } from "react-router-dom";
import { Header, Button, } from "semantic-ui-react";

const NoMatch = () => (
 <div style={styles.container}>
   <Header style={styles.header} as="h1">Uh oh, Spaghetti O</Header>
   <Header style={styles.header} as="h1">There's no page here</Header>
   <Link to="/">
    <Button color="black">Home</Button>
   </Link>
 </div>

);

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
  header: {
    fontSize: "50px"
  },
}
export default NoMatch;