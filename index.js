//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings


//write your code here

const recipe ={
title: 'Mole',
servings: 2,
ingredients: ['cinnamon', 'cumin', 'cumin']

}

console.log(recipe.title);
console.log('serves:', recipe.servings);
console.log('ingrediens:',
);

for (let ingrediens of recipe.ingredients){
    console.log(ingrediens);
}



//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.



//write your code here

const book = [{title: 'Harry Potter', author:'J.K Rowling',alreadyRead: true},

{title: 'Lord of the Rings', author:'G.R.R Tolkin',alreadyRead: true},

{title: 'life of pi', author:'no clue',alreadyRead: false},
]

for (const item of book){
    console.log(`${item.title} by ${item.author}`);
    if (item.alreadyRead){
        console.log(`You already read "${item.title}" by ${item.author}.`);
    }else {
        console.log(`You need to read it  "${item.title}" by ${item.author}`);
    }
}