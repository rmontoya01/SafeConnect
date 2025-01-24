import { Pressable, View, Text, StyleSheet } from 'react-native';
import { Link, } from 'expo-router';
import { Image } from 'expo-image';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>Tab [Home]</Text>
      <Text>Hello, world! Testing</Text>
      <Text>This is the home page.</Text>
{/*       <Link href="/settings" asChild>
      <Pressable>
        <Text>Home</Text>
      </Pressable>
      <Link push href="/settings">Login</Link> COMMENT LN
    </Link>*/}
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
