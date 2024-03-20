import React, { useState } from 'react';
import Formgeneral from '../Formcreated/Formgeneral';
import Articlesgeneral from '../Formcreated/Articlesgeneral';
import './SectionScience.css';
import Formgeneral_ciencia from './Formgeneral_ciencia';


const SectionScience = ({ IsLogged, name, lastName, database, storagebase, arrayCollections }) => {
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
        <div className="sections-sciences">
            {selectedSubject ? '' : <h2 className='which-one'>Elige en cuál sección quieres escribir el artículo</h2>}

            {selectedSubject ?
                ''
                :
                <div className="sections-science-btns">
                    {subjects.map((subject, index) => (
                        <div className="extent-btn-science" key={index}>
                            {subject.active &&
                                <button onClick={() => actualizarEstado(index)}>{subject.name}</button>
                            }
                        </div>
                    ))}
                </div>
            }

            {selectedSubject && (
                <div className="sections-sciences-make">
                    <Formgeneral_ciencia
                        name={name}
                        lastName={lastName}
                        database={database}
                        storagebase={storagebase}
                        arrayCollections={[selectedSubject]}
                    />

                    <Articlesgeneral
                        IsLogged={IsLogged}
                        database={database}
                        arrayCollections={[selectedSubject]}
                    />
                </div>
            )}
        </div>
    )
}

export default SectionScience;
