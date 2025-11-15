import Body from "./components/Body.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Feed from "./components/Feed.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import ConnectionPage from "./components/ConnectionPage.jsx";
import RequestPage from "./components/RequestPage.jsx"

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<ConnectionPage />} />
              <Route path="/requests" element={<RequestPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
