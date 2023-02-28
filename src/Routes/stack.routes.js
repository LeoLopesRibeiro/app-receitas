import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Receita from "../pages/Receita";
import TabNavigator from "./tab.routes";
import { NavigationContainer } from "@react-navigation/native";
import CardReceita from "../components/CardReceita";
import Home from "../pages/Home";

const { Screen, Navigator } = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Receitas" component={TabNavigator} />
        <Screen name="Receita" component={Receita} />
      </Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
