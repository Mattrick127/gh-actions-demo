import React from "react";

function Nav() {
    const categories = [
        { name: "About", description :"A description of myself and my expertise I've learned in the past year.",},
        { name: "Portfolio", description :"This is a portfolio of my works!",},
        { name: "Contact", description: "This is a page where you can contact me on the daily."},
        { name: "Resume", description: "and This is where I keep my resume! (IF I HAD ONE!)"}
    ];

    const categorySelected = () => {
        console.log("click handled")
    }

    return (
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a href="/">
                <span role="img" aria-label="camera"> 📸</span> Mattrick127's Login Page!
                </a>
            </h2>

            <nav>

                <ul className="flex-row">

                <li className="mx-2">
                    <a href="#about" onClick={() => categorySelected()}>
                    About me
                    </a>
                </li>

                {categories.map((category) => (
                    <li className="mx-1" key={category.name}>
                        <span onClick={categorySelected}>
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