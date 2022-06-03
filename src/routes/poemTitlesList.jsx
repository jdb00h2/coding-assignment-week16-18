import { Breadcrumb, Card, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom"
import PoemTitles from "./poemTitles";

export default function PoemsList( {poemCategory} ) {

    const params = useParams();
    const categoryID = params.categoryID;
    const navigate = useNavigate();

    const current = poemCategory.find(poemCategory => poemCategory._id === categoryID)

    if(current === undefined) {
        return(
            <Card className="mt-2">
            <Spinner animation="border" variant="dark" id='spinner'/></Card>
        )}
        else{
        return(  
        <main className="mt-2">
        
            <Card id='card'>
                <Card.Header>
                <Breadcrumb>
                    <Breadcrumb.Item onClick={() => navigate('/')}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => navigate('/poems')}>
                        Poetry
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{current.category}</Breadcrumb.Item>
                </Breadcrumb>
                    <Card.Title>
                        <h3 id='card-title'>{current.category} Poems</h3>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    {current.poems.map(poem => <PoemTitles key={poem.id} poem = {poem} categoryID={categoryID}/>)}    
                </Card.Body>
            </Card>
            
        </main>
    )}
}