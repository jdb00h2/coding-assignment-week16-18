import { Navbar, Container, Nav, Card } from 'react-bootstrap';
import { NavLink, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { createBlogPost, deleteBlogPost, getBlogPosts } from './rest/BlogPostService';
import { createPoemCategory, deletePoemCategory, getPoemCategories, updatePoemCategory } from './rest/PoemPostService';

import './App.css';
import logo from './logo.svg';

import ProtectedRoute from './routes/protected';
import SignIn from './routes/signIn';
import Admin from './routes/admin';

import BlogList from './routes/blogList';
import AdminBlogList from './routes/adminBlogList';
import { NewBlogPostForm } from './routes/newBlogPostForm';

import PoemsCategoryList from './routes/poemsCategoryList';
import PoemsList from './routes/poemTitlesList';
import AdminPoemsList from './routes/adminPoemsList';
import { NewPoemCategoryForm } from './routes/newPoemCategoryForm';
import Home from './routes/home';
import Poem from './routes/poem';


function App() {
  const [signedIn, setSignedIn] = useState(false);
  const handleSignIn = () => setSignedIn(true);
  const handleSignOut = () => setSignedIn(false);
  

  const [blogPosts, setBlogPosts] = useState( [] );

  const refreshBlogPosts = async () => {
    const freshBlogPosts = await getBlogPosts()
    setBlogPosts(freshBlogPosts)
  }

  useEffect(() => {
      refreshBlogPosts();
  }, [])

  const deletePost = async(blogPost) => {
    await deleteBlogPost(blogPost);
    refreshBlogPosts(); 
  }

  const addBlogPost = async (newBlogPost) => {
    await createBlogPost(newBlogPost);
    refreshBlogPosts();
  }

  const [poemCategory, setPoemCategory] = useState( [] )

  const refreshPoemCategories = async () => {
    const freshPoemCategories = await getPoemCategories()
    setPoemCategory(freshPoemCategories)
  }

  useEffect(() => {
      refreshPoemCategories();
  }, [])

  const deleteCategory = async(poemCategory) => {
    await deletePoemCategory(poemCategory);
    refreshPoemCategories(); 
  }

  const addPoemCategory = async (newPoemCategory) => {
    await createPoemCategory(newPoemCategory);
    refreshPoemCategories();
  }


  const updatedPoemCategory = async(updatedCategory) => {
      await updatePoemCategory(updatedCategory);
      refreshPoemCategories();
  }

  return(
    <div>
      <div>
      <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
        <div className='container-fluid'>
          <Navbar.Brand as={NavLink} to='/'>
            <img src={logo} alt='Stars'/>
            Marina's Notebook
            <img src={logo} alt='Stars'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
              <Nav.Link as={NavLink} to='poems'>Poetry</Nav.Link>
              <Nav.Link as={NavLink} to='blog'>Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to='signIn'>Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Container>
        <Routes>

          <Route element={<ProtectedRoute signedIn={signedIn} />} >
            <Route path='admin/*' element={<Admin poemCategory={poemCategory} deletePoemCategory={deleteCategory} updatedPoemCategory={updatedPoemCategory} handleSignOut={handleSignOut}/>} />
            <Route path='newBlogPostForm' element= {<NewBlogPostForm addBlogPost={addBlogPost} blogPosts={blogPosts} deletePost={deletePost}/>} />
            <Route path='adminBlogList' element= {<AdminBlogList blogPosts={blogPosts} deletePost={deletePost} />} />
            <Route path='adminPoemsList/:categoryID' element= {<AdminPoemsList poemCategory={poemCategory} updatedPoemCategory={updatedPoemCategory} />} />
            <Route path='newPoemCategory' element={<NewPoemCategoryForm addPoemCategory={addPoemCategory}/>} />
          </Route>

          <Route path='/' element={<Home />} />
          <Route path='signIn/*' element={<SignIn handleSignIn={handleSignIn} signedIn={signedIn}/>} />
          
          <Route path='poems' element={<PoemsCategoryList poemCategory={poemCategory}/>} />
          <Route path='/poems/:categoryID' element={<PoemsList poemCategory={poemCategory}/>} />
          <Route path='/poem/:categoryID/:poemID' element={<Poem poemCategory={poemCategory} />} />

          <Route path='blog' element={<BlogList blogPosts={blogPosts}/>} />

          <Route path='*' element={<Card className='mt-2'><h2>404 - Page Not Found</h2></Card>} />

        </Routes>
      </Container>
    </div>
    </div>
  )
}
export default App;