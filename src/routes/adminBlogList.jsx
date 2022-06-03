import AdminBlogPost from "./adminBlogPost";

export default function AdminBlogList({blogPosts, deletePost}) {
    const blogElements = blogPosts.map(blogPost => <AdminBlogPost key={blogPost._id} blogPost={blogPost} deletePost={deletePost}/>)
    blogElements.reverse();
    return(
        <div>
            {blogElements}
        </div>
    )
}