import React, { Component } from "react";
import Jumbotron from "../jumbotron";
import Search from "../search"
import Input from "../input";
import Button from "../button";
import API from "../../utils/api"
import { StoryList, StoryListItem } from "../storyList";


class Home extends Component {
  state = {
    stories: [],
    storySearch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticles(this.state.storySearch)
      .then(res => this.setState({ stories: res.data}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <div className="container">
        <form>
  <div className="form-group">
    <label for="topic">Topic</label>
    <Input name="storySearch" value={this.state.storySearch} onChange={this.handleInputChange} placeholder="Topic" />
  </div>
  <div className="form-group">
    <label for="startYear">Start Year</label>
    <input type="text" className="form-control" id="startYear" placeholder="Start Year" />
  </div>
  <div className="form-group">
    <label for="endYear">End Year</label>
    <input type="text" className="form-control" id="endYear" placeholder="End Year" />
  </div>
  <Button onClick={this.handleFormSubmit} type="success" className="input-lg">Submit</Button>
  <a href="/jumbo">Click Me</a>
</form>
  <StoryList>
                  {this.state.stories.map(story => {
                    return (
                      <StoryListItem
                        title={story.title}
                        date={story.date}
                        url={story.url}
                      />
                    );
                  })}
  </StoryList>
        </div>
      </div>
    );
  }
};

export default Home;