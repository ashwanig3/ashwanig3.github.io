---
layout: post
title:  Javascript Functions:Introduction
---

<style type="text/css">
	img {
		width : 100%;
	}
</style>

![](../assets/media/blog2_cover.png)

Before talking about Function in javascript, You must know about the basic terms of javascript. i.e Input, output, execution, variables, data types, prompt, alert and so on. Suppose, if you have to perform any operation multiple times in a program, you assigned the variable whenever required for the same operation. To avoid this repetition of declaring variables for the same operation, you can make a function and call it, whenever it required. let's know more about function.

## What is Function?
A set of statements that perform a task is said to be a Function, the task can be any calculation or any mathematical operation. You can call the function in a program while needed. The structure of Function looks like,

<img class="function_img" src="../assets/media/Drawing.png">

it has a function keyword, followed by the function name and after that, there is a parameter inside the parenthesis and then curly braces contain the statements. You can call a function by putting parentheses after the function name. So, every expression having parentheses is a function. console.log() is also a function which is predefined in javascript to display the output on console.

<script src="https://gist.github.com/ashwanig3/0e955b21a5228b9d8c9734b8f264ddcc.js"></script>

## Naming Function

Now, talk about the name of the function, Naming functions is extremely useful for debugging purposes. Name of the function should be related to its task of what the function is for. so that the other coder can easily understand the use of the function and he can easily access the code. this is how it should be.

<script src="https://gist.github.com/ashwanig3/8d59cca3b497cd60eb726d99115dde00.js"></script>

<script src="https://gist.github.com/ashwanig3/89c436bb4070c1a45255c61930680896.js"></script>

## Function as values

The most important features of functions are that they can be defined and invoked.  In Javascript, a program is said to be a First class function if their functions are treated like as any other variables, it means, functions can be passed as an argument in other function and can be returned by another function. It can also be stored in the properties of objects or the element of an array. we can easily understand with the given function below.

<script src="https://gist.github.com/ashwanig3/b1939203c837898296e65628152df24f.js"></script>

this function creates a new function object which is assigned in a variable named square.it is just a name which refers to the function object. if we change the name "s" instead of square, it still works the same way. let see:

<script src="https://gist.github.com/ashwanig3/e90f68b00a18de3b4b49cac3b08755d7.js"></script>

## Arrow Function

There are two ways of writing function, i.e Declare function and Expression function(arrow function). Arrow function is similar to the declare function, the only thing which makes the difference between them is their syntax. you can say, it is the shorter form of declare function. It was added in 2015 to make it simple. In arrow function, the function name is declared, assigned with the parameter in parentheses and then there is an arrow( => ) followed by the function body. it looks like:

<script src="https://gist.github.com/ashwanig3/acaf3e65a63b65e2401cdfa613cf5679.js"></script>

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
