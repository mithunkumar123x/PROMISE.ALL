//   we want to create a post
// last activitytime = the time the post was created

createPost(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            const postTitle = "New Post";
            posts.push({title : postTitle});
            resolve(postTitle)
        },2000)
    
    })
}
       updateLastactivitytime() {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            lastactivitytime = new Date();
            resolve(lastactivitytime);
        })
    })
}


deletePost() {
     return new Promise( (resolve,reject) => {
        setTimeout( () => {
            if(posts.length > 0) {
                posts.pop();
                resolve();
            } else {
                reject("ERROR : POST IS EMPTY ")
            }
        },1000)
     });
}

updateProfilePhoto(){
    return new Promise( () => {
        
       //update lastactivitytime

    })
}

const  user = {
    username: 'mithun',
    lastactivitytime: "8th of Jan"
} 



userUpdatePost() {
    Promise.all([createPost(),updateLastactivitytime()])
    .then( ([createPost,updateLastactivitytimeRes]) =>{
        console.log(updateLastactivitytimeRes);
    })
    .catch(err => console.log(err))
}

userUpdatePost();