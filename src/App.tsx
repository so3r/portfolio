
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="container project">
          <a href="https://layout-landing-page.vercel.app/" target="_blank">
            <img src='../demo.png' className="logo" alt="Vite logo" />
          </a>
          <a href="https://github.com/so3r/layout_landing-page" target="_blank">
            <img src='../github.png' className="logo" alt="Vite logo" />
          </a>
          <p>
            <strong>Bang & Olufsen </strong>
             – Online store for Bang & Olufsen, developed to
            showcase the company’s products. Used technologies: JavaScript,
            HTML, and SCSS
          </p>
        </div>

        <div className="container project">
          <a href="https://cats-catalog-frontend.netlify.app/" target="_blank">
            <img src='../demo.png' className="logo react" alt="React logo" />
          </a>
          <a href="https://github.com/fs-oct24-cats-with-computers/catalog-frontend" target="_blank">
            <img src='../github.png' className="logo" alt="Vite logo" />
          </a>
          <p>
          <strong>Phone Catalog </strong>
             – This project was created to offer a user-friendly
            experience for exploring the latest in smart devices. With adaptive
            design, easy navigation, and everything you need at your fingertips,
            we aim to make your journey enjoyable. Used technologies:
            TypeScript, HTML, SCSS, React, Redux
          </p>
        </div>

        <div className="container project">
          <a href="https://so3r.github.io/todo/" target="_blank">
            <img src='../demo.png' className="logo react" alt="React logo" />
          </a>
          <a href="https://github.com/so3r/todo" target="_blank">
            <img src='../github.png' className="logo" alt="Vite logo" />
          </a>
          <p>
          <strong>Todo app </strong>
             – The React Todo App with API is a task management
            application that allows users to create, delete, edit, and toggle
            todos with seamless API integration. Used technologies: React,
            TypeScript, SCSS (Sass), Fetch API
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
