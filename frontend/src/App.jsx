import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import Course from './pages/Course';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
