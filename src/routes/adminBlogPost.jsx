import { Button, Card } from "react-bootstrap";

export default function AdminBlogPost( {blogPost, deletePost}) {
    return(
        <main className='mt-2 mb-4'>
            <img id='card-topper' src={ blogPost.image } alt=''/>
            <Card>
                
                <Card.Header>{ blogPost.fullDate }
                    <Card.Title id='p-wrap'>{ blogPost.title }</Card.Title>
                </Card.Header>
                <Card.Body>
                    
                    <Card.Text id='p-wrap'>
                    { blogPost.content }
                    </Card.Text>
                </Card.Body>
                <Card.Footer id='p-wrap'>
                    <Button variant="danger" className="form-control" onClick={(e) => deletePost(blogPost)}>Delete</Button>
                </Card.Footer>
                </Card>
        </main>
    )
}