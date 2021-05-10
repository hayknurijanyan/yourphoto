import React from "react";
import "./Ideas.css";
import "./@Shared.css";

const Ideas = () => {
  return (
    <section id="ideas">
      <header>
        <h1 className="section-title">
          Discover new ways to display your photo prints
        </h1>
      </header>
      <article className="ideas-articles">
        <article className="ideas-article">
          <figure className="ideas-img1"></figure>
          <figcaption>
            <h2>In the spotlight</h2>
            <p>
              This cute display works beautifully with all of our Prints, but it
              looks even better when you opt for Retro Prints. All you’ll need
              is your chosen digital prints, a length of string, mini pegs, and,
              to add a little spotlight to your best moments, some string
              lights.
            </p>
          </figcaption>
        </article>
        <article className="ideas-article">
          <figure className="ideas-img2"></figure>
          <figcaption>
            <h2>Quick and easy</h2>
            <p>
              Short on time but looking for a chic way to display your new
              prints? Here’s an idea: use a bulldog clip to create a unique
              photo holder. Simply stand the bulldog clip flat on a surface,
              pull the two metal arms shut so they’re touching, and pop your
              print between the arms. For a more luxurious look, try using gold
              or rose gold bulldog clips.
            </p>
          </figcaption>
        </article>
        <article className="ideas-article">
          <figure className="ideas-img3"></figure>
          <figcaption>
            <h2>Can’t go wrong with a classic</h2>
            <p>
              Whether you opt for the Framed Print or you choose to frame your
              prints at home, this is the easiest, and most classic, way of
              displaying your favourite snaps. Plus, to make your print really
              stand out, choose a frame that offsets the colours of the print so
              it really pops.
            </p>
          </figcaption>
        </article>
      </article>
    </section>
  );
};

export default Ideas;
