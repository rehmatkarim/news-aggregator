import { useState, useEffect } from 'react';
import { fetchNews } from '../api/newsApi';

const useArticles = (filters) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const articles = await fetchNews(filters);
      setArticles(articles);
      setLoading(false);
    };
    fetchArticles();
  }, [filters]);

  return { articles, loading };
};

export default useArticles;
