import React, { Component } from 'react'
import '../App.css';

export default class Bio extends Component {
  render() {
    return (
      
      <section class="bio">
        <h2 id="bio" class="sectionText">Fictional character biography</h2>
        <p class="sectionText">
        Spider-Man was a radical departure from the established conventions of the comic-book superhero: he was a teenage character who was not relegated to sidekick status beside an older, more-experienced hero. In addition to enhanced speed and strength, Parker also possessed a precognitive “spider sense” that alerted him to approaching dangers. Using his inborn scientific talents, Parker synthesized a unique adhesive “web fluid” and built a pair of wrist-mounted web-shooters that enabled him to shape the webbing into various useful forms. He also designed and sewed the web-festooned red-and-blue costume that quickly became Spider-Man’s most visible trademark.
        <br></br>
        However, Marvel publisher Martin Goodman was not initially receptive to the idea of a teen hero taking centre stage, nor did he want to accept Spider-Man’s neuroses, romantic deficiencies, and chronic concerns about money. Goodman also thought that the audience would be repelled by the character’s spider motif. Fortunately, Lee’s instincts prevailed. Spider-Man’s debut in Amazing Fantasy was an immediate and resounding success.
        <br></br>
        <br></br>
        In Forest Hills, Queens, New York City, Midtown High School student Peter Benjamin Parker is a science-whiz orphan living with his Uncle Ben and Aunt May. As depicted in Amazing Fantasy #15 (Aug. 1962), he is bitten by a radioactive spider (erroneously classified as an insect in the panel) at a science exhibit and "acquires the agility and proportionate strength of an arachnid". Along with heightened athletic abilities, Parker gains the ability to adhere to walls and ceilings. Through his native knack for science, he develops a gadget that lets him fire adhesive webbing of his own design through small, wrist-mounted barrels. Initially seeking to capitalize on his new abilities, Parker dons a costume and, as "Spider-Man", becomes a novelty television star. However, "He blithely ignores the chance to stop a fleeing thief, [and] his indifference ironically catches up with him when the same criminal later robs and kills his Uncle Ben." Spider-Man tracks and subdues the killer and learns, in the story's next-to-last caption, "With great power there must also come—great responsibility!". 
        <br></br>
        <br></br>
        Despite his superpowers, Parker struggles to help his widowed aunt pay the rent, is taunted by his peers—particularly football star Flash Thompson—and, as Spider-Man, engenders the editorial wrath of newspaper publisher J. Jonah Jameson. As he battles his enemies for the first time, Parker finds juggling his personal life and costumed adventures difficult. In time, Peter graduates from high school, and enrolls at Empire State University (a fictional institution evoking the real-life Columbia University and New York University), where he meets roommate and best friend Harry Osborn, and girlfriend Gwen Stacy, and Aunt May introduces him to Mary Jane Watson. As Peter deals with Harry's drug problems, and Harry's father is revealed to be Spider-Man's nemesis the Green Goblin, Peter even attempts to give up his costumed identity for a while. Gwen Stacy's father, New York City Police detective captain George Stacy is accidentally killed during a battle between Spider-Man and Doctor Octopus (issue #90, November 1970)
        </p>
      </section>
      
    );
  }

    componentDidMount() {
      document.title = "Biography";
    }
  }
