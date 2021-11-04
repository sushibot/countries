const build_country_details_page = ({ country }) => {
  const flag = country?.flags?.svg;
  const name = country?.name;
  const native_name = country?.nativeName;
  const region = country?.region;
  const sub_region = country?.subregion;
  const capital = country?.capital;
  const top_level_domain =
    country?.topLevelDomain?.length > 0 ? country?.topLevelDomain[0] : "-";
  const currencies =
    country?.currencies?.length > 0 ? country?.currencies : "-";
  const languages = country?.languages?.length > 0 ? country?.languages : "-";

  const img_container = document.querySelector("#flag-container");
  const img = document.createElement("img");
  const h4 = document.createElement("h4");
  const list_top = document.querySelector("#list-top");

  img.src = flag;
  img.alt = `Flag of ${name}`;
  img.classList.add("country-flag-image");
  img_container.append(img);
};

const initialize = () => {
  const country = JSON.parse(window.localStorage.getItem("country"));
  build_country_details_page({ country });
};

initialize();
