const posts =[];
function createPost(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            posts.push({title:'post created',time:Date.now()});
            posts.push({title:'post1',time:Date.now()})
            resolve();
        },1000)
    })
}

function updateLastUserActivity(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const currentTime = Date.now();
            posts[0].time = currentTime;
            resolve();
        },1000)
    })
}

function deletionPromise(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            posts.pop();
            resolve();
        },1000)
    })
}
Promise.all([createPost(),updateLastUserActivity()])
.then(() => {
    posts.forEach((post) =>{
        console.log(post);
        console.log(post.time);
    })
    return deletionPromise();
})
.then(() => {
    posts.forEach((post) => {
        console.log(post);
    });
});