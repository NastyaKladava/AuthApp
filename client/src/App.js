import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Layout from "./components/Layout/Layout";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import UsersPage from "./pages/UsersPage/UsersPage";
import SignIn from "./components/SignIn/SigIn";
import { useApp } from "./hooks/appHook";

const App = () => {
  useApp();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RegisterPage />} />
        <Route
          path="/users"
          element={
            <RequireAuth>
              <UsersPage />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
