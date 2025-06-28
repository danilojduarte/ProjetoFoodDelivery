import RoutesOpen from "./routesOpen.js";
import RoutesAuth from "./routesAuth.js";
import { useContext } from "react";
import { AuthContext } from "./contexts/auth.js";

function Routes() {

    const { user } = useContext(AuthContext);

    return user.id_usuario ? <RoutesAuth /> : <RoutesOpen />
}

export default Routes;