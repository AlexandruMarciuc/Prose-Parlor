import {
  API_URL,
  API_URL_LIMIT,
  BOOK_EDITION_LENGTH,
  API_URL_FIELDS,
  RESULTS_PER_PAGE,
} from "./config.js";

export const state = {
  book: {},
  search: {
    resultsFound: "",
    query: "",
    results: [],
    validCovers: [],
  },
};

export const loadSearchResults = async function (
  query,
  sortMethod,
  page,
  language
) {
  console.log(
    `${API_URL}${query}${API_URL_FIELDS}${
      sortMethod ? sortMethod : ""
    }${API_URL_LIMIT}${RESULTS_PER_PAGE}&page=${page}${
      language ? `&lang=${language}` : ""
    }`
  );
  try {
    const response = await fetch(
      `${API_URL}${query}${API_URL_FIELDS}${
        sortMethod ? sortMethod : ""
      }${API_URL_LIMIT}${RESULTS_PER_PAGE}&page=${page}${
        language ? `&lang=${language}` : ""
      }`
    );
    if (!response.ok) {
      throw new Error("Network data was not ok.");
    }
    const data = await response.json(); // Convert response to JSON format
    console.log(data);
    state.search.resultsFound = data.numFound;
    state.search.results = data.docs.map((book) => {
      // Access 'docs' array and map over it
      return {
        authorName: book.author_name ? book.author_name.join(", ") : "Unknown",
        title: book.title,
        firstPublishedDate: book.first_publish_year,
        editions: book.edition_count,
        languages: book.language ? book.language.join(", ") : "Unknown",
        cover: book.cover_edition_key,
        coverImage: book.cover_i,
        borrowable: book.ebook_access,
        editionKey: book.edition_key,
        firstSentence: book.first_sentence ? book.first_sentence[0] : "Unknown",
        hasFullText: book.has_fulltext,
      };
    });
    console.log(state.search.results);
    return state.search.results; // Return the results
  } catch (error) {
    console.error("Error:", error);
  }
};

export const validateCovers = async function () {
  // Check if state.search.results is not empty
  if (state.search.results.length === 0) {
    console.error("Search results are empty");
    return;
  }

  try {
    // Define a function to validate covers for a single book
    const validateBookCovers = async (book) => {
      const validKeys = [];
      for (const key of book.editionKey) {
        try {
          const imageUrl = `https://covers.openlibrary.org/b/olid/${key}-L.jpg?default=false`;
          const response = await fetch(imageUrl);
          if (response.ok) {
            validKeys.push(key);
          }
        } catch (error) {
          console.error(
            `Error validating cover for edition key ${key}:`,
            error
          );
        }
        if (validKeys.length === BOOK_EDITION_LENGTH) {
          break;
        }
      }
      return validKeys;
    };

    // Process each book in parallel
    const promises = state.search.results.map(validateBookCovers);
    // Wait for all promises to resolve
    const validCovers = await Promise.all(promises);

    // Update state with valid covers
    state.search.validCovers = validCovers;
    console.log("Valid covers:", validCovers);

    // Return the valid covers
    return validCovers;
  } catch (error) {
    console.error("Error validating covers:", error);
    return null; // Or handle error as appropriate
  }
};
