import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import NewItem from "../screens/newItem";
import Item from "../screens/viewItem";

const navStack = createNativeStackNavigator();

export default function Routes () {

  return(
    <NavigationContainer>
      <navStack.Navigator>
        <navStack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <navStack.Screen name="NewItem" component={NewItem} />
        <navStack.Screen name="ViewItem" component={Item} />
      </navStack.Navigator>
    </NavigationContainer>
  );

}