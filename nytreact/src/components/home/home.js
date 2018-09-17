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
    storySearch: "",
    start: "",
    end: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticles(this.state.storySearch, this.state.start, this.state.end)
      .then(res => this.setState({ stories: res.data}))
      .then(console.log(this.state.stories))
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
    <Input name="startYear" value={this.state.start} onChange={this.handleInputChange} placeholder="Coming Soon" disabled/>
  </div>
  <div className="form-group">
    <label for="endYear">End Year</label>
    <Input name="endYear" value={this.state.end} onChange={this.handleInputChange} placeholder="Coming Soon" disabled />
  </div>
  <Button onClick={this.handleFormSubmit} type="success" className="input-lg">Submit</Button>
</form>
  <StoryList>
                  {this.state.stories.map(story => {
                    return (
                      <StoryListItem
                        title={story.headline.main}
                        date={story.pub_date}
                        url={story.web_url}
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