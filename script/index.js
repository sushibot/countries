import list_item from "./components/list-item.js";
const fetch_all_countries = () => {
  fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((data) => {
      const country_list_parent = document.querySelector("#country-list");

      for (let index = 0; index < 20; index++) {
        country_list_parent.append(list_item(data[index]));
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const search_country = () => {};
const filter_region = () => {};
const view_country_details = () => {};

fetch_all_countries();
