import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatar_container}>
        <Image source={require('./assets/batman-avatar.png')}></Image>
        <Text style={styles.avatar_subtitle}>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</Text>
      </View>  
      <View style={styles.details_container}>
        <View style={styles.item}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.data}>Batman</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.data}>Gotham</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Fav Color:</Text>
          <Text style={styles.data}>Black</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Job:</Text>
          <Text style={styles.data}>Batting</Text>
        </View>
      </View>  
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  avatar_container: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  avatar_subtitle: {
    maxWidth: 200
  },
  details_container: {
    flex: 0.6,
    backgroundColor: 'white'
  },
  item: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingHorizontal: 20
  },
  label: {
    flex: 0.7,
    color: 'orange',
    fontSize: 22
  },
  data: {
    fontSize: 22
  },
});
