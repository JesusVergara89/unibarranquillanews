import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Workus from './Components/Workus'
import NotFound from './Components/NotFound'
import Longin from './Components/Longin'
import CompanyCollaboratorAccess from './Components/CompanyCollaboratorAccess'
import RoutesProtecteds from './Components/RoutesProtecteds'
import Header from './Components/Header'
import Flotan from './Components/Flotan'
import Containerpost from './Components/Blognews/component/Containerpost'
import Blogarticle from '../src/Components/Blognews/component/Blogarticle'
import Theblog from './Components/Theblog'
import Singlearticle from './Components/Singlearticle'
import Seccion from './Components/Seccion'
import Aboutblog from './Components/Aboutblog'
import FlashArticles from './Components/FlashArticles'
import Networks from './Components/Networks'
import Socialmedia from './Components/Socialmedia'
import news from './Images/news.jpg'
import SectionNews from './Components/SectionNews'
import { db10, db2, db3, db4, db5, db6, db7, db8, db9 } from './firebaseconfig'
import actualidad from './Images/people.jpg';
import cultura from './Images/arte.jpg';
import deportes from './Images/deporte.jpg';
import investigación from './Images/microscope.jpg';
import asuntos from './Images/city.jpg';
import vidau from './Images/estudiantes.jpg';
import evento from './Images/evento.jpg';
import entrevista from './Images/entrevista.jpg';
import tecnologia from './Images/tech.jpg';

