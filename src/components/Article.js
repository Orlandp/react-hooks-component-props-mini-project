// Article.js

import React from 'react';

const Article = ({ title, date = "Date not available", preview }) => (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </article>
);

export default Article;
