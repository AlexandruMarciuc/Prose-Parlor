export const previous = document.querySelector(".previous");
export const next = document.querySelector(".next");
export let pageCounter = 1;

export const paginationControl = function (callback) {
  next.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event.target);
    callback(event); // Pass the event object to the callback
  });

  previous.addEventListener("click", function (event) {
    event.preventDefault();
    callback(event); // Pass the event object to the callback
  });
};

export const calculatePage = function (event, numFound, RESULTS_PER_PAGE) {
  const target = event.target; // Get the target element of the event
  console.log(event.target);
  const numPages = Math.ceil(Number(numFound) / RESULTS_PER_PAGE);

  if (target.classList.contains("next")) {
    if (pageCounter < numPages) {
      console.log(numPages);
      console.log(pageCounter);
      pageCounter++;
    }
  } else if (target.classList.contains("previous")) {
    if (pageCounter > 1) {
      pageCounter--;
      console.log(pageCounter);
    }
  }
};
