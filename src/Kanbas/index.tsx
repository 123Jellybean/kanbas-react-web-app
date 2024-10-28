import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import * as db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

export default function Kanbas() {
   
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, newCourse]);
    resetCourseForm();
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const editCourse = (selectedCourse: any) => {
    setCourse(selectedCourse);
  };

  const resetCourseForm = () => {
    setCourse({
      _id: "0",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      image: "/images/reactjs.jpg",
      description: "New Description",
    });
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={
            <Dashboard               
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
              editCourse={editCourse}/>
            } />
          <Route path="/Courses/:cid/*" element={<Courses courses={courses} />} />
          <Route path="/Calendar*" element={<h2>Calendar </h2>} />
          <Route path="/Inbox*" element={<h2>Inbox</h2>} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
