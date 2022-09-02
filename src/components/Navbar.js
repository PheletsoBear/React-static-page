import logo from "./images/logo.jpg"

export default function (){
    return(
            <div className="Navbar-container">
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
             <h1 className="tagline">ReactFacts</h1>
             <h3 className="side-word">React Course - Project1</h3>
        </nav>
      
        </div>
            
    )
}

