import { SignUp } from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogIn } from "./components/LogIn";
import { Dashboard } from "./components/Dashboard";
import { PrivateRoute } from "./routes/PrivateRoute";
import { Cart } from "./components/Cart";
import { Payment } from "./components/Payment";
import { ExitScreen } from "./components/ExitScreen";

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
            <Route path='/payment' element={<Payment />} />
            <Route path='/exit' element={<ExitScreen />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </>
  );
}

export default App;
