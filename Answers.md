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

// INSTRUCTIONS
//
// Please refer to the following Javascript variable declaration. When submitting your
// application, please answer the following three questions at the top of your cover
// letter, before any salutations or headings.

```javascript
var bargainBananaSlicer = tenPercentOffOf(inventory['000001']);
```

#### Question 1: After declaring that variable, what is the value of bargainBananaSlicer.price?

The price of `bargainBananaSlicer.price` will be 2.69 (Math.round(0.9 * 2.99 * 100) / 100)

#### Question 2: After declaring that variable, what is the price of the Banana Slicer in the inventory object?

It will be the same as `bargainBananaSlicer.price`, 2.69. As the function `tenPercentOffOf` modifies the original object inside `inventory`.

#### Question 3: Can you suggest ways to improve this code?
