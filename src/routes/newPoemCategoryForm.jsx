import React, {useState} from 'react';
import { Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const NewPoemCategoryForm = ({addPoemCategory}) => {
    const [category, setCategory] = useState('');
    const poems = [];

    const onSubmit = (e) => {
        e.preventDefault();
            addPoemCategory({category, poems});
            setCategory('');
            navigate('/admin/poems')
    };
    
    const navigate = useNavigate()

    return(
        <div className='card mt-2'>
            <div className='card-header' id='card'>
            <h3>Create New Poem Category</h3>
            <form onSubmit={onSubmit}>
                <Row>
                    <Col>
                        <input type='text' placeholder='Category' className='form-control' onChange={(e) => setCategory(e.target.value)} value = {category} />
                    </Col>
                </Row> 
                <Row>
                    <Col>
                        <button className='btn btn-primary form-control' type='submit'>Create</button>
                    </Col>
                </Row>
            </form>
            <br />
        </div></div>
    )
}