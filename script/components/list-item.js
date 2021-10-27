const list_item = (country) => {
  const li = document.createElement("li");
  const h4 = document.createElement("h4");

  const text_container = document.createElement("section");

  const img = document.createElement("img");
  const img_container = document.createElement("section");

  img.src = country.flags.png;
  img.alt = `${country.name} flag`;
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.borderRadius = "8px 8px 0 0";
  img_container.style.width = "100%";
  img_container.style.height = "180px";
  img_container.append(img);

  const detail_list = country_detail_list(country);
  text_container.classList.add("country-list-item__text-container");
  h4.textContent = country.name;
  text_container.append(h4, detail_list);
  li.classList.add("country-list-item");
  li.append(img_container, text_container);
  return li;
};

const country_detail_list = (country) => {
  const list_parent = document.createElement("ul");
  const list_item = document.createElement("li");
  const label_items = ["Population", "Region", "Capital"];
  list_parent.classList.add("country-detail-list-item-container");
  label_items.forEach((label_item) => {
    country_detail_list_item(country, label_item, list_item);
  });

  list_parent.append(list_item);
  return list_parent;
};

const country_detail_list_item = (country, label_item, list_item) => {
  const label = document.createElement("label");
  const p = document.createElement("p");
  const div = document.createElement("div");
  label.textContent = `${label_item}: `;
  label.style.paddingRight = "0.25rem";
  p.textContent =
    label_item.toLowerCase() == "population"
      ? country[label_item.toLowerCase()]
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : country[label_item.toLowerCase()];
  div.classList.add("country-detail-list-item");
  div.append(label, p);
  list_item.append(div);
  return list_item;
};
export default list_item;
