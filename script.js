function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}
var name = getUrlVars()["name"];
console.log(name)


var h1 = document.getElementById("pudim")
// .textContent = name;

console.log(h1)