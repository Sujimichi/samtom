$(document).ready(page_ready);

var on_load_hooks = [];

function page_ready(){

  alert("find me and remove me!!")
  //ok so this file can contain javascript and it will be loaded on every page of your site.
  //this "page_ready" method will be called once right after all the html has loaded on the page.
  //So use this method as the starting point for setting up the page or triggering things to happen automatically

  //If one page has a load of specific javascript then create a separate .js file just for it and include that file on the page
  //you can then hook into this page_ready method by adding functions to on_load_hooks. ie:
  //  on_load_hooks.push(function(){ ....do something....}) 
  //each function will then be called by this;  
  $(on_load_hooks).each(function(i,func){func()});
  
  
};


//just an inocent little javascript method that doesn't really do anything
function just_a_method(){
  return 42
};

//NOTE!!!
//Now, here's an important question. Are you a slick modern coder, or are you stuffed up the north end of a south-bound camel?
//old school javascript coders use a Java style syntax and camel case everything. You are an enlightend Ruby coder who has
//realised that CamelCased variables are harder to read than nice under_scored variables.  So do you name that method justAMethod or just_a_method?
//In all javascript that I'll show you, I will be using the underscore style, deal_with_it


