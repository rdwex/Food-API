// ajax
// api = share for data from backend to frontend
// xhr.open('GET',) : GET", "POST", "PUT", "DELETE"
// XMLHttpRequest methods: setRequestHeader(), send(), and abort()
// 'GET' method the only one that shows, anything else doesn't
// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

var xhr = new XMLHttpRequest();

function getRecipes(query) {
  xhr.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${query}`);

  xhr.send();

  xhr.addEventListener("readystatechange", function () {
    // console.log(xhr.readyState);
    if (xhr.readyState == 4) {
      // // console.log(JSON.parse(xhr.responseText).recipes);
      var data = JSON.parse(xhr.responseText).recipes;
      display(data);
      // darkMode();
    }
  });
}

function display(data) {
  cartona = ``;

  for (var i = 0; i < data.length; i++) {
    cartona += `
          <div class="col-md-4 px-4 text-center">
          <div class="item">
          <div class="image">
          <img
              src="${data[i].image_url}"
              height = "250"
              class="w-100"
              alt=""
            />
          </div>
          <h1>${data[i].title}</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <a class="btn btn-info" target="_blank" href="${data[i].source_url}">Source</a>
        </div>
        </div>

  `;
  }

  document.getElementById("gallery").innerHTML = cartona;
}
getRecipes("carrot");

var select = document.getElementById("select");

select.addEventListener("change", function (e) {
  getRecipes(e.target.value);
});

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

