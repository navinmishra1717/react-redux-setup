import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../../routes/public";

const switchRoutes = (
  <Switch>
    {routes.map((prop) => (
      <Route key={prop.path} {...prop} />
    ))}
    {/* <Route component={NotFoundComponent} /> */}
  </Switch>
);

const PublicLayout = () => <div>{switchRoutes}</div>;

export default PublicLayout;
