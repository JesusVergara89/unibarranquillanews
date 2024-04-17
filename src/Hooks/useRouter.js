import { auth1, auth10, auth11, auth12, auth2, auth3, auth4, auth5, auth6, auth7, auth8, auth9, db, db10, db11, db12, db2, db3, db4, db5, db6, db7, db8, db9, storage, storage10, storage11, storage12, storage2, storage3, storage4, storage5, storage6, storage7, storage8, storage9 } from "../firebaseconfig";
import math from '../Images/math.svg'

const useRouter = () => {
    /* SUBSECCION DEBE IMPORTA LA IMG QUE SE VA A MOSTRAR EN LA LADING PAGES PRINCIPAL
    Y LAS SUBRUTAS DE ESAS SECCIONES SE IDENTIFICA CON EL ARRAY DE OBJETO DE SUBSECCION */
    const ArrayofRouter = [
        {
            dataTitle: 'ARTÍCULOS FLASH',
            Url: 'ARTICLE',
            Database: db,
            Auth: auth1,
            Storage: storage
        },
        {
            dataTitle: 'ACTUALIDAD',
            Url: 'ACTUALIDAD',
            Database: db2,
            Auth: auth2,
            Storage: storage2
        },
        {
            dataTitle: 'CULTURA Y ARTE',
            Url: 'CULTURA',
            Database: db3,
            Auth: auth3,
            Storage: storage3
        },
        {
            dataTitle: 'DEPORTES',
            Url: 'DEPORTES',
            Database: db4,
            Auth: auth4,
            Storage: storage4
        },
        {
            dataTitle: 'INVESTIGACIÓN Y DESARROLLO',
            Url: 'INVESTIGACION',
            Database: db5,
            Auth: auth5,
            Storage: storage5
        },
        {
            dataTitle: 'MI UNIVERISIDAD, MI CIUDAD',
            Url: 'ASUNTOS',
            Database: db6,
            Auth: auth6,
            Storage: storage6
        },
        {
            dataTitle: 'VIDA ESTUDIANTIL',
            Url: 'VIDAU',
            Database: db7,
            Auth: auth7,
            Storage: storage7
        },
        {
            dataTitle: 'EVENTOS',
            Url: 'EVENTOS',
            Database: db8,
            Auth: auth8,
            Storage: storage8
        },
        {
            dataTitle: 'ENTREVISTAS Y PERFILES',
            Url: 'ENTREVISTA',
            Database: db9,
            Auth: auth9,
            Storage: storage9
        },
        {
            dataTitle: 'TECNOLOGIA',
            Url: 'TECNOLOGIA',
            Database: db10,
            Auth: auth10,
            Storage: storage10
        },
        {
            dataTitle: 'MEDIO AMBIENTE',
            Url: 'AMBIENTE',
            Database: db11,
            Auth: auth11,
            Storage: storage11
        },
        {
            dataTitle: 'CIENCIAS',
            Url: 'CIENCIAS',
            Database: db12,
            Auth: auth12,
            Img: math,
            Storage: storage12,
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