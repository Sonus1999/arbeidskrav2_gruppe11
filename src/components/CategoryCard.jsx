import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"


export default function CategoryCard({resources}){
    const {pathname} = useLocation()
    const url = pathname.split("/")[1]
    
    
    const activeResources = resources.filter(resources => resources.category === url);

    return(
        <section id="contentSection">
                <h2>{url}</h2>
                <ul>
                    {activeResources?.map((item, index) =>  
                    <li key={index}> 
                        <a href={item.url} target="_blank">
                            {item.title}
                        </a>
                    </li>)}
                </ul>
            </section>
    )
}