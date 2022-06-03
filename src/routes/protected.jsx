import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute( {signedIn} ) {
    if (!signedIn) {
        return <Navigate to='/signIn' />
    }

    return <Outlet />
}