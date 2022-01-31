import {
  uniqueNamesGenerator,
  animals,
  names,
  countries,
  adjectives,
} from "unique-names-generator";

let value = "";

const getDict = {
  Animal: animals,
  Adjective: adjectives,
  Name: names,
  Country: countries,
};

const btn = document.querySelector("#submit");
const select = document.querySelector("#select");
const result = document.querySelector("#result");

select.addEventListener("change", (e) => {
  value = e.target.value;
});

const generate = (dict) =>
  uniqueNamesGenerator({
    dictionaries: [dict],
  });

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (value === "") {
    alert("Invalid option");
    return;
  }

  result.innerHTML =
    value === "Country"
      ? generate(getDict[value])
      : generate(getDict[value]) + " " + generate(getDict[value]);
});
