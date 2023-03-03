import React, { useState } from "react";
import Table from "../Table/Table";

const Form = () => {
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
    const careerIndex = careers.findIndex((o) => o.value === career);
    if (careerIndex !== -1) {
      const newList = careers.map((item) => {
        if (item === careers[careerIndex]) {
          item.sum += qualification;
          item.numOfStudents++;
        }
        return item;
      });
      setCareers(newList);
    }
  };

  return (
    <div className="container">
      <h1>Promedio de estudiantes por carrera</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select defaultValue="default" onChange={handleSelect}>
            <option value="default" disabled hidden>
              Seleccione una carrera
            </option>
            {careers.map((item) => {
              return (
                <option key={`option-key-${item.id}`} value={item.value}>
                  {item.careerName}
                </option>
              );
            })}
          </select>
          <input
            type="number"
            min="0"
            max="10"
            step="1"
            onChange={(e) => setQualification(Number(e.target.value))}
            defaultValue={"0"}
          />
        </div>
        {error.length > 0 && <p>{error}</p>}
        <input disabled={error.length > 0} type="submit" value="Salvar" />
      </form>
      <Table list={careers} />
    </div>
  );
};

export default Form;
