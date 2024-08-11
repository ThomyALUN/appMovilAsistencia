import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "./views/public_views/Welcome";
import About from "./views/public_views/About";

const Tab = createBottomTabNavigator();

export default function Route() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Welcome" component={Welcome} />
                <Tab.Screen name="About" component={About} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
