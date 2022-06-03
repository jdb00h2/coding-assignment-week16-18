import { Link } from "react-router-dom";

import '../styles/poemCategory.css'

export default function PoemCategory( {category} ) {

    return(
        <main>
            <Link id = 'link' to={'/poems/' + category._id}>{category.category}</Link>
        </main>
    )
}