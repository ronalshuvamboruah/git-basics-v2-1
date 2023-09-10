// DOM Access


// GetElementById
// const title = document.getElementById("main-heading");
// console.log(title);


// // GetElementByClassName
// var listItems = document.getElementsByClassName("list-items");
// console.log(listItems);

// // GetElementByTagName

// const heading = document.getElementsByTagName("h1");
// console.log(heading);


// // GetElementByName

// const firstItem = document.getElementsByName("first-item");
// console.log(firstItem);

// // QuerySelectorAll

// const container = document.querySelector("div");
// console.log(container);

// const allContainer = document.querySelectorAll("div");
// console.log(allContainer);



//DOM Manipulation

// styling

// var listItems = document.getElementsByClassName("list-items");
// for (let index = 0; index < listItems.length; index++) {
//     console.log(listItems.item(index));
//     listItems.item(index).style.fontSize = '2rem';
// }


// Creating elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// li.textContent = "Don"
// // li.className = 'list-items';
// li.classList.add('list-items')
// console.log(li.classList.contains('list-items'))
// ul.append(li);


// listItems = document.getElementsByClassName("list-items");
// console.log(listItems);

// const firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerHTML);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerText);
// li.innerText = 'X-Men';

// li.setAttribute('id', 'main-heading')
// setTimeout(function () {
//     li.removeAttribute('id');
// }, 5000)


// const mainHeading = document.querySelector('#main-heading');
// console.log(mainHeading.getAttribute('id'));





// DOM Traversal

// let body = document.querySelector('body');
// console.log("This is the parent element");
// console.log(body.parentElement);
// console.log("This is the parent node");
// console.log(body.parentNode);

// body.childNodes.forEach(element => console.log(element),"ll")
// console.log();

// body.getCh