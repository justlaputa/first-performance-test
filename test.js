var expect = require('chai').expect
var bargain = require('./QuickJSQuestion')

describe('Testing suit for bargain', function() {
  var inventoryItem = null

  beforeEach(function() {
    inventoryItem = {
        name: 'Banana Slicer',
        price: 2.99
    }
  })

  describe('tenPercentOffOf bargain', function() {
    it('should not modify original inventory item object price', function() {
      var bargainItem = bargain.tenPercentOffOf(inventoryItem)

      expect(inventoryItem.price).to.equal(2.99)
    })

    it('should cut the price to 10 percent off', function() {
      var bargainItem = bargain.tenPercentOffOf(inventoryItem)

      expect(bargainItem.price).to.equal(2.69)
    })
  })
})
