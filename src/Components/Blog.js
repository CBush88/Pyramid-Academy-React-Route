import React from 'react'
import blogPic from ".//img/blog.jpg"
import profilePic from ".//img/profile-picture.jpg"

const Blog = () => {
  return (
<body>
    <div id="content">
        <header>
            <h1>Blog</h1>
        </header>
        <h2 class="text-left">Blogging Basics</h2>
        <p>Posted by <strong>Christopher Bush</strong> on Monday, Sep 12<small>th</small> 2022</p>
        <img src={blogPic} alt = "Blog" class="blog-pic"/>
        <p>Officia enim officia laborum est elit ullamco qui. Ex enim ad exercitation dolor dolor qui eiusmod adipisicing id laborum officia dolor aliqua do. Dolore consectetur proident sunt ad consequat nisi reprehenderit tempor commodo dolor. Officia irure consequat ipsum labore culpa eiusmod irure cillum ad ullamco velit.

            Nulla sit Lorem laborum laborum fugiat magna. Id magna qui exercitation aute enim anim voluptate consequat. Sit est do consectetur deserunt ipsum. Consectetur adipisicing enim ullamco enim excepteur dolor velit. Aliqua ad in sit minim fugiat adipisicing et nostrud. Dolore do adipisicing incididunt nulla cillum reprehenderit culpa deserunt.

            Ad commodo laboris ut excepteur reprehenderit ut cillum excepteur proident commodo est ex. Id sunt sit cupidatat cillum occaecat id. Et irure non sit consectetur reprehenderit occaecat. Duis ipsum reprehenderit consequat sunt nisi. Non nostrud cupidatat est minim eu Lorem.

            Quis nisi non dolore fugiat dolore laboris. Reprehenderit occaecat mollit quis magna commodo nisi elit consequat id. Occaecat qui reprehenderit sunt excepteur aliqua reprehenderit minim aliqua ea reprehenderit consequat nulla ullamco. Ut magna quis sint enim aliqua. Nulla voluptate eiusmod voluptate qui exercitation. Ipsum excepteur magna voluptate enim cupidatat et tempor voluptate velit.</p>
                
        <p>Amet nisi ipsum adipisicing esse. Lorem id velit deserunt tempor adipisicing cupidatat minim quis officia eu labore. Dolore ipsum incididunt ullamco excepteur laborum in sit. Esse non cupidatat cupidatat sint sunt irure qui. Velit enim magna amet deserunt elit consequat incididunt ad id excepteur ullamco occaecat sunt. Veniam anim id laborum enim nisi laboris ullamco commodo.

            In dolore minim tempor duis quis cillum. Cillum sint incididunt nulla Lorem ullamco ea voluptate ipsum fugiat quis aute ullamco. Commodo in cillum ullamco anim irure adipisicing do anim nulla. Proident officia excepteur consectetur sunt voluptate eu sunt Lorem quis velit ad. Consectetur ullamco minim incididunt occaecat adipisicing veniam magna incididunt sint fugiat ea irure aliqua sunt. Magna cupidatat sint in laborum sunt et commodo exercitation nostrud ut dolor eu aliqua.

            Excepteur fugiat consectetur consectetur ad. Esse do sunt eu deserunt ullamco deserunt enim. Nisi eu enim laboris exercitation irure et consectetur tempor.</p>
        <h3>More about the author</h3>
        <img src={profilePic} alt="A fictional rendition of what the author might look like" class="profile-pic"/>
        <p>Sint dolore ipsum cillum eu tempor adipisicing. Lorem labore qui reprehenderit cupidatat est aliqua. Ea et reprehenderit commodo eu sit id officia sit velit nulla minim qui eiusmod. Duis nostrud Lorem velit eu occaecat. Ut sunt proident exercitation exercitation officia officia amet cillum occaecat nulla.</p>
    </div>
</body>
  )
}

export default Blog