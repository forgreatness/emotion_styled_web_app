/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Article({ title, author, date, text }) {
  const styles = css`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    border: 2px solid black;
    margin-bottom: 10px;
    padding: 5px 10px;
    h2 {
      margin: 0;
    }
    h3 {
      margin: 0;
    }
    p {
      font-family: Roboto, sans-serif;
    }
  `;

  return (
    <article css={styles}>
      <h2>{title}</h2>
      <h3>{author} &ndash; {new Date(date).toLocaleString()}</h3>
      <p>{text}</p>
    </article>
  );
}

export default Article;
