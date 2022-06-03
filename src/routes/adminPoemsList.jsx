import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AdminPoem from "./adminPoem";
import { NewPoemForm } from "./newPoemForm";


export default function AdminPoemsList( {poemCategory, updatedPoemCategory} ) {
    const params = useParams();
    const categoryID = params.categoryID;

    const current = poemCategory.find(poemCategory => poemCategory._id === categoryID)


    const addNewPoem = (poem) => {
        updatedPoemCategory({...current, poems: [...current.poems, poem]})
    };

    const deletePoem = (poemID) => {
        const updatedCategory = {
            ...current,
            poems: current.poems.filter((x) => x.id !== poemID)
        };
        updatedPoemCategory(updatedCategory)
    }

    
    return (
        <main>
            <Card id='card' className="mt-2">
                <Card.Header>
                    <h2>{current.category}</h2>
                </Card.Header>
            </Card>
            <NewPoemForm addNewPoem={addNewPoem}/>
            {current.poems.map(poem => <AdminPoem key={poem.id} poem = {poem} deletePoem={deletePoem}/>)}
        </main>
    ) 
}