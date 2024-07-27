import React from "react";
import styles from "../styles/ArticleCard.module.css";

const ArticleCard = ({ article }) => {
  return (
    <div className={styles.articleCard}>
      <img
        src={article.urlToImage}
        alt={article.title}
        className={styles.articleImage}
      />
      <div className={styles.articleContent}>
        <h2 className={styles.articleTitle}>{article.title}</h2>
        <p className={styles.articleDescription}>{article.description}</p>
        <div>
          <a href={article.url} target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
