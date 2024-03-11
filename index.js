const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postListEl = document.getElementById("post-list")

clearPosts();
renderPosts(posts);

function clearPosts(){
    postListEl.innerHTML=""
}

function renderPosts(postList){
    for (let i = 0; i<postList.length; i++) {
        let currentPost = postList[i];
        appendPost(currentPost);
    }
}

function appendPost(post) {
    
    let postName = post.name
    let postUsername = post.username
    let postLocation = post.location
    let postAvatar = post.avatar
    let postImg = post.post
    let postComment = post.comment
    let postLikeCount = post.likes
    
    let newPostSection = document.createElement("section")
    newPostSection.setAttribute("class", "post")

//--------------------------------------------------------------------------------------------   
//  RENDER HEADER SECTION
//--------------------------------------------------------------------------------------------   
    
    let postHeaderSection = document.createElement("section")
    postHeaderSection.setAttribute("class", "post-header")
    
    let avatar = document.createElement("img")
    avatar.setAttribute("class", "avatar")
    avatar.setAttribute("src", postAvatar)
    
    let postHeaderContainer = document.createElement("div")
    let postHeaderNameContainer = document.createElement("div")
    let postHeaderNameSpan = document.createElement("span")
    let postHeaderLocationSpan = document.createElement("span")
    
    postHeaderNameSpan.setAttribute("class", "name")
    postHeaderLocationSpan.setAttribute("class", "location")
    
    postHeaderNameSpan.innerText = postName
    postHeaderLocationSpan.innerText = postLocation
    
    postHeaderNameContainer.appendChild(postHeaderNameSpan)
    postHeaderContainer.appendChild(postHeaderNameContainer)
    postHeaderContainer.appendChild(postHeaderLocationSpan)
    postHeaderSection.appendChild(avatar)
    postHeaderSection.appendChild(postHeaderContainer)
    
    newPostSection.appendChild(postHeaderSection)   
    
    
//--------------------------------------------------------------------------------------------   
//  RENDER IMAGE SECTION
//--------------------------------------------------------------------------------------------   
    
    let postImageSection = document.createElement("section")
    let postImageEl = document.createElement("img")
    postImageEl.setAttribute("class", "img")
    postImageEl.setAttribute("src",postImg)

    postImageEl.addEventListener("dblclick", function(){
        incrementLike()
    })
    
    postImageSection.appendChild(postImageEl)
    
    newPostSection.appendChild(postImageSection)
    
//--------------------------------------------------------------------------------------------   
//  RENDER INTERACTION SECTION
//--------------------------------------------------------------------------------------------   

    let postInteractionSection = document.createElement("section")
    postInteractionSection.setAttribute("class", "post-interaction")
    
    let postInteractionContainer = document.createElement("div")
    postInteractionSection.setAttribute("class", "interaction-container")
    
    
    let likeIcon = document.createElement("img")
    let commentIcon = document.createElement("img")
    let dmIcon = document.createElement("img")
    
    likeIcon.setAttribute("class", "img")
    commentIcon.setAttribute("class", "img")
    dmIcon.setAttribute("class", "img")
    
    likeIcon.setAttribute("src","images/icon-heart.png")
    commentIcon.setAttribute("src","images/icon-comment.png")
    dmIcon.setAttribute("src","images/icon-dm.png")
    
    let likeCountEl = document.createElement("p")
    likeCountEl.setAttribute("class", "bold")
    likeCountEl.innerText = `${postLikeCount} likes`
    
    let userCommentParaEl = document.createElement("p")
    let userCommentSpan = document.createElement("span")
    userCommentSpan.setAttribute("class", "bold")
    userCommentSpan.innerText = postUsername
    userCommentParaEl.appendChild(userCommentSpan)
    userCommentParaEl.innerHTML+=` ${postComment}`
    
    likeIcon.addEventListener("click", function(){
        incrementLike()
    })
    
    postInteractionContainer.appendChild(likeIcon)
    postInteractionContainer.appendChild(commentIcon)
    postInteractionContainer.appendChild(dmIcon)
    postInteractionContainer.appendChild(likeCountEl)
    postInteractionContainer.appendChild(userCommentParaEl)
    
    postInteractionSection.appendChild(postInteractionContainer)
        
    newPostSection.appendChild(postInteractionSection)    
        
    postListEl.appendChild(newPostSection)
    
    function incrementLike() {
        postLikeCount+=1
        likeCountEl.innerText = `${postLikeCount} likes`
    }
}

