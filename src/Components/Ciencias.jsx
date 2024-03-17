import React, { useState } from 'react'
import '../Styles/Ciencias.css'
import Cardscience from './ScienceComponents/Cardscience'
import fisica from '../Images/fisica.svg'
import math from '../Images/mathimg.svg'

const Ciencias = () => {

  const [subjects, setSubjects] = useState([{ name: "Math", active: true }, { name: "Physics", active: true }]);

  const imgForCardScience = [math,fisica ]

  return (
    <article className="ciencia">
        <div className="ciencia-cards">
          {subjects.map((subject, index) => (
            subject.active &&
            <Cardscience index={index} imgForCardScience={imgForCardScience[index]} />
          ))}
        </div>
    </article>
  )
}

export default Ciencias