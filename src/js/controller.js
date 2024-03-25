import * as model from "./model.js";
import resultsView from "./views/resultsView.js"; // Note: Capitalized class name convention
import searchView from "./views/searchView.js";
import * as sortView from "./views/sortView.js";
import { RESULTS_PER_PAGE } from "./config.js";
import * as paginationView from "./views/paginationView.js";

let sortMethod;
let language;
let query;
let currentPage;

const renderResultsAndCovers = async function () {
  try {
    // Validate covers after loading search results
    const validCovers = await model.validateCovers();
    // Render the results
    resultsView.render(model.state.search.results, validCovers);
  } catch (error) {
    console.error("Error rendering results and covers:", error);
  }
};

const displayInitialResults = async function () {
  try {
    // Get the search query from the searchView
    query = searchView.getQuery();
    // Load search results from the model
    sortView.showSpinner();
    await model.loadSearchResults(query);
    // Display the total results found in the sort panel
    sortView.changeSortingMethodContent(model.state.search.resultsFound);
    await renderResultsAndCovers();
    sortView.hideSpinner();
  } catch (err) {
    console.log(err);
  }
};

const filterSortResults = async function () {
  try {
    // Load search results from the model
    sortView.showSpinner();
    await model.loadSearchResults(query, sortMethod, currentPage, language);
    await renderResultsAndCovers();
    sortView.hideSpinner();
  } catch (err) {
    console.log(err);
  }
};

const sortCallBack = function (selectedUrl) {
  sortMethod = selectedUrl;
  filterSortResults();
};

const sortLanguageCallBack = function (choosenLanguage) {
  language = choosenLanguage;
  filterSortResults();
};

const controlPagination = async function (page) {
  try {
    sortView.showSpinner();
    // Load search results from the model
    await model.loadSearchResults(query, sortMethod, page);
    await renderResultsAndCovers();
    sortView.hideSpinner();
  } catch (err) {
    console.log(err);
  }
};

const updatePage = function () {
  // Calculate the new page
  paginationView.calculatePage(
    event,
    model.state.search.resultsFound,
    RESULTS_PER_PAGE
  );

  currentPage = paginationView.pageCounter;
  console.log("Current Page:", currentPage);
  // Display results for the new page
  controlPagination(currentPage);
};

const init = function () {
  searchView.addHandlerSearch(displayInitialResults);
  sortView.sortListen(sortCallBack);
  sortView.sortLanguage(sortLanguageCallBack);
  paginationView.paginationControl(updatePage);
};
init();
