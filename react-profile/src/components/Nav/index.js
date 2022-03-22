import React from "react";

function Nav() {
    const categories = [
        {
            name: "",
            description: "",
        },
        { name: "about", description :"A description of myself and my expertise I've learned in the past year.",},
        { name: "portfolio", description :"This is a portfolio of my works!",},
        { name: "contact", description: "This is a page where you can contact me on the daily."},
        { name: "resume", description: "and This is where I keep my resume! (IF I HAD ONE!)"}
    ];
    return (
        <header>
            <h2>
                <a href="/">
                <span role="img" aria-label="camera"> 📸</span> Mattrick127's Login Page!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                    About me
                    </a>
                </li>
                <li>
                    <span>Contact</span>
                </li>
                {categories.map((category) => (
                    <li
                    classname="mx-1"
                    key={category.name}
                    >
                        <span>
                            {category.name}
                        </span>
                    </li>
                ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;