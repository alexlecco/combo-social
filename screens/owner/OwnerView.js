import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { ref, onValue } from 'firebase/database';

import { AppContext } from '../../src/context/provider';
import database from '../../firebase';
import ProjectDetailsCard from '../../src/components/owner/ProjectDetailsCard';
import RNEconstants from '../../src/constants/RNEconstants';

const OwnerView = _ => {
  const [state, setState] = useContext(AppContext);
  const { currentUser } = state;
  const [projects, setProjects] = useState([]);
  const centerComponent = `${RNEconstants.ownerView?.headerTitle?.text} ${currentUser.username}`;

  useEffect(() => {
    const ProjectsRef = ref(database, 'projects/');

    onValue(ProjectsRef, snap => {
      let projects = [];
      snap.forEach((child) => {
        projects.push({
          name: child.val().name,
          description: child.val().description,
          currentValue: child.val().currentValue,
          goalValue: child.val().goalValue,
          id: child.val().id,
        });
      });
      setProjects(projects);
    });
  }, []);

  const rollChangeButton = (
    <View style={{marginTop: 20}}>
      <Button
        title='rol'
        onPress={() => handleRollChangeButton()}
      />
    </View>
  );
  const handleRollChangeButton = () => {
    setState({
      ...state,
      currentScreen: 7,
    })
  };

  const buildProject = project => <ProjectDetailsCard project={project} />;

  return (
    <View style={styles.container}>
      <Header
        leftComponent={rollChangeButton}
        centerComponent={centerComponent}
      />

      <ScrollView>
        <View style={{ paddingBottom: 15 }}>
          <FlatList
            data={projects}
            renderItem={project => buildProject(project)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default OwnerView;
