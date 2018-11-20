import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const ALL_COURSES = gql`
  {
    allCourses {
      id
      title
      author
      description
    }
  }
`;

const Courses = ({ onCoursesSelected }) => (
  <Query query={ALL_COURSES}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <div className="form-group">
          <label htmlFor="course">Select Course</label>
          <select
            name="course"
            className="form-control form-control-lg"
            onChange={e => onCoursesSelected("CIAO", e)}
          >
            {data.allCourses.map(course => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
        </div>
      );
    }}
  </Query>
);

export default Courses;
