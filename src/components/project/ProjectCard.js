import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button, LinearProgress } from 'react-native-elements';
import RNEconstants from '../../constants/RNEconstants';
import { AppContext } from '../../context/provider';

const ProjectCard = ({ project }) => {
  const [state, setState] = useContext(AppContext);
  const buttonStyle = RNEconstants.restaurantCard?.buttonStyle;
  const progressBarText = (project?.item.percentage * 100).toFixed(1) < 100 ? (project?.item.percentage * 100).toFixed(1) : 100
  
  const handleSelectProject = project => {
    setState({
      ...state,
      currentScreen: state.currentScreen + 1,
      selectedProject: project?.item,
    });
  };

  const getProgressBar = _ => (
    <View>
      <LinearProgress color="primary" value={project?.item.percentage} variant='determinate' style={{ height: 40 }} />
      <View style={styles.progressBar}>
        <Text style={styles.progressBarText}>{progressBarText}%</Text>
      </View>
    </View>
  );

  const getImage = (id) => (
    `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/projects%2F${id}.png?alt=media&token=b4b17bce-85c9-42df-9555-d484d99c4c3b`
  );

  return (
    <Card>
      <Card.Title>{project?.item.name}</Card.Title>
      {getProgressBar()}
      <Card.Image source={{ uri: getImage(project?.item.id) }} />
      {project?.item.percentage < 1 ? (
        <Button
          title='apoyar este proyecto'
          icon={{ name: 'favorite', color: 'white' }}
          buttonStyle={buttonStyle}
          onPress={() => handleSelectProject(project)}
        />
      ) : (
        <Button
          title='objetivo alcanzado'
          disabled
          icon={{ name: 'check', color: 'white' }}
          buttonStyle={buttonStyle}
          onPress={() => alert('gracias por tu colaboración')}
        />
      )}
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
});

export default ProjectCard;
