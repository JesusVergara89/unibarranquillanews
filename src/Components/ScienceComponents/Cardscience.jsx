import React, { useState } from 'react';
import './Cardscience.css';
import { useNavigate } from 'react-router-dom';

const Cardscience = ({ index, imgForCardScience }) => {
    const [subjects, setSubjects] = useState([{ name: "Math", active: true }, { name: "Physics", active: true }]);

    const toSectionPage = useNavigate() 
    const actualizarEstado = (index) => {
        setSubjects(prevState => {
            const updatedSubjects = prevState.map((subject, i) => {
                if (i === index) {
                    toSectionPage(`/CIENCIAS/${subject.name}`); 
                    return { ...subject, active: true };
                } else {
                    return { ...subject, active: false };
                }
            });
            return updatedSubjects;
        });
    };

    return (
            <div className="Card-science" onClick={() => actualizarEstado(index)}>
                <img src={imgForCardScience} alt="" />
                <h2 className='Card-science-h2' onClick={() => actualizarEstado(index)}>{subjects[index].name}</h2>
            </div>
    );
};

export default Cardscience;
