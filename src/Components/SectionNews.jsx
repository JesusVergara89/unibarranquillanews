import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import '../Styles/SectionNews.css'

const SectionNews = ({ DataBase }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const articleRef = collection(DataBase, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"), limit(3));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
    });
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  }
  const TimeReading = (text, wordsPerMinutes = 200) => {
    const words = text.trim().split(/\s+/).length;
    const timeToReadPerMinutes = words / wordsPerMinutes;
    const RoundedTimeRead = Math.ceil(timeToReadPerMinutes);
    return RoundedTimeRead;
  }
  return (
    <article className="mini-sections">
      {
        articles?.map((article, i) => (
          <div className="mini-card" key={article.id}>
            <div className="mini-img">
              <img src={article.imageUrl} alt="" />
            </div>
            <h4>{truncateText(article.title, 40)}</h4>
            <p>
              {truncateText(article.description, 100)}
            </p>
            <h5>{`${TimeReading(article.description)} min. read`}</h5>
          </div>
        ))
      }
    </article>
  )
}

export default SectionNews
