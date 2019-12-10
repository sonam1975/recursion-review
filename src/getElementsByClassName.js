// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  //Html
  //start with an empty array
  //if we find the clasname then we use recusrsive function over the
  var result = [];
  if (this !== window) {
    var childNodes = this.childNodes;
  } else {
    var childNodes = this.document.childNodes;
  }
  for (var i = 0; i < childNodes.length; i++) {
    console.log(childNodes[i])
    if (childNodes[i].classList && childNodes[i].classList.indexOf(className) ) {
      result.push(childNodes[i]);
    } else {

      childNodes[i].getElementsByClassName(className);
    }
  }


  return result;

};
