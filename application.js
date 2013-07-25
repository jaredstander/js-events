$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());
  $('.toolbox input').focus();

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    // Get the element, add a click listener...
    document.getElementById("todo").addEventListener("click",function(e) {
    // e.target is the clicked element!
    // Use all caps to refer to clicked elements
    if(e.target && e.target.nodeName == "BUTTON") {
      // var newTodo = buildTodo($('.todo').val());
      $('.todo_list').append(buildTodo($('.todo').val()));
    }

    if(e.target && e.target.nodeName == "A" && e.target.text == "Complete") {
      //alert($(e.target).parents('.todo').children('h2').text());
      completeTodo($(e.target).parents('.todo').children('h2'));
    }

    if(e.target && e.target.nodeName == "A" && e.target.text == "Delete") {
      removeTodo($(e.target).parents('.todo'));
    }
    });
  }

  //Create functions to add, remove and complete todos
  function addTodo(todo) {
    buildTodo(todo);
  }

  function completeTodo(todo) {
    $(todo).css("text-decoration", "line-through");
  }

  function removeTodo(todo) {
    $(todo).remove();
  }

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }

  bindEvents();
});
