
        document.getElementById("btn").addEventListener("click", function(){

            var xhr = new XMLHttpRequest();

            xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

            xhr.onload = function(){

                if(xhr.status === 200){

                    var posts = JSON.parse(xhr.responseText);
                    console.log(posts)

                    var output = "";

                    for(var post in posts){

                       output += `
                        <div class='posts'>
                            <ul>
                                <li>Csoport azonosító: ${posts[post].userId}</li>
                                <li>Azonosító: ${posts[post].id}</li>
                                <li>Cím: ${posts[post].title}</li>
                                <li>Szöveg: ${posts[post].body}</li>
                            </ul>
                        </div>
                        `;
                        
                    }
                    document.getElementById("posts").innerHTML = output;
                   
                }
               
                
            }
            xhr.send();
        })

  
