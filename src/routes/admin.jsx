import {Card, Col, Row } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";

import '../styles/admin.css'
import AdminBlog from "./adminBlog";
import AdminPoems from "./adminPoems";

export default function Admin( {addBlogPost, poemCategory, updatedPoemCategory, deletePoemCategory, handleSignOut} ) {

    const navigate = useNavigate();
    
    return(
        <>
        <main className="mt-2">
            <Card id='card'>
                <Card.Header id='buttons'>
                <h2>Admin Functions</h2> 
                <button  className="btn btn-info" onClick={handleSignOut}>Sign Out</button>
               
            </Card.Header>
            <Row id = 'buttons' className="my-2">
                <Col>
                    <button className="btn btn-outline-primary" onClick={() => navigate('/admin/poems')}>POEMS</button>
                </Col>
                <Col>
                    <button className="btn btn-outline-primary" onClick={() => navigate('/admin/blog')}>BLOG</button>
                </Col>
            </Row>
            <Card.Footer>
            </Card.Footer>
            </Card>
        </main>

        <Routes>
            <Route path='/poems/*' element={<AdminPoems poemCategory={poemCategory} updatedPoemCategory={updatedPoemCategory} deletePoemCategory={deletePoemCategory}/>} />
            <Route path='/blog/*' element={<AdminBlog addBlogPost={addBlogPost}/>} />  
        </Routes>
        </>
    )
}