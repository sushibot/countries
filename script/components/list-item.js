const list_item = (country) => {
  console.log(country);
  const li = document.createElement("li");
  li.classList.add("country-list-item");
  li.textContent = country.name;
  return li;
};
export default list_item;
