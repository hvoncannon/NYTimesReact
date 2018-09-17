import React from "react";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const StoryListItem = props => (
  <li className="list-group-item">
          <h3>{props.title}</h3>
          <p>Date: {props.date}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.url}>
            Go to Story!
          </a>
  </li>
);