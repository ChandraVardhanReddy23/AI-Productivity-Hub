import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "./context/AuthContext";
import Habits from "./pages/Habits";
function App() {

  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>
          <Route
            path="/"
            element={
              <Navigate to="/login" />
            }
          />
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

          <Route
            path="/dashboard"
            element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
            }
          />

          <Route
            path="/habits"
            element={
              <ProtectedRoute>
                <Habits />
              </ProtectedRoute>
            }
          />

        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );

}

export default App;