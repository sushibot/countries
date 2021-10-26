import list_item from "./components/list-item.js";
const fetch_all_countries = () => {
  fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((data) => {
      let first_ten_countries = [];
      const country_list_parent = document.querySelector("#country-list");
      // list_item(data);
      for (let index = 0; index < 10; index++) {
        country_list_parent.append(list_item(data[index]));
      }
    });
};

const search_country = () => {};
const filter_region = () => {};
const view_country_details = () => {};

fetch_all_countries();
