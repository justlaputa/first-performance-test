```javascript
var inventory = {
    '000001': {
        name: 'Banana Slicer',
        price: 2.99
    },
    '000002': {
        name: 'Three Wolves Tea Cozy',
        price: 14.95
    }        
};

function tenPercentOffOf (obj) {
    obj.price = Math.round(0.9 * obj.price * 100) / 100;
    return obj;
}
```
### Questions

```javascript
var bargainBananaSlicer = tenPercentOffOf(inventory['000001']);
```

#### Question 1: After declaring that variable, what is the value of bargainBananaSlicer.price?

The price of `bargainBananaSlicer.price` will be 2.69 (Math.round(0.9 * 2.99 * 100) / 100)

#### Question 2: After declaring that variable, what is the price of the Banana Slicer in the inventory object?

It will be the same as `bargainBananaSlicer.price`, 2.69. As the function `tenPercentOffOf` modifies the original object inside `inventory`.

#### Question 3: Can you suggest ways to improve this code?

I have several ideas to improve this code:

##### add unit test
The bug of this code can be easily detected by unit test, and we can use test to verify our fix, prevent regression.

##### fix the bug by creating a copy of the original object
I choose to use ES2015's `Object.assign`, as it can be used to copy an object's enumerable own properties to another.
(Source is in [object-assign](https://github.com/justlaputa/first-performance-test/tree/object-assign) branch)

##### small improve of variable naming
The argument variable naming of function `tenPercentOffOf` is not so good, using `obj` does not show the applying target of this function, so I modify it to be `inventoryItem`, make it better explain what object's price I want to change

##### to do more about immutable
Assume that we will implement more bargain functions like this one(twentyPercentOff, halfPriceWithBundle, etc), to prevent each time copy object, we can use `immutable.js` to make the original inventory object not changeable. To do this, I initialized the inventory object by using immutable Record constructor, and inside the `tenPercentOffOf`, just set the new price, it will automatically return a new copy of the object.
(Source is in [immutable-js](https://github.com/justlaputa/first-performance-test/tree/immutable-js) branch)
