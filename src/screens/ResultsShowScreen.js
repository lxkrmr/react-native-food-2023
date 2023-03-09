import { Text, StyleSheet } from "react-native";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  return (
    <>
      <Text>Results Show Screen {id}</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
