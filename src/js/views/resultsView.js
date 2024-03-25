class resultsView {
  _parentElement = document.querySelector(".results-ul");
  _data;

  clear() {
    this._parentElement.innerHTML = "";
  }

  render(data, validCovers) {
    this._data = data;
    const markup = this._generateMarkup(validCovers);
    this.clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  // Generate markup for the edition covers
  _generateEditionMarkup(key) {
    return `<a href=""><img src="https://covers.openlibrary.org/b/olid/${key}-S.jpg?default=false" alt="" /></a>`;
  }

  // Generate markup for the li elements
  _generateMarkup(validCovers) {
    return this._data
      .map(
        (element, index) =>
          `<li class="results-ul-item">
            <span class="results-bookcover">
              <a href=""><img src="${
                element.cover
                  ? `https://covers.openlibrary.org/b/olid/${element.cover}-L.jpg`
                  : "./src/images/placeholder.jpg"
              }" alt="" /></a>
            </span>
            <div class="item-info">
              <div class="item-title"><a href="">${element.title}</a></div>
              <div class="item-author">by ${element.authorName}</div>
              <div class="published-date">First published in ${
                element.firstPublishedDate
              }</div>
              <span class="item-editions">
                <span class="editions-info">
                  <a href="">${element.editions} editions</a> in ${
            element.languages.split(" ").length
          } ${
            element.languages.split(" ").length > 1 ? "languages" : "language"
          }
                </span>
              </span>
              <div class="edition-list">
                <span id="result-${index}" class="editions-links">
                  ${validCovers[index]
                    .map((key) => this._generateEditionMarkup(key))
                    .join("")}
                </span>
              </div>
            </div>
            <div class="result-options">
              <a href="https://openlibrary.org/works/OL27448W/The_Lord_of_the_Rings?edition=key%3A/books/${
                element.cover
              }"><button class="borrow">Open Library</button></a>
              <button class="add-bookmarks-button">Add to My Books</button>
            </div>
          </li>`
      )
      .join(""); // Join the array of HTML strings to form a single string
  }
}

export default new resultsView();
