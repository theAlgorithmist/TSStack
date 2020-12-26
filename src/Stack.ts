/** 
 * Copyright 2016 Jim Armstrong (www.algorithmist.net)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Typescript Math Toolkit: Minimal implementation of a stack of generic items.  Supports FIFO and LIFO insertion/removal.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 * 
 * @version 1.0
 */

 export enum STACK_TYPE 
 {
   'FIFO',
   'LIFO'
 }

 export class TSMT$Stack<T>
 {
   protected _stack: Array<T>;                // The actual stack
   protected _access: number;                 // how data is accessed from the stack, i.e. FIFO or LIFO
   
/**
 * Construct a new Stack of the supplied type
 * 
 * @return Nothing Constructs an array of the supplied data type and sets acccess to FIFO 
 */
  constructor( )
  {
    this._stack  = new Array<T>();
    this._access = STACK_TYPE.FIFO;
  }

  /**
   * Access the length or size of the stack
   * 
   * @return number - stack length
   */
   public get length(): number
   {
     return this._stack.length;
   }

  /**
   * Access the current stack access mode
   * 
   * @return number - STACK_TYPE.FIFO or STACK_TYPE.LIFO
   */
   public get access(): number
   {
     return this._access;
   }

  /**
   * Assign the current stack access mode
   * 
   * @param mode: number - STACK_TYPE.FIFO or STACK_TYPE.LIFO
   * 
   * @teturn Nothing - Assigns the stack access mode to FIFO or LIFO, provided the input is valid
   */
   public set access(mode: number)
   {
     this._access = (mode == STACK_TYPE.FIFO || mode == STACK_TYPE.LIFO) ? mode : this._access;
   }

  /**
   * Initialize the stack from an existing array
   * 
   * @param items: Array<T> Array of stack items
   * 
   * @return Nothing - The internal stack is updated to be a copy of the input array
   */
   public fromArray(items: Array<T>): void
   {
     if (items && items.length && items.length > 0)
       this._stack = items.slice();
   }

 /**
   * Return the current stack as an an array
   * 
   * @return Array<T> - A copy of the current stack; the current stack is not modified.
   */
   public toArray(): Array<T>
   {
     return this._stack.slice();
   }

  /**
   * Add an item to the stack
   *
   * @param item: T Data item of type T
   *
   * @return Nothing - A non-null item is pushed onto the stack - no runtime type guard is currently applied, but this may change in the future
   */
   public push(item: T): void
   {
     if (item)
       this._stack.push(item);
   }

  /**
   * Peek at the next item to be removed from the stack without removing it
   *
   * @return item: T - Direct reference to the next item that will be removed from the stack; take care not to mutate the item.  Returns null for an empty stack.
   */
   public peek(): T
   {
     if (this._stack.length == 0)
       return null;

     switch (this._access)
     {
       case STACK_TYPE.FIFO:
         return this._stack[0];

       case STACK_TYPE.LIFO:
         return this._stack[this._stack.length-1];
     }

     return null;
   }

  /**
   * Pop the next item off the stack
   *
   * @return item: T - Direct reference to the next stack item, based on current access type (FIFO or LIFO), or null for an empty stack.  The item is permanently removed from the stack.
   */
   public pop(): T
   {
     if (this._stack.length == 0)
       return null;

     switch (this._access)
     {
       case STACK_TYPE.FIFO:
         return this._stack.shift();

       case STACK_TYPE.LIFO:
         return this._stack.pop();
     }

     return null;
   }

  /**
   * Reverse the stack
   *
   * @return Nothing There is no action for an empty stack; otherwise, the order of the stack is reversed.  This does not, however, affect future insertions and deletions from the stack.
   */
   public reverse(): void
   {
     if (this._stack.length == 0)
       return;

     this._stack.reverse();
   }

  /**
   * Clear stack
   * 
   * @return Nothing - stack is emptied and is ready for new data.  Access mode remains unchanged.
   */
   public clear(): void
   {
     this._stack.length = 0;
   }
 }
