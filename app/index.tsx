import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
      }}
    >
      <Text>Hello world, from One</Text>

      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{
          height: 100,
          width: 100
        }}
      />
    </View>
  )
}
