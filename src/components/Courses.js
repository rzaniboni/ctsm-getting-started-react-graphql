import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Course from "./Course";

const QUERY = gql`
  {
    allCourses {
      id
      title
      author
      description
      topic
      url
    }
  }
`;

const Courses = ({ handleClick }) => (
  <Query query={QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading ...</p>;
      if (error) return <p>Error :(</p>;

      return data.allCourses.map(course => (
        <Course key={course.id} course={course} handleClick={handleClick} />
      ));
    }}
  </Query>
);

export default Courses;
