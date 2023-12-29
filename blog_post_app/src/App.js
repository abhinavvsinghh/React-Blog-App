import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import AddBlogPost from "./pages/AddBlogPost/AddBlogPost";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import ScrollToTop from "./utils/ScrollToTop";
import { ToastProvider } from "./context/ToastContext";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      {/* Wrap the entire app with ToastProvider for toast notifications */}
      <ToastProvider>
        {/* Router for handling navigation */}
        <Router>
          {/* Scroll to top on route change */}
          <ScrollToTop />
          {/* Define routes and their corresponding components */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddBlogPost />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            {/* Add the route for handling invalid paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* Footer component */}
          <Footer />
        </Router>
      </ToastProvider>
    </>
  );
}

export default App;
