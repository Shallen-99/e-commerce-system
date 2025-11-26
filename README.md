Working on this e-commerce system helped me learn a lot about TypeScript and how to use object-oriented programming. I created a Product class that held things like the product’s name,
price, and category. I also used different files to organize my code, like one for taxes, one for discounts, and one for talking to the API. Using TypeScript made things easier because
it warned me when I made mistakes (even though sometimes there was no mistake it just couldn’t wait for me to finish my function), especially with the wrong types or missing properties.
One challenge I ran into was working with asynchronous code. At first, I didn’t really understand how async and await worked, since I missed class the day we went over it and had to read
the documentation on my own. Once I began to understand that I had to “wait” for the data to come back before trying to use it things started making more sense. Another problem I had was
getting the project to compile into the dist folder(still feel like I messed this up but gotta keep moving forward). I know my file names and paths needed to match perfectly, and even small
mistakes stopped the whole thing from working but it’s extremely hard to try and find something you don’t know exists. I fixed this by double-checking all my imports and making sure my 
tsconfig.json was set up correctly.For error handling, I created a custom AppError class and a function that prints different messages depending on what kind of error happens. This made
it easier to understand what went wrong instead of just guessing.Overall, this project helped me understand TypeScript better and taught me how to organize my code, fix mistakes, and
work with real API data.
