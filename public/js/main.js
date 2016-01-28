'use strict'
$(document).ready(init);

function init(){
  $('#addItem').click(storeItemToDB);
  $('ul').on('click', '#deleteBtn', deleteItem);
}

function storeItemToDB(){
  var name = $('#name').val();
  var price = $('#price').val();
  var description = $('#description').val();
  var itemObj = {
    itemName: name,
    price: price,
    description: description
  };
  $.ajax(
    {
      type: 'POST',
      url: '/items',
      data: itemObj,
      success: function(resp){
        var $name = $('<p>').text(name);
        var $price = $('<p>').text(price);
        var $description = $('<p>').text(description);
        var $button = $('<button>').text("del");
        var $li = $('<li>').append($name, $price, $description, $button);
        $('ul').append($li);
        console.log(resp);
      }
    }
  );
}

function deleteItem(e){
  console.log('jkghvjlh',e.target);
  // debugger;
  var $item = $(e.target).parent();
  var itemPath = "/items/" + $item.data("id");
  $.ajax({
    type:'Delete',
    url: itemPath
  })
  .success(function(){
    $item.remove();
  })
  .fail(function(err){
    if(err) return console.error(err);
  })
}
