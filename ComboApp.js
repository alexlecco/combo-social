import React, { useState } from "react";
import { StyleSheet, Text, View, } from "react-native";
import { connect } from "react-redux";

import RestaurantSelect from "./components/restaurant/RestaurantSelect";
import ProjectSelect from "./components/project/ProjectSelect";

const ComboApp = ({ currentScreen }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState({})
  const [selectedProject, setSelectedProject] = useState({})

  function selectRestaurant(restaurant) {
    setSelectedRestaurant(restaurant);
  }

  function selectProject(project) {
    setSelectedProject(project);
  }

  return(
      currentScreen === 0 ? (
          <RestaurantSelect
            onSelectRestaurant={selectRestaurant}
            selectedRestaurant={selectedRestaurant}
          />
      ) :
      currentScreen === 1 ? (
        <ProjectSelect
          onSelectProject={selectProject}
          selectedProject={selectedProject}
        />
      ) :
      currentScreen === 2 &&
        <View style={styles.container}>
          <Text>{selectedRestaurant.name}</Text>
          <Text>{selectedProject.name}</Text>
          <Text>{currentScreen}</Text>
        </View>
  )
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    currentScreen: state.currentScreen,
  };
}

export default connect(mapStateToProps, null)(ComboApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
});
