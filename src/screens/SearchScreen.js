import { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) =>
    results.filter((result) => result.price === price);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
