import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./context/AuthContext";
import React, { useContext } from "react";
import PrivateRouting from "./routing/PrivateRouting";
import PublicRouting from "./routing/PublicRouting";

export default function Route() {

    const { userToken } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {userToken ? <PrivateRouting /> : <PublicRouting />}
        </NavigationContainer>
    );
}
