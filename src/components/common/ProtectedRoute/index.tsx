import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Alert } from "@mantine/core";
import { RootState } from "../../../redux/store";

interface ProtectedRouteProps {
  allowedUserType: "seller" | "customer"; // Define which user types are allowed
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedUserType,
  redirectPath = "/login/seller",
}) => {
  const user = useSelector((state: RootState) => state.auth.user);
  if (!user) {
    // If no session is present, redirect to the login page
    return <Navigate to={redirectPath} replace />;
  }

  if (user.userType !== allowedUserType) {
    // If the user type does not match, show an unauthorized message
    return (
      <Container>
        <Alert title="Unauthorized Access" color="red">
          You are not authorized to view this page.
        </Alert>
      </Container>
    );
  }

  return <Outlet />; // Render the child components if the user is authorized
};

export default ProtectedRoute;
