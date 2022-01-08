

// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
// });

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetsContainer.append(newTweet);
// }

// grocery list:
const form = document.querySelector('form');

const inputProduct = document.querySelector('#product')

const inputQuantity = document.querySelector('#qty')

form.addEventListener('submit',function(event){
   event.preventDefault()

   console.log(inputProduct.value)
   console.log(inputQuantity.value)
})

function addProduct (product, quantity ){
    const listLi = document.createElement('li')
    const ulTag = document.querySelector('ul')
    listLi.append(ulTag)
}
