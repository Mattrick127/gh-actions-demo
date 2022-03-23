import React from "react";
import coverImage from "../../assets/cover/remi-delmotte-hueco-mundo.jpg"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Hello, my name is Matthew Wilson.
            <br></br>I am currently attending UTSA's coding boot camp.</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    )
}

export default About;