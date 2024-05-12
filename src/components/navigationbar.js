const NavigationBar = (props) => {
    return (
        <>
        <nav className="nav-body bg-warning container-fluid p-3">
            <h1>MyTacos</h1>
            <ul className="navMenu">
                <li>Home</li>
                <li>Menu</li>
                <li>AboutUs</li>
                <li>Gallery</li>
                <li>Catering</li>
                <li>Find Us</li>


            </ul>
        </nav>


        <img src={props.img} className="w-100" alt="" />
  
        </>
      );
}

export default NavigationBar;