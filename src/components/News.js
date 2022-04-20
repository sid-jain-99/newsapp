import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
  articles =[
      {
        "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
        "author": "Jon Healy",
        "title": "Australia's 2022 Cricket World Cup win over England is redemption for the disappointment of 2017",
        "description": "Australia's latest Cricket World Cup is a triumph all on its own, but it also exorcises demons that have followed this side for five years.",
        "url": "http://www.abc.net.au/news/2022-04-03/how-australia-bounced-back-from-disappointment-of-2017-world-cup/100962882",
        "urlToImage": "https://live-production.wcms.abc-cdn.net.au/cca56ba98abb099854bbd695da8c7822?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=260&width=862&height=485",
        "publishedAt": "2022-04-03T10:23:44Z",
        "content": "Australia arrived in New Zealand this year as favourites to win the World Cup, but considering the way it went last time, you could forgive them for putting less than zero stock in that status.\r\nA se… [+2886 chars]"
      },
      {
        "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
        "author": "Alexander Darling",
        "title": "First XI of 1868: The story of the all-Aboriginal cricket side that was Australia's first sports team to tour overseas",
        "description": "It's the greatest sporting story you may never have heard of, but the director of a play about an all-Aboriginal cricket side that was Australia's first team to tour overseas, says it won't stay that way much longer.",
        "url": "http://www.abc.net.au/news/2022-04-03/first-xi-of-1868-all-aboriginal-cricket-team-black-cockatoo/100948874",
        "urlToImage": "https://live-production.wcms.abc-cdn.net.au/5edf99888c6f956448586fb15b8c5917?impolicy=wcms_crop_resize&cropH=585&cropW=1041&xPos=123&yPos=55&width=862&height=485",
        "publishedAt": "2022-04-03T08:14:54Z",
        "content": "When thousands of people from across the world attended the public memorial for Shane Warne at the MCG, the day of love and legacy was further proof of how Australia's identity is inextricably linked… [+7248 chars]"
      },
      {
        "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
        "author": "Enock Muchinjo",
        "title": "How cricket is at a crossroads in Zimbabwe",
        "description": "Poor infrastructure, absence of club cricket, lack of funding and corruption allegations have all affected the sport.",
        "url": "http://www.aljazeera.com/sports/2022/4/3/how-cricket-is-at-a-crossroads-in-zimbabwe",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/03/2015-03-14T120000Z_655682525_GM1EB3E0XDP01_RTRMADP_3_CRICKET-WORLD-IND-ZIM.jpg?resize=1200%2C630",
        "publishedAt": "2022-04-03T06:12:28Z",
        "content": "Harare, Zimbabwe Brendan Taylor, former Zimbabwe cricket captain, was handed a three-year ban earlier this year for failing to report a match-fixing approach from a trip to India.\r\nHe made the trip i… [+6822 chars]"
      },
      {
        "source": { "id": "bbc-sport", "name": "BBC Sport" },
        "author": "BBC Sport",
        "title": "Shane Warne memorial - watch & follow updates",
        "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
        "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
        "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
        "publishedAt": "2022-03-30T08:22:26.498888Z",
        "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
      },
      {
        "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
      },
      {
        "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
      }
    ]
    static defaultProps = {
      country: 'in',
      category: 'general',
      pageSize: 9,
    }
    static propTypes = {
      country: PropTypes.string,
      category: PropTypes.string,
      pageSize: PropTypes.number,
    }
  
  constructor(){
    
    super();
    console.log("Constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalArticles: 0,
    }
  }

  async updateNews(){
        this.setState({loading: true})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=13cfa75c88a44218afef759c6ec2786c&pageSize=${this.props.pageSize}&page=${this.state.page}`
        console.log(url);
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, 
          totalArticles: parsedData.totalResults,
          loading: false})
  }
  
  async componentDidMount(){
        
        this.updateNews();
    }

  handlePrevClick=async()=>{
    this.setState({page: this.state.page-1})
    this.updateNews();
    
  }

  handleNextClick=async ()=>{
    this.setState({page: this.state.page+1});
    this.updateNews();
    
    
  }

  render() {
    return (
      
      <div className="container my-3" >
        <h1>Top Headlines</h1>
          {this.state.loading &&  <Spinner/>}
        <div className="row">
          { !this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key = {element.url}>
            <NewsItem title ={element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl = {element.url}/>
            </div>
          })}
              
        </div>
        {!this.state.loading && <div className="container d-flex justify-content-between">
          <button  disabled = {this.state.page<=1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">&#8592; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalArticles/this.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &#8594;</button>
        </div>}
      </div>
      
    )
  }
}

