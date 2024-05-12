import img1 from "./../img/Como Plate.jpg";
import img2 from "./../img/Taquitos  Flautas.jpeg";
import img3 from "./../img/Shrimp Plate.jpg";
import img4 from "./../img/Flour Soft Taco.jpg";
import img5 from "./../img/Torta.jpg";
import img6 from "./../img/Fish Tacos.jpg";


import GridCard from "./gridCard";
const BodyContent = () => {
    return(

        <>
        <div>
            <h1 className ="text-warning text-center p-4">OUR MENU</h1>
        </div>
            <div className="container-fluid bg-light py-5">
                <div className="container-content">
                    <div className="row body-cardContent">
                        <GridCard img={img1} title={"Como Plate"} price={"999"} text={"Flour tortilla warmed on a griddle, mozzarella cheese, filling (meat) of your choice, onion & cilantro, folded over to be eaten by hand."}>

                        </GridCard>

                        <GridCard img={img2} title={"Taquitos / Flautas"} price={"999"} text={"taquitos dorados or flautas: corn tortilla rolled tightly around a filling (Potato, Bean, Chicken, Shredded Beef) served with lettuce, pico de gallo, and queso fresco. Add Sour Cream and Guacamole."}></GridCard>

                        <GridCard img={img3} title={"Shrimp Plate"} price={"999"} text={"taquitos dorados or flautas: corn tortilla rolled tightly around a filling (Potato, Bean, Chicken, Shredded Beef) served with lettuce, pico de gallo, and queso fresco. Add Sour Cream and Guacamole."}></GridCard>

                        <GridCard img={img4} title={"Flour Soft Taco"} price={"999"} text={"Choice of Protein • Onion & Cilantro • Salsa • Choice of Toppings"}></GridCard>

                        <GridCard img={img5} title={"Torta"} price={"999"} text={"Choice of Protein • Onion & Cilantro • Salsa • Choice of Toppings"}></GridCard>

                        <GridCard img={img6} title={"Fish Tacos"} price={"999"} text={"Choice of Protein • Onion & Cilantro • Salsa • Choice of Toppings"}></GridCard>


                    </div>
                </div>
            </div>
        </>
    );
}

export default BodyContent;