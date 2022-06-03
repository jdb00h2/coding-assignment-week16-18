import PoemCategory from "./poemCategory";

import '../styles/poemCategory.css'
import { Breadcrumb, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function PoemsCategoryList( {poemCategory}) {

    const navigate = useNavigate();

    return(
        <main>
            <Card id='card' className="mt-2">
                <Card.Header>
                    <Breadcrumb>
                        <Breadcrumb.Item onClick={() => navigate('/')}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Poetry</Breadcrumb.Item>
                    </Breadcrumb>
                    <Card.Title>
                        <h3>Topics</h3>    
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    {poemCategory.map(category => <PoemCategory key={category._id} category={category}/>)}    
                </Card.Body>
                <Card.Footer>
                    <cite>All original poetry &copy; Marina Bush</cite>
                </Card.Footer>
            </Card>
            
        </main>
    )
}