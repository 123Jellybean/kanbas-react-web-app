import { useLocation } from "react-router";
export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills" id="wd-toc">
      <li className="nav-item">
        <a
          id="wd-a1"
          href="#/Labs/Lab1"
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}
        >
          Lab 1
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-a2"
          href="#/Labs/Lab2"
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}
        >
          Lab 2
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-a3"
          href="#/Labs/Lab3"
          className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}
        >
          Lab 3
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="#/Labs/Lab4" className="nav-link">
          Lab 4
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="#/Labs/Lab5" className="nav-link">
          Lab 5
        </a>
        </li>
      <li className="nav-item">
        <a id="wd-k" href="#/Kanbas" className="nav-link">
          Kanbas
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-k"
          href="https://github.com/123jellybean"
          className="nav-link"
        >
          My GitHub
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-k"
          href="https://github.com/123Jellybean/kanbas-node-server-app"
          className="nav-link"
        >
          Kanbas Server Repo
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-k"
          href="https://kanbas-node-server-app-jmje.onrender.com"
          className="nav-link"
        >
          Render Server
        </a>
      </li>

      
    </ul>
  );
}
