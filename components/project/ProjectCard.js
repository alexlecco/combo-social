import React from "react";
import { Card, Button } from "react-native-elements";
import { connect } from "react-redux";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    const project = this.props.project;
  }

  handleSelectProject(project) {
    this.props.onSelectProject(project);
    this.props.switchCurrentScreen();
  }

  getImage(id) {
    return `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/projects%2F${id}.png?alt=media&token=b4b17bce-85c9-42df-9555-d484d99c4c3b`;
  }

  render() {
    const { project } = this.props;

    return (
      <Card>
        <Card.Title>{project.item.name}</Card.Title>
        <Card.Image source={{ uri: this.getImage(project.item.id) }} />
        <Button
          title="apoyar este proyecto"
          icon={{ name: "favorite", color: "white" }}
          buttonStyle={{
            marginLeft: -10,
            marginRight: -10,
            marginBottom: -10,
            marginTop: -10,
            padding: 20,
          }}
          onPress={() => this.handleSelectProject(project)}
        />
      </Card>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    switchCurrentScreen: () => dispatch({ type: "SWITCH_CURRENT_SCREEN" }),
  };
}

export default connect(null, mapDispatchToProps)(ProjectCard);
