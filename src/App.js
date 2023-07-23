import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Destination from './pages/Destination';
import Itinerary from './pages/Itinerary';
import Itinerary2 from './pages/Itinerary2';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import France from './pages/France';
import Itinerary3 from './pages/Itinerary3';
import Itinerary4 from './pages/Itinerary4';

export default function App() {
  return (
    <div>
      <BrowserRouter basename="/64bda937ee38686cf226c923--dynamic-salamander-e49310">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/france" element={<France />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/itinerary2" element={<Itinerary2/>} />
          <Route path="/itinerary3" element={<Itinerary3 />} />
          <Route path="/itinerary4" element={<Itinerary4 />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}