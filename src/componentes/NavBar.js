import React from "react"

export const NavBar = () => {

    let urlImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (
        <nav>
            <div />
                <div>
                    <img src={urlImg} alt="pokedex imagem" className="navbar-image" />
                </div>
        </nav>
    )
}

