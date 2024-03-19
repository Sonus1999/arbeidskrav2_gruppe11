import CategoryCard from "./CategoryCard"
import Nav from "./Nav"

import {resources} from '../assets/ressurser'

export default function Layout(){

    


    return(
        <main>
            <Nav resources={resources}/>
            <section id="contentSection">
                
            </section>
        </main>
    )
}