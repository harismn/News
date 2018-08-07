import React from 'react';
import api from '../../api/article';
import { Item } from 'semantic-ui-react';

class Articles extends React.Component {
  constructor(props) {
    super(props)
    this.mounted = true
    this.interval = setInterval(() => {
      if(this.mounted) this.setState();
    })
    this.state = {
      articles: []
    }
  }
  componentDidMount() {

        if (this.state.isMounted) {
          this.setState({ isMounted: false });
          {
          }
        }
      }

      formatDate(date) {
        var time = new Date(date);
        var year = time.getFullYear();
        var day = time.getDate();
        var hour = time.getHours();
        var minute = time.getMinutes();
        var month = time.getMonth() + 1;
        var composedTime =
          day +
          '/' +
          month +
          '/' +
          year +
          ' | ' +
          hour +
          ':' +
          (minute < 10 ? '0' + minute : minute);
        return composedTime;
      }

  componentWillMount() {
    this.mounted = true;
    api.getArticles()
      .then( articles => {
        console.log("component will mount", articles)
        this.setState({articles:articles.user})
      })
      .catch(err => console.error(err))
  }


  renderList(){

    let render = this.state.articles ? this.state.articles.map((news, i) => (
      <React.Fragment key={i}>
        <div className="image-wrapper">
          <img className="responsive-img" src="http://loremflickr.com/320/240" />
        </div>
        <div className="content" >
          <h4>{news.tittle}</h4>
          <p>{(news.content).substr(0, 250)}</p>
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
        </React.Fragment>
    )) : "";

    return render
  }

  render() {
    return (
      
      <div className="blogpost">
      { this.renderList() }
       {/* {this.state.articles.map((news, i) => {
        return (
          <React.Fragment>
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
          </React.Fragment>
            );
          })}; */}
      </div>
    );
  };
}
export default Articles;