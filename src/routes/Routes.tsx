import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "../types";
import { Home } from "../views/Home/Home";
import { Detail } from "../views/Detail/Detail";

const Stack = createNativeStackNavigator<RootStackParams>();
const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: "rgba(7,26,93,255)",
  },
  headerTitleStyle: {
    color: "white",
  },
  headerTintColor: "white",
  headerTitleAlign: "center" as "center",
};

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' id={undefined}>
        <Stack.Screen
          name='Home'
          component={Home}
          options={routeScreenDefaultOptions}
        />
        <Stack.Screen
          name='Detail'
          component={Detail}
          options={routeScreenDefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
