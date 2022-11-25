import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Login from './src/view/login'
import Post from './src/view/Post'

 import { SessionContextProvider } from "./src/components/Context/contextSession"

const Stack = createStackNavigator()

export default function App() {
  return (
    <SessionContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Post" component={Post} />
         
        </Stack.Navigator>
      </NavigationContainer>
     </SessionContextProvider>
  )
}