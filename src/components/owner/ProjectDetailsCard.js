import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, LinearProgress, Badge } from 'react-native-elements';
import currencyFormatter from '../../utils/currencyFormatter';

const ProjectDetailsCard = ({ project }) => {
  const formattedGoalValue = currencyFormatter(project?.item.goalValue);
  const formattedCurrentValue = currencyFormatter(project?.item.currentValue);
  const projectAccomplished = project?.item.percentage >= 1;
  const getImage = id => (
    `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/projects%2F${id}.png?alt=media&token=b4b17bce-85c9-42df-9555-d484d99c4c3b`
  );

  const getProgressBar = _ => (
    <View>
      <LinearProgress color="primary" value={project?.item.percentage} variant='determinate' style={{ height: 40 }} />
      <View style={styles.progressBar}>
        <Text style={styles.progressBarText}>{(project?.item.percentage * 100).toFixed(1)}%</Text>
      </View>
    </View>
  );

  return(
    <Card>
      <Card.Title>{project?.item.name}</Card.Title>
      <Card.Image source={{ uri: getImage(project?.item.id) }} />
      <Card.Divider />
      <Card.Title>{project?.item.name}</Card.Title>
      {projectAccomplished && 
        <View style={styles.badgeContainer}>
          <Badge status="success" value="¡proyecto cumplido!" />
        </View>
      }
      <Card.Title>{`Monto objetivo: ${formattedGoalValue}`}</Card.Title>
      <Card.Title>{`Monto recaudado: ${formattedCurrentValue}`}</Card.Title>
      {getProgressBar()}
    </Card>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarText: {
    color: '#ffffff',
    fontWeight: 'bold',
    width: 100,
    position: 'absolute',
    fontSize: 20,
    textAlign: 'center'
  },
  badgeContainer: {
    paddingBottom: 20,
  },
});

export default ProjectDetailsCard;
