import CategoryCard from "./CategoryCard"
import { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";


export default function Layout({resources}){

    const location = useLocation();
    const [active, setActive] = useState(location.pathname.slice(1))
    

    useEffect(()=>{
        setActive(location.pathname.slice(1));
    }, [location])

    // Her er det mulig jeg overkompliserte oppgaven, men jeg valgte å sette kategoriene dynamisk etter hva som finnes i ressurser.js
    function getUniqueCategories(resources) {
        const uniqueCategories = new Set();
        resources.forEach((resource) => {
            uniqueCategories.add(resource.category);
        });
        return Array.from(uniqueCategories);
    }
    
    const uniqueCategories = getUniqueCategories(resources);
    


    return(
        <main>
            <h1>Ressursarkiv</h1>
            <nav>
            <ul>
                {uniqueCategories.map((category) => (
                    <li key={category}>
                        <Link to={"/"+category.replaceAll(" ", "-")} className={active === category ? "active" : null}
                            onClick={()=> setActive(category)}
                        >{category}</Link>
                    </li>
                ))}
            </ul>
        </nav>
            <CategoryCard resources={resources}/>
        </main>
    )
}