import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
<br />
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/art.jpg" width={200} height={100} />
            <div>
              <h5>ARTG1001</h5>
              <p className="wd-dashboard-course-title">Color & Composition</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
<br/ >
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/bluey.jpg" width={200} />
            <div>
              <h5>ARTG4200</h5>
              <p className="wd-dashboard-course-title">Art & Animation</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
<br />
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/business.jpg" width={200} />
            <div>
              <h5>BUSI1950</h5>
              <p className="wd-dashboard-course-title">
                How to manage a business
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
<br />
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/food.jpg" width={200} height={100}/>
            <div>
              <h5>FOOD2205</h5>
              <p className="wd-dashboard-course-title">
                Japanese Dishes & Culture
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
<br />
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/hawaii.jpg" width={200} height={100}/>
            <div>
              <h5>HIST1001</h5>
              <p className="wd-dashboard-course-title">
                Hawaiian History
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
<br />
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/library.jpg" width={200} height={100}/>
            <div>
              <h5>WRIT1101</h5>
              <p className="wd-dashboard-course-title">
                Book-binding 101
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
