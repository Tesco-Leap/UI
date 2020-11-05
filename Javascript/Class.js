class Polygon { 
    constructor(height, width) { 
       this.height = height; 
       this.width = width; 
    } 

    test() { 
        console.log("The height of the polygon: ", this.height) 
        console.log("The width of the polygon: ",this.width) 
     } 

     set updateHeight(newheight) {
         this.height = newheight
     }

     get getHeight() {
         return this.height;
     }

    static disp() { 
        console.log("Static Function called") 
    } 
 }

//  var Polygon = class Polygon { 
//     constructor(height, width) { 
//        this.height = height; 
//        this.width = width; 
//     } 
//  }


var polyObj = new Polygon(10,20); 
polyObj.test(); 

polyObj.updateHeight = 25;
polyObj.test();

console.log(polyObj.getHeight);

Polygon.disp();

console.log(polyObj instanceof Polygon)
 