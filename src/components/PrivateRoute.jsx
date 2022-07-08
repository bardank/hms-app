import React , {useEffect} from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useUserStore } from "../store";

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  const navigation = useNavigate();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (!user.email || user.email.length < 5) {
      navigation("/");
    }
    return () => {};
  }, [user]);

  return <Outlet />;
};

export default PrivateRoute;
