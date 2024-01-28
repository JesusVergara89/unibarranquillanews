import useActualidad from '../Hooks/useActualidad'
import Loading from './Loading'


const Engineering = () => {

  const update = useActualidad()

  return (
    <article className="engineering_section">
      <div className="visualization-div-header"></div>
      <h2 className="title-actualidad">
        ACTUALIDAD UNIVERSITARIA
      </h2>
      <p className='description-actualidad'>
        Mantente al tanto de las últimas noticias, eventos y desarrollos en nuestra universidad. Desde anuncios importantes hasta logros destacados de nuestros estudiantes y profesores.
      </p>

      {update ? (
        <div className="body-actualidad">
          {update?.map((news, i) => (
            <div className="Card-actualidad" key={i}>
              <div className="news-number">{`News #${i + 1}`}</div>
              <h3 className="Card-actualidad-title">{news.Title}</h3>
              <img className='img-actualidad' src={news.Pic} alt="" />
              <h4 className="Card-actualidad-Editor">{`By ${news.Editor}`}</h4>
              <p className="Card-actualidad-body">{news.Body}</p>
              <h5 className="Card-actualidad-Date">{news.Date}</h5>
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
                      const truncatedText = news.Title.slice(0, 50);
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

export default Engineering