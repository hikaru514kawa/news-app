import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { ListItem } from './components/ListItem';
import dummyArticles from "./dummies/articles";

export default function App() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = () => {
    setArticles(dummyArticles)
  };

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={articles}
      renderItem={({item}) => {
        return(
          <ListItem 
          imageUrl={item.urlToImage}
          title={item.title}
          author={item.author}
          />
        )
      }}
      keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "white" ,
    flexDirection: "row"
  },
  leftContainer: {
    width: 100,
    backgroundColor: "green"
  },
  rightContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subtext: {
    fontSize: 12,
    color: "gray"
  }
});
