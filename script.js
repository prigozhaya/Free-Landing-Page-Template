const langs = document.querySelectorAll(".lang-switch__option");

//here is a variant with delegation, but it's also possible attach a handler to each option itself

document.querySelector(".lang-switch").addEventListener("click", (e) => {
  if (e.target.className === "lang-switch__option") {
    langs.forEach((el) => {
      el.classList.remove("lang-switch__option--selected");
    });

    e.target.classList.add("lang-switch__option--selected");
  }
});
