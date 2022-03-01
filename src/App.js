import { SignUp } from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogIn } from "./components/LogIn";
import { Dashboard } from "./components/Dashboard";
import { PrivateRoute } from "./routes/PrivateRoute";
import { Cart } from "./components/Cart";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<PrivateRoute />} >
              <Route exact path='/' element={<Dashboard />} />
            </Route>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </>
  );
}

export default App;
