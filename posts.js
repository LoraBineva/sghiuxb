<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forum</title>
    <link rel="stylesheet" href="./help.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital@1&display=swap" rel="stylesheet">
</head>

<body>
    <header>
        <!--NavBar Section-->
        <div class="navbar">
            <nav class="navigation hide" id="navigation">
                <span class="close-icon" id="close-icon" onclick="showIconBar()"><i class="fa fa-close"></i></span>
                <ul class="nav-list">
                    <li class="nav-item"><a href="forums.html">Forums</a></li>
                    <li class="nav-item"><a href="posts.html">Posts</a></li>
                   
                </ul>
            </nav>
            <a class="bar-icon" id="iconBar" onclick="hideIconBar()"><i class="fa fa-bars"></i></a>
            <div class="brand">My Forum</div>
        </div>
        <!--SearchBox Section-->
        <div class="search-box">
            <div>
                <select name="" id="">
                    <option value="Everything">Everything</option>
                    <option value="Titles">Titles</option>
                    <option value="Descriptions">Descriptions</option>
                </select>
                <input type="text" name="q" placeholder="search ...">
                <button><i class="fa fa-search"></i></button>
            </div>
        </div>
    </header>
    <div class="container">
        <!--Navigation-->
        <div class="navigate">
            <span><a href="help.html">MyForum</a> >> <a href="">posts</a></span>
        </div>
        <!--Display posts table-->
        <div class="posts-table">
            <div class="table-head">
                <div class="status">Status</div>
                <div class="subjects">Subjects</div>
                <div class="replies">Replies/Views</div>
                <div class="last-reply">Last Reply</div>
            </div>
            <div class="table-row">
                <div class="status"><i class="fa fa-fire"></i></div>
                <div class="subjects">
                    <a href="">Start coding to develop your creativity!</a>
                    <br>
                    
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    June 5 2023
                    <br>By <b><a href="">User</a></b>
                </div>
            </div>
            <!--starts here-->
            <div class="table-row">
                <div class="status"><i class="fa fa-fire"></i></div>
                <div class="subjects">
                    <a href="">I suggest using the Mind Palace memory technique.</a>
                    <br>
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    June 5 2023
                    <br>By <b><a href="">User</a></b>
                </div>
            </div>

            <div class="table-row">
                <div class="status"><i class="fa fa-fire"></i></div>
                <div class="subjects">
                    <a href="">Learning Python is 1000% worth it. Make it your year's resolution!</a>
                    <br>
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    June 5 2023
                    <br>By <b><a href="">User</a></b>
                </div>
            </div>

            <div class="table-row">
                <div class="status"><i class="fa fa-book"></i></div>
                <div class="subjects">
                    <a href="">Create a calendar to help organization!</a>
                    <br>
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    June 5 2023
                    <br>By <b><a href="">User</a></b>
                </div>
            </div>

            <div class="table-row">
                <div class="status"><i class="fa fa-rocket"></i></div>
                <div class="subjects">
                    <a href="">How to boost your mental health? Take breaks.</a>
                    <br>
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    June 5 2023
                    <br>By <b><a href="">User</a></b>
                </div>
            </div>

            <div class="table-row">
                <div class="status"><i class="fa fa-frown-o"></i></div>
                <div class="subjects">
                    <a href="">Procrastination = more work for future you</a>
                    <br>
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    June 5 2023
                    <br>By <b><a href="">User</a></b>
                </div>
            </div>


            <!--ends here-->
        </div>
        <!--Pagination starts-->
            <div class="pagination">
                pages: <a href="">1</a><a href="">2</a><a href="">3</a>
            </div>
        <!--pagination ends-->
    </div>

    

    <footer>
        <span>&copy;  PBL Project</span>
    </footer>
    <script src="./help.js"></script>
</body>
</html>
