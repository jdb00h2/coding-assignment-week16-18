import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PoemTitles( { poem, categoryID }) {

    return(
    <main className="mt-2">
        <Row>
            <Col>
                <Link id='link' to={'/poem/'+ categoryID + '/' + poem.id}>{poem.title}</Link>
            </Col>
        </Row>   
    </main>
    )
}