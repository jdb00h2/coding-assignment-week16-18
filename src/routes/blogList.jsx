import { Breadcrumb, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BlogPost from "./blogPost";

export default function BlogList({ blogPosts }) {
    const blogElements = blogPosts.map(blogPost => <BlogPost key={blogPost._id} blogPost={blogPost}/>)
    blogElements.reverse();

    const navigate = useNavigate();
    
    return(
        <div>
            <Card id='card' className="mt-2">
                <Card.Header>
                    <Breadcrumb>
                        <Breadcrumb.Item onClick={() => navigate('/')}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Blog</Breadcrumb.Item>
                    </Breadcrumb>
                    <Card.Title>
                        <h3>Daily(ish) Blog!</h3>    
                    </Card.Title>
                </Card.Header>
            </Card>
            {blogElements}
        </div>
    )
}