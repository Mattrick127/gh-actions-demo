import React from "react";
import coverImage from "../../assets/cover/remi-delmotte-hueco-mundo.jpg"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Hello, my name is Matthew Wilson.</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div className="my-2">
                <p>
                I am currently a student going through UTSA coding boot camp.
                </p>
            </div>
        </section>
    )
}

export default About;