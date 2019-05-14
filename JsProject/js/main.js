// // var data = document.getElementById("userdata");
// // data.innerHTML = "<div class='myclass'>good job</div>"
// // function demo(){
// //     alert("called")
// // }


// // console.log(data);
// // console.log(data.baseURI);
// // demo();

// var data ='today\'s data';
// alert(data)
// var newDiv = document.createElement("div");
 
// // Creating a text node 
// var newContent = document.createTextNode("Hi, how are you doing?");
// var newContent2 = document.createTextNode("Hi, how are you doing?");
 
// // Adding the text node to the newly created div
// newDiv.appendChild(newContent);
 
// // Adding the newly created element and its content into the DOM 
// var currentDiv = document.getElementById("userdata"); 
// var currentDiv2 = document.getElementById("userdataPopup"); 

// currentDiv.appendChild(newContent);
// currentDiv2.appendChild(newDiv.appendChild(newContent2));
// // document.body.appendChild(newDiv);


// function highlightInput(elm){
//     console.log(elm)
//     elm.style.background = "yellow";
// }   

// var person = {"name": "Clark", "surname": "Kent", "age": "36"};
//      var data = JSON.parse();
//     // Loop through all the properties in the object  
//     for(var item in person) {  
//         document.write("<p>" + item + " = " + person.item + "</p>"); 
//         console.log(item);
//     }
// alert(document.head.className); 

var actualWidth = window.innerWidth;
var columnWidth = actualWidth - 300;

var ele = document.getElementById("overlay")
ele.style.width = columnWidth+"px";