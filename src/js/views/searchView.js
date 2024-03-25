class searchView {
  _parentElement = document.querySelector(".search-field");
  getQuery() {
    const query = this._parentElement
      .querySelector(".searchField")
      .value.split(" ")
      .join("+");
    this._clear();
    return query;
  }
  _clear() {
    this._parentElement.querySelector(".searchField").value = "";
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new searchView();
