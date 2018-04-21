import React, { Component } from 'react';
import ClassData from './Class_Data';

class Classes extends Component {

  render() {
    const filtered_results = this.props.classes.filter(item => {
      for (var key in item) {
        if (item[key].toLowerCase().includes(this.props.searchTerm.toLowerCase())) {
          return true;
        }
      }
      return false
    })
    const classes = filtered_results.map((singleClass, index) => {
     return <ClassData
        key={index}
        title={singleClass.title}
        category={singleClass.category}
        date={singleClass.date}
        schedule={singleClass.schedule}
        img={singleClass.img}
      />
    })
    if (classes)
    return (
      <table align="center">
        <thead>
          <tr>
            <th>Image</th>
            <th>Class Title</th>
            <th>Category</th>
            <th>Date Range</th>
            <th>Schedule</th>
          </tr>
        </thead>
          <tbody>
            {classes.length > 0
              ? classes
              : <tr><td>No results found</td></tr>}
          </tbody>
      </table>
    );
  }
}

export default Classes;