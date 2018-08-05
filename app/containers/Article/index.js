import React from 'react';
import api from '../../api/article'

class Articles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    api.getArticles()
      .then( articles => {
        console.log(articles)
        this.setState({articles:articles.article})
      })
      .catch(err => console.log(err))
  }
  render() {
  return (

    
    <div className="blogpost">
     {this.state.articles.map((news, i) => {
return (
        <div className="image-wrapper">
          <img className="responsive-img" src="http://loremflickr.com/320/240" />
        </div>
        <div className="content"  key={i}>
          <h4>{news.tittle}</h4>
          <p>{news.content}</p>
        </div>
        <div className="footer">
          <div className="row">
            <div className="footer-content">
              <i className="material-icons">today</i>
              <span>{this.formatDate(news.created)}</span>
            </div>
            <div className="footer-content">
              <i className="material-icons">chat bubble outline</i>
              <a href="">6</a>
            </div>
          </div>
        </div>
        <div className="read-more">
          <a href="">Read more</a>
        </div>
          );
        })};
    </div>
  );
};
}
export default Articles;
