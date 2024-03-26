import { db, db10, db11, db12, db2, db3, db4, db5, db6, db7, db8, db9 } from "../firebaseconfig";
import math from '../Images/math.svg'

const useRouter = () => {
    /* SUBSECCION DEBE IMPORTA LA IMG QUE SE VA A MOSTRAR EN LA LADING PAGES PRINCIPAL
    Y LAS SUBRUTAS DE ESAS SECCIONES SE IDENTIFICA CON EL ARRAY DE OBJETO DE SUBSECCION */
    const ArrayofRouter = [
        {
            dataTitle: 'ARTÍCULOS FLASH',
            Url: 'ARTICLE',
            Database: db
        },
        {
            dataTitle: 'ACTUALIDAD',
            Url: 'ACTUALIDAD',
            Database: db2
        },
        {
            dataTitle: 'CULTURA Y ARTE',
            Url: 'CULTURA',
            Database: db3
        },
        {
            dataTitle: 'DEPORTES',
            Url: 'DEPORTES',
            Database: db4
        },
        {
            dataTitle: 'INVESTIGACIÓN Y DESARROLLO',
            Url: 'INVESTIGACION',
            Database: db5
        },
        {
            dataTitle: 'MI UNIVERISIDAD, MI CIUDAD',
            Url: 'ASUNTOS',
            Database: db6
        },
        {
            dataTitle: 'VIDA ESTUDIANTIL',
            Url: 'VIDAU',
            Database: db7
        },
        {
            dataTitle: 'EVENTOS',
            Url: 'EVENTOS',
            Database: db8
        },
        {
            dataTitle: 'ENTREVISTAS Y PERFILES',
            Url: 'ENTREVISTA',
            Database: db9
        },
        {
            dataTitle: 'TECNOLOGIA',
            Url: 'TECNOLOGIA',
            Database: db10
        },
        {
            dataTitle: 'MEDIO AMBIENTE',
            Url: 'AMBIENTE',
            Database: db11
        },
        {
            dataTitle: 'CIENCIAS',
            Url: 'CIENCIAS',
            Database: db12,
            Img: math,
            Subseccion: [
                {
                    dataTitle: 'MATEMÁTICA',
                    Url: 'Math',
                    Coleccion: 'Math',
                },
                {
                    dataTitle: 'FÍSICA',
                    Url: 'Physics',
                    Coleccion: 'Physics',
                }
            ]
        }
    ]
    return { ArrayofRouter }
}

export default useRouter