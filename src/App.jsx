import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListController from "./pages/List/ListController";
import HeaderView from "./Components/Header/HeaderView";
import CreateController from "./pages/Create/CreateController";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderView />

      <Routes>
        <Route path="/" element={<ListController />} />
        <Route path="/create" element={<CreateController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
