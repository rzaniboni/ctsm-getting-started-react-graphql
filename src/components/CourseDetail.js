import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const QUERY = gql`
  query CourseQuery($id: Int!) {
    course(id: $id) {
      id
      title
      author
      description
      topic
      url
    }
  }
`;

class CourseDetail extends Component {
  render() {
    const { courseId } = this.props;

    console.log(courseId);

    return (
      <Query query={QUERY} variables={{ id: +courseId }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading ...</p>;
          if (error) return <p>Error :(</p>;
          console.log(data);
          const { title, author } = data.course;
          return (
            <Fragment>
              <ul className="list-groups">
                <li className="list-group-item">Title: {title}</li>
                <li className="list-group-item">Author: {author}</li>
              </ul>
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default CourseDetail;
