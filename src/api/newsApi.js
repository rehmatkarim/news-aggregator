import axios from 'axios';

const NEWS_API_URL = 'https://newsapi.org/v2';
const API_KEY = 'ff6c46bdfe444fc49191d40daec2f55d';
export const fetchNews = async (filters) => {
  const { keyword, source, date } = filters;
  let domains = 'bbc.co.uk, techcrunch.com';
  if(keyword || source ){
    domains = '';
  }
  const response = await axios.get(`${NEWS_API_URL}/everything`, {
    params: {
      q: keyword,
      sources: source,
      domains: domains,
      from: date,
      apiKey: API_KEY,
    },
  });
  return response.data.articles;
};

export const fetchSources = async () => {
    const response = await axios.get(`${NEWS_API_URL}/sources`,{ params: {
        apiKey: API_KEY,
      }});
    return response.data.sources;
  };



