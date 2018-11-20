import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import CoursesComboBox from "./components/CoursesComboBox";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";

const client = new ApolloClient({
  uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"
});

class App extends Component {
  state = {
    selectCourse: 1
  };

  onSelect = (item, event) => {
    console.log(event.target.value);
    this.setState({ selectCourse: event.target.value });
  };

  handleClick = id => {
    this.setState({ selectCourse: id });
  };

  render() {
    return <ApolloProvider client={client}>
        <div className="container">
          <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="#">
              React and GraphQL - Sample Application
            </a>
          </nav>
          <div>
            <CoursesComboBox onCoursesSelected={this.onSelect} />
            <CourseDetail courseId={this.state.selectCourse} />
            <Courses handleClick={this.handleClick} />
          </div>
        </div>
      </ApolloProvider>;
  }
}

export default App;
