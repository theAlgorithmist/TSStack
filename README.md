# Typescript Math Toolkit Stack

This is the alpha release of the Typescript Math Toolkit Stack.  As I have mentioned in other projects, the TSMT Data Structures library is intended to provided a necessary set of structures to support algorithms in the toolkit and corresponding demos.  I am placing the structures one-at-a-time into the public domain for purposes of additional testing and API feedback.

A stack is a pretty simple structure to code, so you won't find a lot to this other than the TSMT Stack is templatized and supports both FIFO and LIFO access to stack elements via pop().

As an aside, this is the last repository that I will use Jasmine as the test framework.  It seems most devs are familiar with Mocha/Chai, which is what you will see for future repositories.


Author:  Jim Armstrong - [The Algorithmist]

@algorithmist

theAlgorithmist [at] gmail [dot] com

Typescript: 2.0.0

Version: 1.0.0


## Installation

Installation involves all the usual suspects

  - npm and gulp installed globally
  - Clone the repository
  - npm install
  - get coffee (this is the most important step)


### Building and Running the unit tests

1. gulp compile

2. gulp serve

The test suite is in Jasmine (but this is the last one).  The stack is in the _src_ folder. 


### Using the stack

A stack may be created directly from an existing array of the appropriate type or elements may be pushed one-at-a-time onto the stack.


```
let stack: TSMT$Stack<number> = new TSMT$Stack<number>();
let a:Array<number> = [1, 2, 3, 4, 5, 6];
stack.fromArray(a);
```

or

```
let stack: TSMT$Stack<number> = new TSMT$Stack<number>();

 stack.push(1);
 stack.push(2);
 stack.push(3);
```

use the _access_ mutator to change between FIFO and LIFO for accessing successive stack items via _pop_.  The next element to be removed may be examined without removal via _peek_.

The stack may be cleared or reversed, and a method exists to return a copy of the stack as an array of items of appropriate type. 

Pretty much all the usual suspects, blah, blah.  Refer to the specs for additional usage examples.


License
----

Apache 2.0

**Free Software? Yeah, Homey plays that**

[//]: # (kudos http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[The Algorithmist]: <https://www.linkedin.com/in/jimarmstrong>
