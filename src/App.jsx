import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import { useAuth } from "./integrations/supabase/index.js";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={user ? <Index /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
