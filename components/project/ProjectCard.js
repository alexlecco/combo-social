import React, { useContext } from "react";
import { Card, Button } from "react-native-elements";
import RNEconstants from '../../constants/RNEconstants';
import { AppContext } from '../../context/provider'

const ProjectCard = ({ project }) => {
  const [state, setState] = useContext(AppContext)

  const buttonStyle = RNEconstants.restaurantCard?.buttonStyle

  function handleSelectProject(project) {
    setState({
      ...state,
      currentScreen: state.currentScreen + 1,
      selectedProject: project.item,
    })
  }

  const getImage = (id) => (
    `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/projects%2F${id}.png?alt=media&token=b4b17bce-85c9-42df-9555-d484d99c4c3b`
  )

  return (
    <Card>
      <Card.Title>{project.item.name}</Card.Title>
      <Card.Image source={{ uri: getImage(project.item.id) }} />
      <Button
        title="apoyar este proyecto"
        icon={{ name: "favorite", color: "white" }}
        buttonStyle={buttonStyle}
        onPress={() => handleSelectProject(project)}
      />
    </Card>
  );
}

export default ProjectCard;
