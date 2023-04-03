<h1>E-FLOWER-SHOP BLOG-APP</h1>

<h3>This application is a blog application developed with react.js, redux, as an online flower sales app. </h3>

<h3> Users can see and read all blog posts in the system.</h3>

<h3>And only users with admin authority can login to the admin panel, delete their own blog posts, edit them or create a new blog post.</h3>

<h3>DEPENDENCIES: </h3>
<ul>
    <li>json server</li>
    <li>axios</li>
    <li>react-router-dom</li>
    <li>redux,</li>
    <li> react-redux</li>
    <li>react-bootstrap</li>
    <li>font awesome</li>
    <li>module.css </li>
    <li>used react-simple-wysiwyg as text-editor</li>
</ul>

<h3>MAIN RULES:</h3>

<p>There are 3 roles in the project:</p>

<ul>
    <li>Logged in user: visits the site and reads blog posts.</li>
    <li>Blogger role: user with this role can log into the admin panel.
                    - he has CRUD authority on his own blog posts.
                    - he has no authority over the categories.</li>
    <li>Admin role: user with this role has CRUD authority on all blog posts.
                      Also he has CRUD authority over the categories in the system.</li>
</ul> 

<h2>Project preview:</h2>

![](intro.gif)

<h2>Login part:</h2>

![](login_about.gif)
