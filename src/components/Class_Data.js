import React from 'react';

function ClassData(props) {
  return (
    <tr>
      <td>
        {props.title}
      </td>
      <td>
        {props.category}
      </td>
      <td>
        {props.date}
      </td>
      <td>
        {props.schedule}
      </td>
    </tr>
  );
}

export default ClassData;