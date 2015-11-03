$(document).ready(page_ready);

var on_load_hooks = [];

function page_ready(){

  alert("find me and remove me!!")

  $('.enable_highlight_link').on("click", function(){
    highlight_things();
    alert("now mouse over things")
    return false
  })

  $(on_load_hooks).each(function(i,func){func()});
  
  make_angry()
};

//just an inocent little javascript method that doesn't really do anything
function just_a_method(){
  return 42
};

function highlight_things(){
  var things = [".jeff_for_carlos_main", ".sub_container"]
  $.each(things, function(i,e){       //for each thing 'e'
    $(e).on("mouseover", function(){  //bind an onmouseover action
      $(this).addClass("test");       //which adds the test css class
    })
    $(e).on("mouseout", function(){   //and also bind and onmouseout action
      $(this).removeClass("test");    //which removes the test css class
    })
  })
};

function make_angry(){
  $('.come_here_ya_little_shit').on("mouseover",function(){
    var width = $(window).width() * Math.random()
    var height = $(window).height() * Math.random()
    if( Math.random() > 0.1 ){ //to give a small chance that sometimes it won't move
      $('.come_here_ya_little_shit').animate({top: height, left: width}, 500)
    };
  })
  
  $('.come_here_ya_little_shit').on("click", function(){
    $(this).unbind("mouseover")    
    $('.concrats').html("well done, you clicked it")
    $('.come_here_ya_little_shit').remove()
    setTimeout(function(){
      $('.concrats').animate({height: 0},500).html("")
    },4000)
    return false;
  })
  
  $('.come_here_ya_little_shit').mouseover()

};

