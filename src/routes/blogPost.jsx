import { Card } from "react-bootstrap";

import '../styles/blogPost.css'

export default function BlogPost( {blogPost}) {
    return(
        <main>
            <img id='card-topper' className='mt-2' src={ blogPost.image } alt='' />
            <Card>
                
                <Card.Header>{ blogPost.fullDate }
                    <Card.Title id='p-wrap'>{ blogPost.title }</Card.Title>
                </Card.Header>

                <Card.Body>
                    <Card.Text id='p-wrap'>
                    { blogPost.content }
                    </Card.Text>
                </Card.Body>
                
            </Card>
        </main>
    )
}