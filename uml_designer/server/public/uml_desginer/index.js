const basePath = "http://127.0.0.1:3000";

/* button.click(function() {
  if (!button.hasClass("loading")) {
    button.toggleClass("loading").html(spinner);
  } else {
    button.toggleClass("loading").html("Load");
  }
}); */

function toggleClass(element, className) {
  if (element.classList) {
    // Use classList API for modern browsers
    element.classList.toggle(className);
  } else {
    // Use className property for older browsers
    const classes = element.className.split(" ");
    const index = classes.indexOf(className);
    if (index === -1) {
      classes.push(className);
    } else {
      classes.splice(index, 1);
    }
    element.className = classes.join(" ");
  }
}

function generate() {
  const button = document.querySelector(".generate-button");
  const spinner = '<span class="generate-spinner"></span>';
  //openSnackBar("Generation start");
  toggleClass(button, "loading");
  button.innerHTML = spinner;
  button.disabled = true;
  fetch("/generate").then(data => {
    toggleClass(button, "loading");
    button.innerHTML = "Generate";
    button.disabled = false;
    openSnackBar("Generated successfully");
  });
}

function saveUpdates(result) {
  const url = basePath + "/saveuml"; // URL to fetch data from
  const partone = result.xml.split("<odDi:odRootBoard")[0];
  const data = partone.slice(partone.indexOf('<od:odBoard id="Board_debug">'));
  fetch(url, {
    method: "POST",
    body: JSON.stringify({ data: data.toString() }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      openSnackBar("Saved succesfully");
      return response.json();
    })
    .catch(error => {
      openSnackBar("Save fail");
    });
}

function openSnackBar(message) {
  var x = document.getElementById("snackbar");
  x.innerText = message;
  x.className = "show";
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 1500);
}
