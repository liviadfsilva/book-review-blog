import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Header from "./components/Header";
import Footer from "./components/Footer"


// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import BookReviewPost from "./pages/BookReviewPost";
import ReviewsPage from "./pages/ReviewsPage";

export default function App() {
  return (
    <div className="bg-[#FFFFF] min-h-screen flex flex-col">
      <Router>
        <Header />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/book-review/post/1" element={<BookReviewPost />} />
            <Route path="/book-reviews/all-reviews" element={<ReviewsPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

