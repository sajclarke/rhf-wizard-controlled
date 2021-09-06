import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

const StepRoute = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  // NOTE: Could alternatively use useSelector() hook
  const store = useStore();
  const currentState = store.getState();

  //This array is used to control the wrapper's redirect based on redux state
  const links = [
    { path: "/step2", required: ["base"], redirectPath: "/" },
    { path: "/step3", required: ["base", "crust"], redirectPath: "/" },
    { path: "/step4", required: ["base", "crust", "sauce"], redirectPath: "/" },
    {
      path: "/result",
      required: ["base", "crust", "sauce", "cheese"],
      redirectPath: "/",
    },
  ];

  useEffect(() => {
    links.forEach((link) => {
      // Check which path the user is currently on
      if (location.pathname === link.path) {
        link.required.map((stepValue) => {
          // Check if each of the required values have a valid value
          if (!currentState[stepValue]?.length > 0) {
            setLoading(false);
            // If not found, redirect user to redirectpath
            history.push({ pathname: link.redirectPath });
          }
          return false;
        });
      }
    });
    //If all checks pass, stop loading state
    setLoading(false);
    //Run this check whenever the user has changed the location path
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return loading ? <div>Loading....</div> : <div>{props.children}</div>;
};

export default StepRoute;
