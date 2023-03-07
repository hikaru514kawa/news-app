import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={ styles.itemContainer }>
          <View style={ styles.leftContainer }>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: 'https://picsum.photos/200/300' }}
            />
          </View>
          <View style={ styles.rightContainer }>
            <Text numberOfLines={3} style={styles.text}>
              In the following example, the nested title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles. The title and body will stack
            </Text>
            <Text style={ styles.subtext }>React Text</Text>
          </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
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
