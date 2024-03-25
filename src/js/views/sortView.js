const topRated = document.querySelector(".top_rated");
const mostEditions = document.querySelector(".most_editions");
const ebooks = document.querySelector(".ebooks");
const wishList = document.querySelector(".whishlist");
const currentlyReading = document.querySelector(".currently_reading");
const newest = document.querySelector(".new");
const old = document.querySelector(".old");
const alreadyRead = document.querySelector(".already_read");
const title = document.querySelector(".currently_reading");
const scans = document.querySelector(".scans");
const decimalClassification = document.querySelector(".DDC");
const decimalClassificationAsc = document.querySelector(".DDC_asc");
const congressClassification = document.querySelector(".LCC");
const congressClassificationAsc = document.querySelector(".LCC_asc");
const sortingMethod = document.querySelector(".sorting-method");
const english = document.querySelector(".eng");
const french = document.querySelector(".fre");
const romanian = document.querySelector(".rom");
const spanish = document.querySelector(".spa");
const german = document.querySelector(".ger");
const russian = document.querySelector(".rus");
const italian = document.querySelector(".ita");

let selectedSortUrl; // Define a variable to store the selected sort URL
let choosenLanguage;

const header = document.querySelector(".header");
const resultsPanelContainer = document.querySelector(
  ".results-panel-container"
);
const footNote = document.querySelector(".Footnote");
const spinner = document.querySelector(".spinner");
export const showSpinner = function () {
  console.log("shown");
  document.body.style.overflow = "hidden"; // Hide body overflow
  header.style.display = "none";
  resultsPanelContainer.style.display = "none";
  footNote.style.display = "none";
  spinner.style.display = "block";
};

export const hideSpinner = async function () {
  console.log("hidden");
  document.body.style.overflow = "auto"; // Restore body overflow
  header.style.display = "flex";
  resultsPanelContainer.style.display = "block";
  footNote.style.display = "block";
  spinner.style.display = "none";
};

//sort by language
export const sortLanguage = function (callback) {
  english.addEventListener("click", function (event) {
    event.preventDefault();
    choosenLanguage = "eng";
    callback(choosenLanguage);
  });
  french.addEventListener("click", function (event) {
    event.preventDefault();
    choosenLanguage = "fre";
    callback(choosenLanguage);
  });
  romanian.addEventListener("click", function (event) {
    event.preventDefault();
    choosenLanguage = "rom";
    callback(choosenLanguage);
  });
  spanish.addEventListener("click", function (event) {
    event.preventDefault();
    choosenLanguage = "spa";
    callback(choosenLanguage);
  });
  german.addEventListener("click", function (event) {
    event.preventDefault();
    choosenLanguage = "ger";
    callback(choosenLanguage);
  });
  russian.addEventListener("click", function (event) {
    event.preventDefault();
    choosenLanguage = "rus";
    callback(choosenLanguage);
  });
  italian.addEventListener("click", function (event) {
    event.preventDefault();
    choosenLanguage = "ita";
    callback(choosenLanguage);
  });
};

// sort by preference
export const sortListen = function (callback) {
  topRated.addEventListener("click", function (event) {
    event.preventDefault();
    selectedSortUrl = event.currentTarget.dataset.url;
    callback(selectedSortUrl);
  });

  mostEditions.addEventListener("click", function (event) {
    event.preventDefault();
    selectedSortUrl = event.currentTarget.dataset.url;
    callback(selectedSortUrl);
  });

  ebooks.addEventListener("click", function (event) {
    event.preventDefault();
    selectedSortUrl = event.currentTarget.dataset.url;
    callback(selectedSortUrl);
  });

  wishList.addEventListener("click", function (event) {
    event.preventDefault();
    selectedSortUrl = event.currentTarget.dataset.url;
    callback(selectedSortUrl);
  });

  currentlyReading.addEventListener("click", function (event) {
    event.preventDefault();
    selectedSortUrl = event.currentTarget.dataset.url;
    callback(selectedSortUrl);
  });

  newest.addEventListener("click", function (event) {
    event.preventDefault();
    selectedSortUrl = event.currentTarget.dataset.url;
    callback(selectedSortUrl);
  });

  old.addEventListener("click", function (event) {
    event.preventDefault();
    selectedSortUrl = event.currentTarget.dataset.url;
    callback(selectedSortUrl);
  });

  alreadyRead.addEventListener("click", function (event) {
    event.preventDefault();
    selectedSortUrl = event.currentTarget.dataset.url;
    callback(selectedSortUrl);
  });

  title.addEventListener("click", function (event) {
    event.preventDefault();
    selectedSortUrl = event.currentTarget.dataset.url;
    callback(selectedSortUrl);
  });

  scans.addEventListener("click", function (event) {
    event.preventDefault();
    selectedSortUrl = event.currentTarget.dataset.url;
    callback(selectedSortUrl);
  });

  decimalClassification.addEventListener("click", function (event) {
    event.preventDefault();
    selectedSortUrl = event.currentTarget.dataset.url;
    callback(selectedSortUrl);
  });

  decimalClassificationAsc.addEventListener("click", function (event) {
    event.preventDefault();
    selectedSortUrl = event.currentTarget.dataset.url;
    callback(selectedSortUrl);
  });

  congressClassification.addEventListener("click", function (event) {
    event.preventDefault();
    selectedSortUrl = event.currentTarget.dataset.url;
    callback(selectedSortUrl);
  });

  congressClassificationAsc.addEventListener("click", function (event) {
    event.preventDefault();
    selectedSortUrl = event.currentTarget.dataset.url;
    callback(selectedSortUrl);
  });
};

export const changeSortingMethodContent = function (data) {
  sortingMethod.textContent = `${data} hits Sorted by:`;
};
