import React, { useState } from 'react'
import '../Styles/Ciencias.css'
import SectionPage from './ScienceComponents/SectionPage'
import Cardscience from './ScienceComponents/Cardscience'

const Ciencias = () => {
  const [subjects, setSubjects] = useState([{ name: "Math", active: true }, { name: "Physics", active: true }]);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const actualizarEstado = (index) => {
    setSubjects(prevState => {
      const updatedSubjects = prevState.map((subject, i) => {
        if (i === index) {
          setSelectedSubject(subject.name);
          return { ...subject, active: true };
        } else {
          return { ...subject, active: false };
        }
      });
      return updatedSubjects;
    });
  }

  return (
    <article className="ciencia">
      {selectedSubject ? '' :
        <div className="ciencia-cards">
          {subjects.map((subject, index) => (
            subject.active &&
            <Cardscience key={index} index={index} actualizarEstado={actualizarEstado} subject={subject} />
          ))}
        </div>
      }
      {selectedSubject ? <SectionPage arrayCollections={[selectedSubject]} /> : ''}
    </article>
  )
}

export default Ciencias