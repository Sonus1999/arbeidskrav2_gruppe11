import { resources } from "../assets/ressurser";
export default function Nav(){

    

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
                        <button className="page">{category}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}