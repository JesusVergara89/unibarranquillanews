import { db10, db11, db2, db3, db4, db5, db6, db7, db8, db9 } from "../firebaseconfig";


const useRouter = () => {

    const arrayOfDataBase = [db2, db3, db4, db5, db6, db7, db8, db9, db10, db11 ];

    const ArrayDescrip = [
        {
            dataTitle: 'ACTUALIDAD',
            Url: 'ACTUALIDAD'
        },
        {
            dataTitle: 'CULTURA Y ARTE',
            Url: 'CULTURA'
        },
        {
            dataTitle: 'DEPORTES',
            Url: 'DEPORTES'
        },
        {
            dataTitle: 'INVESTIGACIÓN Y DESARROLLO',
            Url: 'INVESTIGACION'
        },
        {
            dataTitle: 'MI UNIVERISIDAD, MI CIUDAD',
            Url: 'ASUNTOS'
        },
        {
            dataTitle: 'VIDA ESTUDIANTIL',
            Url: 'VIDAU'
        },
        {
            dataTitle: 'EVENTOS',
            Url: 'EVENTOS'
        },
        {
            dataTitle: 'ENTREVISTAS Y PERFILES',
            Url: 'ENTREVISTA'
        },
        {
            dataTitle: 'TECNOLOGIA',
            Url: 'TECNOLOGIA'
        },
        {
            dataTitle: 'MEDIO AMBIENTE',
            Url: 'AMBIENTE'
        }
    ]
  return {arrayOfDataBase,ArrayDescrip}
}

export default useRouter