document.addEventListener('DOMContentLoaded', function(){

  var itemClickHandler = function (e) {
    if(!e.target.matches('.catfood__buy, .catfood__check')) {
      var checkedItem = this.classList;
      var disabledItem = checkedItem.contains('catfood__item--disabled');

      if (!disabledItem) {
        checkedItem.toggle('catfood__item--checked');
        checkedItem.remove('catfood__item--checked-hover');
      }
    }
  }

  var itemOverHandler = function (e) {
    if (this.classList.contains('catfood__item--checked')) {
      this.classList.add('catfood__item--checked-hover');
    }
  }

  var clickHandler = function (e) {
    e.preventDefault();
    this.parentNode.parentNode.parentNode.querySelector('.catfood__item').classList.add('catfood__item--selected');
  }

  var items = document.querySelectorAll('.catfood__item');
  var itemsBuy = document.querySelectorAll('.catfood__item .catfood__buy-button');

  items.forEach(function (item) {
    item.addEventListener('click', itemClickHandler);
    item.addEventListener('mouseleave', itemOverHandler);
  });

  itemsBuy.forEach(function (item) {
    item.addEventListener('click', clickHandler);
  });

});
