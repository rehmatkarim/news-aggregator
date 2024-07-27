import React, { useState, useEffect } from 'react';
import Filters from '../components/Filters';
import ArticleCard from '../components/ArticleCard';
import useArticles from '../hooks/useArticles';
import styles from '../styles/FeedPage.module.css';
import { fetchSources } from '../api/newsApi';

const FeedPage = () => {
  const [filters, setFilters] = useState({
    keyword: '',
    category: '',
    source: '',
    date: '',
  });
  const [sources, setSources] = useState([]);

  const { articles } = useArticles(filters);

  useEffect(()=>{
    (async()=>{
        const res = await fetchSources();
        const parsedRes = res.map((item) => {
            return {
                id: item.id,
                name: item.name,
            }
        })
        setSources(parsedRes);
    })();
  },[])

  return (
    <div className={styles.feedPage}>
      <Filters filters={filters} setFilters={setFilters} sources={sources}/>
      <div className={styles.articleList}>
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
