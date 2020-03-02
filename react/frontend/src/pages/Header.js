import React  from 'react';


const Header = () => {
    return(
       <nav>
        <div class="nav-wrapper indigo lightten-2">
          <a href="/" class="brand-logo">Casa do Cógigo</a>
          <ul class="right">
            <li><a href="/Autores">Autores</a></li>
            <li><a href="/Livros">Livros</a></li>
            <li><a href="/Preços">Preços</a></li>
          </ul>
        </div>
      </nav>
    )
}


export default Header;