import "./Nav.css"

const Nav = ()=>{
    return (
        <nav>
            <img className="logo" src="./logo.jpg" alt="logo" />
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Experience</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>     
    )
}

export {Nav}