const POEMCATEGORY_ENDPOINT = 'https://crudcrud.com/api/d62fb174a2164aed9989003ebfc3f162/poems'

export const getPoemCategories = async () => {
    try{
        const response = await fetch(POEMCATEGORY_ENDPOINT);
        return await response.json();
    } catch(e){
        console.log('Error getting poem categories.', e);
    }
}

export const getPoemCategory = async (categoryID) => {
    try{
        const response = await fetch(POEMCATEGORY_ENDPOINT + '/' + categoryID);
        return await response.json();
    } catch(e){
        console.log('Error getting poem category.',e)
    }
}

export const createPoemCategory = async (poemCategory) => {
    try {
        const response = await fetch (POEMCATEGORY_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(poemCategory)
        })
        return await response.json()
    } catch(e) {
        console.log('Error creating poem category.', e);
    }
}

export const updatePoemCategory = async (poemCategory) => {
    try{
        const {_id, ...noIdPoemCategory} = poemCategory;
        const response = await fetch(POEMCATEGORY_ENDPOINT + '/' + poemCategory._id,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(noIdPoemCategory)
        })
        return response
    } catch(e){
        console.log('Error updating poem category.',e);
    }
}

export const deletePoemCategory = async (poemCategory) => {
    try{
        const response = await fetch(POEMCATEGORY_ENDPOINT + '/' + poemCategory._id, {method: 'DELETE'})
        return response
    } catch(e){
        console.log('Error deleting poem category.', e);
    }
}