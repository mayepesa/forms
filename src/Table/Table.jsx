import React from 'react'
import Row from './Row'

const Table = ({list}) => {

  return (
     <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Carrera</th>
              <th>Cantidad de Estudiantes</th>
              <th>Promedio de Calificaciones de los Estudiantes</th>
            </tr>
          </thead>
          <tbody>
            {list.map(
              (career) =>
                career.qualifiable && (
                  <Row key={`list-key-${career.id}`} item={career} />
                )
            )}
          </tbody>
        </table>
      </div>
  )
}

export default Table
