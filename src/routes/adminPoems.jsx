import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AdminPoemCategory from "./adminPoemCategory";
import '../styles/poem.css'

export default function AdminPoems( {poemCategory, updatedPoemCategory, deletePoemCategory}) {
    const navigate = useNavigate();

    return(
        <main>
            <Row>
                <Col>
                    <Card id='card'>
                        <Card.Title>
                            <h4 className="mt-3">Category List</h4>
                        </Card.Title>
                        <button className="btn btn-outline-success form-control" onClick={() => navigate('/newPoemCategory')}>Add Category</button>
                        {poemCategory.map(category => <AdminPoemCategory key={category._id} category={category} updatedPoemCategory={updatedPoemCategory} deletePoemCategory={deletePoemCategory}/>)}
                    </Card>
                </Col>
                <Col></Col>
            </Row>
            
        </main>
    )
}