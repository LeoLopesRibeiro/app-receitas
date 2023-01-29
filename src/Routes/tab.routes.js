import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import Principal from "../pages/Princpal/index";
import Entrada from "../pages/Entrada";
import Sobremesa from "../pages/Sobremesa";
import ButtonNavigation from "../components/ButtonNavigation";
import Vegano from "../pages/Vegano";
const Tab = createBottomTabNavigator()

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarInactiveTintColor: '#fff',
                tabBarActiveBackgroundColor: '#fff',
                tabBarActiveTintColor: '#fff',
                tabBarInactiveBackgroundColor: '#FFF',
                tabBarStyle: [
                    {
                        height: 65,
                        backgroundColor: '#1B1D2E',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: "center",
                    },
                    null,
                ],
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        if (focused) {
                            return (
                                <ButtonNavigation itemName="FontAwesome" pageName="Home" size={size} color='black' name='home' backColor="#9DDBF0"/>
                            );
                        } else {
                            return (
                                <ButtonNavigation ItemName="FontAwesome" pageName="Home" size={size} color='#909090' name='home' backColor="#FFF"/>
                            );
                        }
                    },
                }}
            />
              <Tab.Screen
                name="Entrada"
                component={Entrada}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        if (focused) {
                            return (
                                <ButtonNavigation pageName="Entrada" size={size} color='black' name='french-fries' backColor="#FF4246"/>
                            );
                        } else {
                            return (
                                <ButtonNavigation pageName="Entrada" size={size} color='#909090' name='french-fries' backColor="#FFF"/>
                            );
                        }
                    },
                }}
            />
            <Tab.Screen
                name="Principal"
                component={Principal}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        if (focused) {
                            return (
                                <ButtonNavigation pageName="Principal" size={size} color='black' name="food-steak" backColor="#FFB86E"/>
                            );
                        } else {
                            return (
                                <ButtonNavigation pageName="Principal" size={size} color='#909090' name="food-steak" backColor="#FFF"/>
                            );
                        }
                    },
                }}
            />
            <Tab.Screen
                name="Sobremesa"
                component={Sobremesa}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        if (focused) {
                            return (
                                <ButtonNavigation pageName="Doces" size={size} color='black' name="cupcake" backColor="#F4CFE1"/>
                            );
                        } else {
                            return (
                                <ButtonNavigation pageName="Doces" size={size} color='#909090' name="cupcake" backColor="#FFF"/>
                            );
                        }
                    },
                }}
            />
            <Tab.Screen
                name="Vegano"
                component={Vegano}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        if (focused) {
                            return (
                                <ButtonNavigation pageName="Vegano" size={size} color='black' name="leaf" backColor="#90EBBE"/>
                            );
                        } else {
                            return (
                                <ButtonNavigation pageName="Vegano" size={size} color='#909090' name="leaf" backColor="#FFF"/>
                            );
                        }
                    },
                }}
            />
          
        </Tab.Navigator>
    )
}

export default TabNavigator;