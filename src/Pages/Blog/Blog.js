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
                <h1>What is JWT, and how does it work?</h1>
                <p>Ans. What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).

                </p>
            </div>
            <div className='border card-body rounded-box'>

                <h1>What is the difference between javascript and NodeJS?</h1>
                <p>Ans. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className='border card-body rounded-box'>
                <h1>How does NodeJS handle multiple requests at the same time?</h1>
                <p>Ans.  NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </p>
            </div>
        </div>
    );
};

export default Blog;