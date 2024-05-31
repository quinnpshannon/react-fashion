import './Article.css';
import { articles } from '../../assets/data/articles'
/*
This is where we design the Article layout
*/

function Article() {
    const articleList = articles.map(article =>
        <div key={article.key}>
            <h3>{article.date}</h3>
            <h2>{article.title}</h2>
            <img src={article.img} />
            <p>{article.text}</p>
            <a href={article.link}>Continues...</a>
        </div>

    );
    return (
        <article>{articleList}</article>
    );
}

export default Article;