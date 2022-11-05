async function renderPosts() {
  const input = document.getElementById("input");
  const div = document.getElementById("information");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  input.addEventListener("change", function () {
    div.innerHTML =
      "<div><b>User Id:</b></div>" +
      data[input.value]["userId"] +
      "<div><b>Id:</b></div> " +
      data[input.value]["id"] +
      "<div><b>Title:</b></div>" +
      data[input.value]["title"] +
      "<div><b>Body:</b></div>" +
      data[input.value]["body"];
  });
}
try {
  renderPosts();
} catch (e) {
  logger(e.massage);
}

function validation() {
  if (input.value > 100) {
    input.value = 100;
  } else if (input.value < 0) {
    input.value = 0;
  }
}
