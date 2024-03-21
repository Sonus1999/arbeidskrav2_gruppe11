import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"


export default function CategoryCard({resources}){
    const {pathname} = useLocation()
    const url = pathname.split("/")[1]
    console.log(url)
    
    


    
    function showCategory() {
        const activeResources = resources.filter(resources => resources.category === url);

        console.log(activeResources);
    }

    showCategory()

    return(
        <section id="contentSection">
                <h2>{url}</h2>
                
            </section>
    )
}