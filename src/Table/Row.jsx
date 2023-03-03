import React from "react";

const Row = ({item}) => {
  return (
    <tr>
      <td>{item.careerName}</td>
      <td>{item.numOfStudents}</td>
      <td>{item.numOfStudents !== 0 ? item.sum / item.numOfStudents : 0}</td>
    </tr>
  );
};

export default Row;
