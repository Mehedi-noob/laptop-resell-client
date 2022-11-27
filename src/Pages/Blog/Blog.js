import React from 'react';

const Blog = () => {
    return (
        <div className='blog-questions grid grid-cols-1 gap-5'>
            <h1>Questions and Answers (Q & A)</h1>
            <div className='border card-body rounded-box'>
                <h1>What are the different ways to manage a state in a React application?</h1>
                <p>Ans. We have to set initial state value inside constructor function and set click event handler of the element upon which click, results in changing state. Then pass the function to the click handler and change the state of the component inside the function using setState.</p>
            </div>
            <div className='border card-body rounded-box'>
                <h1>How does prototypical inheritance work?</h1>
                <p>Ans. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.

                </p>
            </div>
            <div className='border card-body rounded-box'>

                <h1>What is a unit test? Why should we write unit tests?</h1>
                <p>Ans. The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='border card-body rounded-box'>
                <h1>React vs. Angular vs. Vue?</h1>
                <p>Ans.  Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                </p>
            </div>
        </div>
    );
};

export default Blog;