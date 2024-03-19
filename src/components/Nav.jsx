import { useState, useEffect } from "react";
import { resources } from "../assets/ressurser";
import { Link } from "react-router-dom";
export default function Nav(){

    const [active, setActive] = useState()

    useEffect(()=>{
        console.log(active)
    }, [active])
    

    function getUniqueCategories(resources) {
        const uniqueCategories = new Set();
        resources.forEach((resource) => {
            uniqueCategories.add(resource.category);
        });
        return Array.from(uniqueCategories);
    }
    
    const uniqueCategories = getUniqueCategories(resources);
    console.log(uniqueCategories);

    return(
        <nav>
            <ul>
                {uniqueCategories.map((category) => (
                    <li key={category}>
                        <Link to={"/produkter/"+category.replaceAll(" ", "-")} className={active === category ? "active" : null}
                            onClick={()=> setActive(category)}
                        >{category}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}