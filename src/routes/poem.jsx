import { Breadcrumb, Card, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function Poem( {poemCategory} ) {

    const params = useParams();
    const categoryID = params.categoryID;
    const poemID = params.poemID;
    const navigate = useNavigate();

    const currentCategory = poemCategory.find(poemCategory => poemCategory._id === categoryID)
    
    if(currentCategory === undefined) {
        return(
            <Card className="mt-2">
            <Spinner animation="border" variant="dark" id='spinner'/></Card>
        )
    }
    
    const currentPoem = currentCategory.poems.find(poems => poems.id === parseInt(poemID))
        
    return(
        <main className='mt-2'>                
            <Card id='card'>
                <Card.Header>
                    <Breadcrumb>
                        <Breadcrumb.Item onClick={() => navigate('/')}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => navigate('/poems')}>
                            Poetry
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => navigate('/poems/' + categoryID)}>
                            {currentCategory.category}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>{currentPoem.title}</Breadcrumb.Item>
                    </Breadcrumb>
                </Card.Header>
            </Card>
            <Card id='card' className="mt-4">
                <Card.Header>
                    <Card.Title> { currentPoem.title} </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text id='p-wrap'>
                    { currentPoem.content }
                    </Card.Text>
                </Card.Body>
            </Card>
        </main>
    )
        
}