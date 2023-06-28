const posts =[];
/*function createPost(){
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

*/

const asyncFunction = async () => {
    const createPost = new Promise((resolve,reject) => {
        setTimeout(() =>{
            posts.push({title:'post created',time:Date.now()});
            posts.push({title:'post1',time:Date.now()})
            resolve();
        },1000);
    })

    const updateLastUserActivity = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const currentTime = Date.now();
            posts[0].time = currentTime;
            resolve();
        },1000)
    })

    const deletionPromise = new Promise((resolve,reject) => {
        setTimeout(()=> {
            posts.pop();
            resolve();
        },1000)
    })

    await Promise.all([createPost,updateLastUserActivity]);

    posts.forEach((post) =>{
        console.log(post);
        console.log(post.time);
    })

    let deletedPost = await deletionPromise;
    posts.forEach((post) => {
        console.log(post);

    })  
}

asyncFunction();