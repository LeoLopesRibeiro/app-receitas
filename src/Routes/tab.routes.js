import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Principal from "../pages/Princpal/index";
import Entrada from "../pages/Entrada";
import Sobremesa from "../pages/Sobremesa";
import ButtonNavigation from "../components/ButtonNavigation";
import Vegano from "../pages/Vegano";
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [
          {
            height: 70,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            bottom: 12,
            left: 12,
            right: 12,
            borderRadius: 30
          },
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarButton: (props) => {
            return (
              <ButtonNavigation
                {...props}
                name="home"
                pageName="Home"
                backColor="#9DDBF0"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Entrada"
        component={Entrada}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarButton: (props) => {
            return (
              <ButtonNavigation
                {...props}
                name="french-fries"
                pageName="Entrada"
                backColor="#FF4246"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarButton: (props) => {
            return (
              <ButtonNavigation
                {...props}
                name="food-steak"
                pageName="Principal"
                backColor="#FFB86E"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Sobremesa"
        component={Sobremesa}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarButton: (props) => {
            return (
              <ButtonNavigation
                {...props}
                name="cupcake"
                pageName="Sobremesa"
                backColor="#F4CFE1"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Vegano"
        component={Vegano}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarButton: (props) => {
            return (
              <ButtonNavigation
                {...props}
                name="leaf"
                pageName="Vegano"
                backColor="#90EBBE"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
