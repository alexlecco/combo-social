import React from 'react';
import { Card } from 'react-native-elements';
import currencyFormatter from '../../utils/currencyFormatter';

const ProjectDetailsCard = ({ project }) => {
  const getImage = id => (
    `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/projects%2F${id}.png?alt=media&token=b4b17bce-85c9-42df-9555-d484d99c4c3b`
  );

  const formattedGoalValue = currencyFormatter(project?.item.goalValue);
  const formattedCurrentValue = currencyFormatter(project?.item.currentValue);

  return(
    <Card>
      <Card.Title>{project?.item.name}</Card.Title>
      <Card.Image source={{ uri: getImage(project?.item.id) }} />
      <Card.Divider />
      <Card.Title>{project?.item.name}</Card.Title>
      <Card.Title>{`Monto objetivo: ${formattedGoalValue}`}</Card.Title>
      <Card.Title>{`Monto recaudado: ${formattedCurrentValue}`}</Card.Title>
    </Card>
  );
};

export default ProjectDetailsCard;
