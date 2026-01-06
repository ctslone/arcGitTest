// expandable tree view for nav list
document.addEventListener("DOMContentLoaded", function(){
  $(".navigation .caret").each(function(i, ele){
    $(this).click(function(e){
      $(this).parent().find("> ul").toggleClass("active")
      $(this).toggleClass("active")
    })
  })
  // expand the tree
  $(".navigation a.active")
    .parents("ul.navigation-list-child-list")
    .each(function(){
      $(this).addClass("active")}
    )
  
  // initialize default caret active class
  $("a.navigation-list-link.active").parents(".navigation-list-item").each(function(i, ele){
    if ($(this).find("ul.navigation-list-child-list.active").length)
      $(this).children(".caret").addClass("active")
  })

  $("a.navigation-list-link.active").siblings(".caret, .navigation-list-child-list").addClass("active")

  // prevent reloading the page from clicking the same item twice
  $(".navigation-list-link.active").click(function(e){
    e.preventDefault();
  })

  // make sure active item in left sidebar is always in browser view
  var adjustNavHeight = function () {
    // offset should exist first
    if ($(".navigation-list-link.active").offset() && $(".navigation-list-link.active").offset().top >= $('.main-nav').outerHeight()) {
      $('.main-nav')[0].scrollTop = $(".navigation-list-link.active").offset().top - 70
    }
  }

  adjustNavHeight()
  $(".navigation-list-toggle").click(function(e){
    setTimeout(adjustNavHeight, 0)
  })
  // toggle icon
  $(".navigation-list-toggle").click(function(e){
    $(".navigation-list-toggle-icon").toggleClass("icon-menu")
    $(".navigation-list-toggle-icon").toggleClass("icon-cancel")
  })
  
  // add link icons to each heading tags when hovering
  $('#page-content').find('h1, h2, h3, h4, h5, h6').each(function(index, ele) {
    if ($(ele).attr('id')) {
      var $a = $('<a href="#" class="header-link">&#xe806;</a>')
      $a.attr('href', '#' + $(ele).attr('id'))
      $(ele).append($a)
    }
  })
});