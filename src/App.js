import './App.css';
import Categories from './pages/Categories';
import HomePage from './pages/HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CategoryItems from './pages/CategoryItems';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:id" element={<CategoryItems />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
