document.addEventListener('DOMContentLoaded', function(){

  if (!Element.prototype.matches) {
      Element.prototype.matches =
          Element.prototype.matchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector ||
          Element.prototype.webkitMatchesSelector ||
          function(s) {
              var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                  i = matches.length;
              while (--i >= 0 && matches.item(i) !== this) {}
              return i > -1;
          };
  }

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

  Array.prototype.forEach.call(items, function (item) {
    item.addEventListener('click', itemClickHandler);
    item.addEventListener('mouseleave', itemOverHandler);
  });

  Array.prototype.forEach.call(itemsBuy, function (item) {
    item.addEventListener('click', clickHandler);
  });

});
