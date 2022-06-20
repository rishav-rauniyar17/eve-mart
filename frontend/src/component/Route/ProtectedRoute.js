import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoute = ({ component: Component }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return isAuthenticated ? <Component /> : <Navigate to="/login/" />;
};

export default ProtectedRoute;
// <Fragment>
// {!loading && (
//     <Routes>
//       <Route
//         {...rest}
//         render={(props) => {
//           if (!isAuthenticated) {
//             return <Navigate to="/login" />;
//           }
//           return <Component {...props} />;
//         }}
//       />
//     </Routes>
//   )}
// </Fragment>
