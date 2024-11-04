
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog"; // Ensure this import path is correct

function App() {
  return (
      <div className="App">
          <Header name={blogData.name} />
          <About image={blogData.image} about={blogData.about} />
          <ArticleList posts={blogData.posts} /> {/* Passing posts prop */}
      </div>
  );
}
export default App;
