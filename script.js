function getUrlVars() {
  const vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = decodeURIComponent(value);
  });
  return vars;
}

function hello() {
  const name = getUrlVars()["name"];
  if (name !== undefined && name !== '') {
    document.getElementById("pudim").textContent = name
  } else {
    document.getElementById("pudim").textContent = 'Alguém'
  }
}