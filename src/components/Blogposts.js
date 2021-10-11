import React from 'react'
import Blogpost from './Blogpost'
import { client } from "../Client";


class Blogposts extends React.Component {
  state = {
    entries: [],
  };

  componentDidMount() {
    client
      .getEntries({ content_type: "blogPost" })
      .then((response) => {
        console.log(response);
        this.setState({
          entries: response.items,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        {this.state.entries.map((entry, index) => (
          <Blogpost entry={entry} key={index} />
        ))}
      </div>
    );
  };
}
export default Blogposts
