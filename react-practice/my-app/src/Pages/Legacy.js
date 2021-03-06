import React, { Component } from 'react'

export default class Legacy extends Component {
  render() {
    return (
        <section class="legacy">
        <h2 id="legacy" class="sectionText">Cultural impact and legacy</h2>
        <p class="sectionText">
            In The Creation of Spider-Man, comic book writer-editor and historian Paul Kupperberg calls the character's superpowers "nothing too original"; what was original was that outside his secret identity, he was a "nerdy high school student". Going against typical superhero fare, Spider-Man included "heavy doses of soap-opera and elements of melodrama". Kupperberg feels that Lee and Ditko had created something new in the world of comics: "the flawed superhero with everyday problems". This idea spawned a "comics revolution". The insecurity and anxieties in Marvel's early 1960s comic books, such as The Amazing Spider-Man, The Incredible Hulk, The Fantastic Four, and The X-Men ushered in a new type of superhero, very different from the certain and all-powerful superheroes before them, and changed the public's perception of them. Spider-Man has become one of the most recognizable fictional characters in the world, and has been used to sell toys, games, cereal, candy, soap, and many other products.
            <br></br>
            <br></br>
            Spider-Man has become Marvel's flagship character and has often been used as the company mascot. When Marvel became the first comic book company to be listed on the New York Stock Exchange in 1991, The Wall Street Journal announced "Spider-Man is coming to Wall Street"; the event was in turn promoted with an actor in a Spider-Man costume accompanying Stan Lee to the Stock Exchange. Since 1962, hundreds of millions of comics featuring the character have been sold around the world. Spider-Man is the world's most profitable superhero. In 2014, global retail sales of licensed products related to Spider-Man reached approximately $1.3 billion. Comparatively, this amount exceeds the global licensing revenue of Batman, Superman, and the Avengers combined. Spider-Man is also one of the highest-grossing franchise titles being the highest-grossing American comic book superhero est. $25.6 billion worldwide.
        </p>
    </section>
   );
  }

    componentDidMount() {
      document.title = "Legacy";
    }
  }

