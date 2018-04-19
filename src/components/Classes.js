import React, { Component } from 'react';
import ClassData from './Class_Data';

class Classes extends Component {

  componentDidUpdate() {
  }

  render() {
    const filtered_results = this.props.classes.filter(item => {
      for (var key in item) {
        if (item[key].includes(this.props.searchTerm)) {
          return true;
        }
      }
    })
    const classes = filtered_results.map((singleClass, index) => {
     return <ClassData
        key={index}
        title={singleClass.title}
        category={singleClass.category}
        date={singleClass.date}
        schedule={singleClass.schedule}
      />
    })
    return (
      <table align="center">
        <thead>
          <tr>
            <th>Class Title</th>
            <th>Category</th>
            <th>Date Range</th>
            <th>Schedule</th>
          </tr>
        </thead>
          <tbody>
            {classes}
          </tbody>
      </table>
    );
  }
}

export default Classes;