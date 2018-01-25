document.addEventListener('DOMContentLoaded', function(){

  var itemClickHandler = function (e) {
      var checkedItem = this.parentNode.classList;
      var disabledItem = checkedItem.contains('catfood__item--disabled');

      if (!disabledItem) {
        checkedItem.toggle('catfood__item--checked');
        checkedItem.remove('catfood__item--checked-hover');
      }
  }

  var itemOverHandler = function (e) {
    if (this.parentNode.classList.contains('catfood__item--checked')) {
      this.parentNode.classList.add('catfood__item--checked-hover');
    }
  }

  var clickHandler = function (e) {
    e.preventDefault();
    this.parentNode.parentNode.classList.add('catfood__item--checked');
  }

  var items = document.querySelectorAll('.catfood__item .catfood__card');
  var itemsBuy = document.querySelectorAll('.catfood__item .catfood__buy-button');

  Array.prototype.forEach.call(items, function (item) {
    item.addEventListener('click', itemClickHandler);
    item.addEventListener('mouseleave', itemOverHandler);
  });

  Array.prototype.forEach.call(itemsBuy, function (item) {
    item.addEventListener('click', clickHandler);
  });

});
