document.addEventListener('DOMContentLoaded', function(){

  var itemClickHandler = function (e) {
      var checkedItem = this.parentNode.classList;
      var disabledItem = checkedItem.contains('product-item--disabled');

      if (!disabledItem) {
        checkedItem.toggle('product-item--checked');
        checkedItem.remove('product-item--checked-hover');
      }
  }

  var itemOverHandler = function (e) {
    if (this.parentNode.classList.contains('product-item--checked')) {
      this.parentNode.classList.add('product-item--checked-hover');
    }
  }

  var clickHandler = function (e) {
    e.preventDefault();
    this.parentNode.parentNode.classList.add('product-item--checked');
  }

  var items = document.querySelectorAll('.product-item .product-item__card');
  var itemsBuy = document.querySelectorAll('.product-item .product-item__buy-button');

  Array.prototype.forEach.call(items, function (item) {
    item.addEventListener('click', itemClickHandler);
    item.addEventListener('mouseleave', itemOverHandler);
  });

  Array.prototype.forEach.call(itemsBuy, function (item) {
    item.addEventListener('click', clickHandler);
  });

});
