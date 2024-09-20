// src/components/MyComponent.jsx

import React from 'react';

const MyFirstComponent = () => {
    const name = "Inés María Oliveros";

    const github_profile = "https://github.com/inesmariao";
  
    const student = {
      name: "Carlos ",
      last_name: "Alvarado",
      mobile: "3057774282",
      linkedin_profile: "www.linkedin.com/in/carlos-alvarado-859b90213"
    };
  
    return (
      <>
        <div>MyFirstComponent</div>
        <div className="container bg-info-subtle mt-4">
          <h1>Temas de React</h1>
          <ul>
              <li>Componentes</li>
              <li>Eventos</li>
              <li>Estados Hooks</li>
              <li>Props</li>
          </ul>
        </div>
        <div className="container bg-warning-subtle py-2">
          <h1>Datos del Docente</h1>
          <p>Nombre: <strong>{ name }</strong></p>
          <p>GitHub: { github_profile } </p>
        </div>
        <div className="container bg-success-subtle py-2">
          <h1>Datos del Estudiante</h1>
          <p>Nombre: <strong>{ student.name }</strong></p>
          <p>Apellido: { student.last_name } </p>
          <p>Celular: { student.mobile } </p>
          <p>LinkedIn: <a href={ student.linkedin_profile }>{ student.linkedin_profile }</a> </p>
        </div>
        <div>
          <h1>Objeto Completo</h1>
          <pre>{JSON.stringify(student)} </pre>
        </div>
      </>
    )
};

export default MyFirstComponent;
