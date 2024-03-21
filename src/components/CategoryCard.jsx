import { useLocation } from "react-router-dom"

export default function CategoryCard(){
    const {pathname} = useLocation()
    const url = pathname.split("/")[2]
    console.log(url)

    return(
        <section id="contentSection">
                
            </section>
    )
}