import React, { useState } from "react";
import "./styles.css";

function App() {
  const [careers, setCareers] = useState([
    {
      id: 11,
      value: "database",
      careerName: "Base de Datos",
      numOfStudents: 0,
      sum: 0,
      qualifiable: true,
    },
    {
      id: 12,
      value: "frontend",
      careerName: "Desarrollo Frontend",
      numOfStudents: 0,
      sum: 0,
      qualifiable: true,
    },
    {
      id: 13,
      value: "backend",
      careerName: "Desarrollo Backend",
      numOfStudents: 0,
      sum: 0,
      qualifiable: true,
    },
    {
      id: 14,
      value: "devops",
      careerName: "Devops",
      numOfStudents: 0,
      sum: 0,
      qualifiable: false,
    },
  ]);
  const [career, setCareer] = useState("");
  const [error, setError] = useState("");
  const [qualification, setQualification] = useState(null);

  const handleSelect = (e) => {
    e.preventDefault();
    setError("");
    const careerValue = e.target.value;
    const isCareerQualifiable = careers.some(
      (o) => o.value === careerValue && o.qualifiable === true
    );
    if (!isCareerQualifiable) {
      setError("El curso seleccionado no es válido");
    } else {
      setCareer(careerValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* pensaba tbn hacer un .find dentro de un .indexOf */
    const careerIndex = careers.findIndex((o) => o.value === career);
    if (careerIndex !== -1) {
      setCareers([
        ...careers,
        (careers[careerIndex].sum += qualification),
        (careers[careerIndex].numOfStudents += 1),
      ]);
    }
  };

  return (
    <div className="container">
      <h1>Promedio de estudiantes por carrera</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select onChange={handleSelect}>
            <option selected disabled hidden>
              Seleccione una carrera
            </option>
            {careers.map((item) => (
              <option key={item.id} value={item.value}>
                {item.careerName}
              </option>
            ))}
          </select>
          <input
            type="number"
            min="0"
            max="10"
            step="1"
            onChange={(e) => setQualification(Number(e.target.value))}
            defaultValue={'0'} 
          />
        </div>
        {error.length > 0 && <p>{error}</p>}
        <input disabled={error.length > 0} type="submit" value="Salvar"/>
      </form>

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
            {careers.map(
              (item) =>
                item.qualifiable && (
                  <tr key={item.id}>
                    <td>{item.careerName}</td>
                    <td>{item.numOfStudents}</td>
                    <td>
                      {item.numOfStudents !== 0
                        ? item.sum / item.numOfStudents
                        : 0}
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