function Blog() {

  const [IsLogged, setIsLogged] = useState(false)

  const [reloadPage, setReloadPage] = useState(false)

  ////////////////////////////////////////////////////
  const navigateFunctions = [
    useNavigate(),
    useNavigate(),
    useNavigate(),
    useNavigate(),
    useNavigate(),
    useNavigate(),
    useNavigate(),
    useNavigate(),
    useNavigate()
  ];

  const arrayOfDataBase = [db2, db3, db4, db5, db6, db7, db8, db9, db10];

  const imagesSections = [
    actualidad,
    cultura,
    deportes,
    investigación,
    asuntos,
    vidau,
    evento,
    entrevista,
    tecnologia
  ];

  const categories = [
    'ACTUALIDAD',
    'CULTURA',
    'DEPORTES',
    'INVESTIGACION',
    'ASUNTOS',
    'VIDAU',
    'EVENTOS',
    'ENTREVISTA',
    'TECNOLOGIA'
  ];

  const ArrayDescrip = [
    {
        dataTitle: 'ACTUALIDAD',
        dataDescription: 'Mantente al tanto de las últimas noticias, eventos y desarrollos en nuestra universidad y en el mundo. Desde anuncios importantes hasta logros destacados de nuestros estudiantes y profesores.'
    },
    {
        dataTitle: 'CULTURA Y ARTE',
        dataDescription: 'Explora la escena cultural y artística en Unibarranquilla. Reseñas de eventos, entrevistas con artistas locales y destacados, así como la cobertura de actividades culturales organizadas por la universidad.'
    },
    {
        dataTitle: 'DEPORTES',
        dataDescription: 'Permanece actualizado sobre los logros y desempeños de nuestros equipos deportivos, tanto a nivel nacional como internacional. Mantente informado sobre eventos deportivos emocionantes, entrevistas con destacados atletas y análisis de campeonatos universitarios y de alto nivel. Sumérgete en el mundo del deporte donde la pasión y la excelencia se entrelazan en cada competición, desde lo local hasta lo global.'
    },
    {
        dataTitle: 'INVESTIGACIÓN Y DESARROLLO',
        dataDescription: 'Sumérgete en el vibrante tejido urbano donde convergen la vida estudiantil y la innovación académica. Explora los hallazgos más recientes y los proyectos pioneros desarrollados por nuestros destacados académicos y estudiantes. Adéntrate en las contribuciones que nuestra universidad ofrece al conocimiento y al progreso científico en el bullicioso entorno de la ciudad.'
    },
    {
        dataTitle: 'MI UNIVERISIDAD, MI CIUDAD',
        dataDescription: 'Aquí te sumergimos en la vida estudiantil y el dinamismo urbano que define nuestra comunidad. Desde eventos académicos hasta iniciativas comunitarias, descubre cómo nuestra universidad y la ciudad se entrelazan para enriquecer nuestra experiencia y dejar una marca positiva en nuestra comunidad.'
    },
    {
        dataTitle: 'VIDA ESTUDIANTIL',
        dataDescription: 'Explora la experiencia estudiantil en Unibarranquilla. Desde consejos prácticos hasta perfiles de estudiantes destacados, te ofrecemos una visión completa de la vida en el campus.'
    },
    {
        dataTitle: 'EVENTOS',
        dataDescription: 'Entérate de los eventos próximos, conferencias, seminarios y actividades sociales que enriquecen nuestra vida universitaria y de la ciudad. No te pierdas ninguna oportunidad de participar y ser parte activa de la comunidad.'
    },
    {
        dataTitle: 'ENTREVISTAS Y PERFILES',
        dataDescription: 'Conoce a fondo a los líderes, académicos y personalidades que forman parte de nuestra ciudad, universidad y país. Descubre sus historias, experiencias y contribuciones a la educación superior.'
    },
    {
        dataTitle: 'TECNOLOGIA',
        dataDescription: '¡Bienvenido a la sección de Tecnología! Aquí, te mantenemos al día con las últimas novedades en gadgets, innovaciones y avances tecnológicos. Desde smartphones hasta inteligencia artificial, exploramos cómo la tecnología está moldeando nuestro futuro.'
    }
]

  //////////////////////////////////////////

  return (
    <div className='Blog'>
      <Header reloadPage={reloadPage} setReloadPage={setReloadPage} />
      <Flotan />
      <Routes>
        <Route path='/'
          element={
            <article className='main_page'>
              <div className='Video'>
                <img src={news} alt="" />
                <h1>WELCOME</h1>
                <h2>UNIVERSITY</h2>
                <h3>INDEPENDET</h3>
                <h4>NEWSPAPER</h4>
              </div>

              <Aboutblog />

              <FlashArticles IsLogged={IsLogged} />

              <div className="container">
                {categories.map((category, index) => (
                  <div key={index} className="inner-container" onClick={() => navigateFunctions[index](`/${category.toUpperCase()}`)}>
                    <div className="inner-container-one">
                      <div className="container-one-information">
                        <h2>{ArrayDescrip[index].dataTitle}</h2>
                      </div>
                      <img src={imagesSections[index]} alt="photo" />
                    </div>
                    <div className="inner-container-two">
                      <SectionNews DataBase={arrayOfDataBase[index]} />
                    </div>
                  </div>
                ))}
              </div>

              <Networks />

              <Socialmedia />

            </article>
          }
        />
        <Route path='/:name'
          element={<Seccion />}
        />
        <Route path='/:name/:id'
          element={<Singlearticle />}
        />
        <Route path='/OPENPOSSITIONS'
          element={<Workus />}
        />
        <Route path='/BLOG'
          element={<Containerpost />}
        />
        <Route path='/BLOGARTICLE/:id'
          element={<Blogarticle />}
        />
        <Route path='/READBLOG'
          element={<Theblog />}
        />
        <Route path="*" element={<NotFound />} />

        <Route path='/LOGIN' element={<Longin IsLogged={IsLogged} setIsLogged={setIsLogged} />} />

        <Route element={<RoutesProtecteds IsLogged={IsLogged} />}>
          <Route
            path='/COLLABORATORS'
            element={<CompanyCollaboratorAccess IsLogged={IsLogged} setIsLogged={setIsLogged} />}
          />
        </Route>
      </Routes>

    </div>
  )
}

export default Blog