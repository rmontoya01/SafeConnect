import { Pressable, View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>Tab [Settings]</Text>
      <Text>Hello, world! Testing</Text>
      <Text>This is the settings page.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
