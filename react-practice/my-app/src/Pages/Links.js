import React, { Component } from 'react'

export default class Links extends Component {
  render() {
    return (
        <section class="links">
    <h2 id="links" class="sectionText">Links</h2>
    <div class="links-container">
    <ul>
        <li><a href="https://www.marvel.com/characters/spider-man-peter-parker" target="_blank">Spider-man's official website</a></li>
        <li><a href="https://marvel.fandom.com/wiki/Peter_Parker_(Earth-616)" target="_blank">Peter Parker on Marvel Database</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Spider-Man" target="_blank">Spider-man on Wikipedia</a></li>
    </ul>
</div>
</section>

);
}

  componentDidMount() {
    document.title = "Links";
  }
}
