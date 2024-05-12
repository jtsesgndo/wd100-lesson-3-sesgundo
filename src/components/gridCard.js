const GridCard = (props) => {
    return(
        <>                 
        <div className="col-md-4">
                <div className="card">
                    <img src={props.img} className="card-img-top"alt=""></img>
                    <div className="card-body">
                         <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <b><p>₱{props.price}</p></b>
                        <a href="#" className="btn btn-warning">ORDER NOW!</a>
                    </div>

                </div>
            </div>
                 
        </>
    );
}


export default GridCard;