import "./App.css";
import About from "./components/about/about-us";
import Contact from "./components/contact/contact-us";
import Homepage from "./components/homepage/homepage";
import NavBar from "./components/nav-bar";
import News from "./components/news/news";
import PageError from "./components/404-error";
import HeadUp from "./components/head-up";
import Copyright from "./components/copyright";
import NewsBlock from "./components/news/news-block";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <HeadUp />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="home" element={<Homepage />} />
        <Route path="news/:id" element={<NewsBlock />} />
        <Route path="news" element={<News />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Copyright />
    </>
  );
}

export default App;
