import React from 'react'
import '../Styles/Travel.css'
import useCulture from '../Hooks/UseCulture'
import Loading from './Loading'

const Travel = () => {

  const culture = useCulture()

  console.log(culture)

  return (
    <article className="engineering_section">
      <div className="visualization-div-header"></div>
      <h2 className="title-actualidad">
        CULTURA Y ARTE
      </h2>
      <p className='description-actualidad'>
        Explora la escena cultural y artística en Unibarranquilla. Reseñas de eventos, entrevistas con artistas locales y destacados, así como la cobertura de actividades culturales organizadas por la universidad.
      </p>

      {culture ? (
        <div className="body-actualidad">
          {
            culture?.map((cult, i) => (
              <div className="Card-actualidad" key={cult.id}>
                <div className="news-number">{`News #${i + 1}`}</div>
                <h3 className="Card-actualidad-title">{cult.Title}</h3>
                <img className='img-actualidad' src={cult.Pic} alt="" />
                <h4 className="Card-actualidad-Editor">{`By ${cult.Editor}`}</h4>
                <p className="Card-actualidad-body">{cult.Body}</p>
                <h5 className="Card-actualidad-Date">{cult.Date}</h5>
                <div className='Card-social'>
                  <h5>Comparte:</h5>
                  <div className="Card-social-btn">
                    <button
                      onClick={() => {
                        const url = `https://www.facebook.com/sharer/sharer.php?u=https://bit.ly/3SzyQkU'`;
                        window.open(url, '_blank');
                      }}
                    ><i className='bx bxl-facebook-square'></i></button>
                    <button
                      onClick={() => {
                        const truncatedText = cult.Title.slice(0, 50);
                        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(truncatedText)}&url=https://bit.ly/3SzyQkU`;
                        window.open(url, '_blank');
                      }}
                    ><i className='bx bxl-twitter' ></i></button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <Loading />
      )}
    </article>
  )
}

export default Travel