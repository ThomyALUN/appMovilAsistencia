import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../views/private_views/Home";
import Logout from "../views/private_views/Logout";

const Tab = createBottomTabNavigator();

export default function PrivateRouting() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/> 
            <Tab.Screen name="Logout" component={Logout} />
        </Tab.Navigator>
    );
}   