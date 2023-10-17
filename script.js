"use strict";

const nav = document.querySelector(".header-nav");
const links = document.querySelectorAll(".header-nav-link");
const contents = document.querySelectorAll(".visibil-content");
const linkContacts = document.querySelector(".header-nav-link[href=contacts]");
const btnContacts = document.querySelector(".btn-contacts");
const form = document.querySelector(".form");

const changeContent = function (currentLink) {
  const selectedContentId = currentLink.getAttribute("href");

  contents.forEach((content) => content.classList.add("hidden"));

  document.getElementById(`${selectedContentId}`)?.classList.remove("hidden");

  links.forEach((link) => link.classList.remove("active"));

  currentLink.classList.add("active");
};

nav.addEventListener("click", function (e) {
  e.preventDefault();
  const linkTarget = e.target.closest(".header-nav-link");

  if (!linkTarget) return;

  changeContent(linkTarget);
});

btnContacts.addEventListener("click", function (e) {
  e.preventDefault();

  changeContent(linkContacts);
});

// Change Language

const select = document.querySelector(".select");

const allLang = ["ua", "en"];

select.addEventListener("change", function (e) {
  const lang = select.value;

  location.href = window.location.pathname + `#${lang}`;

  location.reload();
});

const changeLanguage = function () {
  const hash = window.location.hash.slice(1);
  // console.log(hash);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + `#en`;
    location.reload();
  }

  select.value = hash;

  document.querySelector("title").innerHTML = lang.title[hash];

  for (const key of Object.keys(lang)) {
    const element = document.querySelector(`.lng-${key}`);

    if (element) {
      console.log(element);
      element.innerHTML = lang[key][hash];
    }
  }
};

changeLanguage();
