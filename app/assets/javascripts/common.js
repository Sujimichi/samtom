$(document).ready(page_ready);

var on_load_hooks = [];

function page_ready(){

  alert("find me and remove me!!")
  //ok so this file can contain javascript and it will be loaded on every page of your site.
  //this "page_ready" method will be called once right after all the html has loaded on the page.
  //So use this method as the starting point for setting up the page or triggering things to happen automatically
  

  //This is an example of something being setup with unobtrusive javascript
  //There is a link in the html called "enable_highlight_link", which this binds a click action to.
  $('.enable_highlight_link').on("click", function(){
    highlight_things();
    alert("now mouse over things")
    return false
  })

  //If one page has a load of specific javascript then create a separate .js file just for it and include that file on the page
  //you can then hook into this page_ready method by adding functions to on_load_hooks. ie:
  //  on_load_hooks.push(function(){ ....do something....}) 
  //each function will then be called by this;  
  $(on_load_hooks).each(function(i,func){func()});
  
  
  make_angry()
  
};


//just an inocent little javascript method that doesn't really do anything
function just_a_method(){
  return 42
};

//NOTE!!!
//Now, here's an important question. Are you a slick modern coder, or are you stuffed up the north end of a south-bound camel?
//old school javascript coders use a Java style syntax and camel case everything. You are an enlightend Ruby coder who has
//realised that CamelCased variables are harder to read than nice under_scored variables.  So... do you name that method justAMethod or just_a_method?  
//It's a matter of taste, but I think it makes sense from a readability point of view and when you're switching back and forth between ruby.
//In all javascript that I'll show you, I will be using the underscore style! deal_with_it




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
      //I could have written the above line like: $(this).animate({top: height, left: width}, 500)
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

