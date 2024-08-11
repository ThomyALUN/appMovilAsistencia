import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../views/public_views/Login";
import About from "../views/public_views/About";

const Tab = createBottomTabNavigator();

export default function PublicRouting() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Inicio de sesión" component={Login}/> 
			<Tab.Screen name="Sobre nosotros" component={About} />
		</Tab.Navigator>
    );
}