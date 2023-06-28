console.log('person1: shows ticket');
console.log('person2: shows ticket');

/*const promiseWifeBringingTickets = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve('ticket');
    },3000)
})

const getPopcorn = promiseWifeBringingTickets.then((t)=>{
    console.log('Wife brings ticket')
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject)=> resolve(`${t} popcorn`))
})

const getButter = getPopcorn.then((t)=>{
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: i want butter for my popcorn');
    return new Promise((resolve,reject)=> resolve(`${t} butter`))
})

const getColdDrinks = getButter.then((t)=>console.log(`${t} cold drinks`));
*/

const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve('ticket');
        },3000)
    })

    const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));
    const getButter = new Promise((resolve,reject) => resolve('butter'));
    const getColdDrinks = new Promise((resolve,reject) => resolve('Cold drinks'));

    let ticket = await promiseWifeBringingTickets;

    console.log(`Wife brings ${ticket}`)
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i want butter for my popcorn');

    let butter = await getButter;

    console.log(`husband: i got some ${butter} for popcorn`);
    console.log('Anything else darling ? ');
    console.log('wife : lets get some cold drinks');

    let coldrinks = await getColdDrinks;

    console.log(`husband: i got the ${coldrinks}`)
    console.log('husband: Anything else ?');
    console.log('wife: lets go we are getting late ');
    console.log('husband: Finally ..*grins* ..thank you for the reminder darling ');
    
    return ticket ;
}

preMovie().then((m)=> console.log(`Person3: shows ${m}`));


console.log('person4: shows ticket');
console.log('person5: shows ticket');