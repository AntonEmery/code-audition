import React from 'react';

function ClassData({title, category, date, schedule}) {
  return (
    <tr>
      <td>
        {title}
      </td>
      <td>
        {category}
      </td>
      <td>
        {date}
      </td>
      <td>
        {schedule}
      </td>
    </tr>
  );
}

export default ClassData;