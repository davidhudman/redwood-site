// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import BlogLayout from 'src/layouts/BlogLayout'
import LandListingsLayout from 'src/layouts/LandListingsLayout'
import PostsLayout from 'src/layouts/PostsLayout'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="login">
        <Set wrap={BlogLayout}>
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
          <Route path="/land-listings/new" page={LandListingNewLandListingPage} name="newLandListing" />
          <Route path="/land-listings/{id:Int}/edit" page={LandListingEditLandListingPage} name="editLandListing" />
          <Route path="/land-listings/{id:Int}" page={LandListingLandListingPage} name="landListing" />
          <Route path="/land-listings" page={LandListingLandListingsPage} name="landListings" />
        </Set>
      </Private>
      <Set wrap={BlogLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/articles/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
