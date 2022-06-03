import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {

    return(
        <main className="mt-2">
            <Card id = 'card'>
                <Card.Header>
                    <Card.Title>
                        <h2 id='card-title'>Marina's Notebook</h2>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <p>Welcome to my small corner of the web! </p>
                    <img id='scrabble' src="https://www.insightpublications.com.au/wp-content/uploads/Poetry-Blog-Header_FINAL_7May2018.jpg" alt="poetry blocks"/>
                        
                    <li>Check out some of my recent poems <Link to={'/poems'} >here</Link>.</li>
                    <li>Or you can keep up with my semi-regular musings <Link to={'/blog'}>here</Link>.</li>
                    <p>As always, thanks for stopping by!</p>
                </Card.Body>
                <Card.Footer>
                    <cite>All original poetry &copy; Marina Bush</cite>
                </Card.Footer>
            </Card>
        </main>
    )
}