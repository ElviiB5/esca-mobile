import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PoliticalPartyInfo from './screens/PoliticalPartyInfo/PoliticalPartyInfo';

export default function App() {
  return (
      <View style={styles.container}>
        <PoliticalPartyInfo />
        <Text>test</Text>  {/*TODO: Delete, this is just a test */}
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
