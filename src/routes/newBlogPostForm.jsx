import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import BlogPost from './blogPost';

export const NewBlogPostForm = ({addBlogPost, blogPosts}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const date = new Date();
    const fullDate = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`

    const onSubmit = (e) => {
        e.preventDefault();
            addBlogPost({title, content, image, fullDate});
            setTitle('');
            setContent('');
            setImage('');
    };
    

    const blogElements = blogPosts.map(blogPost => <BlogPost key={blogPost._id} blogPost={blogPost}/>)
    blogElements.reverse();

    return(
        <>
        <div className='card mt-2'>
            <div className='card-header' id='card'>
            <h3>Create New Post</h3>
            <form onSubmit={onSubmit}>
                <Row>
                    <Col>
                        <input type='text' placeholder='Title' className='form-control' onChange={(e) => setTitle(e.target.value)} value = {title} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <textarea type='text' placeholder="What's new?" className='form-control' onChange={(e) => setContent(e.target.value)} value = {content} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input type='text' placeholder='Enter image URL here to add image.' className='form-control' onChange={(e) =>setImage(e.target.value)} value= {image}/>
                    </Col>
                </Row>    
                <Row>
                    <Col>
                        <button className='btn btn-primary form-control' type='submit'>Create</button>
                    </Col>
                </Row>
            </form>
            <br />
            </div>
        </div>
        <div>
            {blogElements}
        </div>
        </>
    )
}