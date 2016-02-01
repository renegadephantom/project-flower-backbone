
//namescape our app
var app = app || {};

app.singleFlower = Backbone.Model.extend({
  defaults : {
    color : "pink", 
    img: "images/placeholder.jpeg"
    
  },
  
  initialize : function() {
    console.log("A model instance named" + this.get("name") + "has been created. It costs " + this.get("price"));
  
  //what is the difference between initialize and on. both are functions?
    this.on('change', function(){
      console.log("something in model has changed");
    });
    
    this.on('change:price', function(){
      console.log("Price for" + this.get("name") + "model just changed to $" + this.get("price") + "dollars");
    });
    
    this.on('change:color',function(){
        console.log("name for" + this.get("name") + "model just changed to" + this.get("name"));
    });
                                             
  }

    
});




