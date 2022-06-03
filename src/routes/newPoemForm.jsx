import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

export const NewPoemForm = ({addNewPoem}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            let id = getRandomInt(1000000000);
            addNewPoem({title, content, id});
            setTitle('');
            setContent('');  
    };
    

    return(
        <div className='card mt-3'>
            <div className='card-header' id='card'>
            <h4>Create New Poem</h4>
            <form onSubmit={onSubmit}>
                <Row>
                    <Col>
                        <input type='text' placeholder='Title' className='form-control' onChange={(e) => setTitle(e.target.value)} value = {title} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <textarea type='text' placeholder="Please enter poem here." className='form-control' onChange={(e) => setContent(e.target.value)} value = {content} />
                    </Col>
                </Row>    
                <Row>
                    <Col>
                        <button className='btn btn-primary form-control' type='submit'>Create</button>
                    </Col>
                </Row>
            </form>
        </div>
        </div>
    )
}