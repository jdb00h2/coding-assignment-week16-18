import { Card } from "react-bootstrap";

export default function AdminPoem( {poem, deletePoem} ) {

    return(
        <main className='mt-2 mb-2'>            
            <Card id='card'>
                <Card.Header>
                    <Card.Title> { poem.title} </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text id='p-wrap'>
                    { poem.content }
                    </Card.Text>
                </Card.Body>
                <button className="btn btn-danger form-control" type="button" onClick={(e) =>deletePoem(poem.id)}>Delete Poem</button>
            </Card>
        </main>
    )
}