import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function AdminBlog() {
    const navigate = useNavigate();
    
    return(
        <>
        <main>
            <Row>
                <Col></Col>
                <Col>
                    <Card id='card'>
                        <Card.Title>
                            <h4 className="mt-2">Edit Blog</h4>
                        </Card.Title>
                        <button className="btn btn-outline-success form-control" onClick={() => navigate('/newBlogPostForm')}>Add Post</button>
                        <button className="btn btn-outline-danger form-control mt-2" onClick={() => navigate('/adminBlogList')}>Delete Post</button>
                    </Card> 
               </Col>
            </Row>
            
        </main>
        </>  
    )
}