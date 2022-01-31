import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppReducer from "./reducers/AppReducer";
import { useReducer } from "react";
import AppContext from "./components/AppContext";

function App() {
  const initialState = { user: null, posts: [] };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <BrowserRouter>
      <AppContext.Provider>
        <div className="container">
          <Header />
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/" element={<Main />}></Route>
            <Route path="*" element={<div>Page Not Found</div>}></Route>
          </Routes>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
