import React from 'react';

function Article({ title, author, date, text }) {
  return (
    <article>
      <h2>{title}</h2>
      <h3>{author} &ndash; {new Date(date).toLocaleString()}</h3>
      <p>{text}</p>
    </article>
  );
}

export default Article;
