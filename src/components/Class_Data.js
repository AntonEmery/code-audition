import React from 'react';

function ClassData({title, category, date, schedule, img}) {
  return (
    <tr>
      <td>
        <img src={img} className="class-image" />
      </td>
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