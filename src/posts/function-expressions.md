---
layout: layouts/post.njk
title: I prefer function expressions!
date: 2019-12-16
---

# I prefer function expressions!

**Functions** are an important building block of JavaScript and we define them
by declaration or expression!

## Function declaration

So, one thing to note is that **function declaration** is **hoisted**. 
What this means is that you can still call
a function in this syntax even before defining it.

```javascript

     // call before defining
     Hello();

     // function declaration
     function Hello() {
        console.log(`Hello`);
     }

     // call after defining
     Hello();

```

## Function expression

**Hoisting** doesn't work with function expressions. I love this! This helps enforce a **good
coding practice**. It's handy to declare/define things first before using them. In. addition, this 
allows you to have a good logical flow in your code!

I love using **arrow functions** in this case. 

 ```javascript

     // define the function first
     const Hello = () => {
      console.log(`Hello`);
     };

     // call after defining
     Hello();

 ```

That's it! **_Happy coding_**