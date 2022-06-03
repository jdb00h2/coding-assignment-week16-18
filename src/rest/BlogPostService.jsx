const BLOGPOST_ENDPOINT = 'https://crudcrud.com/api/d62fb174a2164aed9989003ebfc3f162/blog-posts'

export const getBlogPosts = async () => {
    try{
        const response = await fetch(BLOGPOST_ENDPOINT);
        return await response.json();
    } catch(e){
        console.log('Error getting blog posts.', e);
    }
}

export const getBlogPost = async (blogPost) => {
    try{
        const response = await fetch(BLOGPOST_ENDPOINT + '/' + blogPost._id);
        return await response.json();
    } catch(e){
        console.log('Error getting blog post.',e)
    }
}

export const createBlogPost = async (blogPost) => {
    try {
        const response = await fetch (BLOGPOST_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blogPost)
        })
        return await response.json()
    } catch(e) {
        console.log('Error creating blog post.', e);
    }
}

export const updateBlogPost = async (blogPost) => {
    try{
        const {_id, ...noIdBlogPost} = blogPost;
        const response = await fetch(BLOGPOST_ENDPOINT + '/' + blogPost._id,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(noIdBlogPost)
        })
        return response
    } catch(e){
        console.log('Error updating blog post.',e);
    }
}

export const deleteBlogPost = async (blogPost) => {
    try{
        const response = await fetch(BLOGPOST_ENDPOINT + '/' + blogPost._id, {method: 'DELETE'})
        return response
    } catch(e){
        console.log('Error deleting blog post.', e);
    }
}