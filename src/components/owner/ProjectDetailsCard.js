import React from 'react';
import { Card } from 'react-native-elements';

const ProjectDetailsCard = ({ project }) => {
  const getImage = (id) => (
    `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/projects%2F${id}.png?alt=media&token=b4b17bce-85c9-42df-9555-d484d99c4c3b`
  );

  return(
    <Card>
      <Card.Title>{project?.item.name}</Card.Title>
      <Card.Image source={{ uri: getImage(project?.item.id) }} />
    </Card>
  );
};

export default ProjectDetailsCard;
