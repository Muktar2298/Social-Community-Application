// ----------SettingMenu Toggleer--------//
let settingsMenu = document.querySelector(".settings-menu");
function settingsMenuToggler() {
  settingsMenu.classList.toggle("settings-menu-height");
}

//-------- Dark Mode Toggler ---------//
let darkBtn = document.getElementById("dark-btn");
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
  //---toggle dark & light mode---//
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

// ----Save data for dark &  light mode into user's browsers into local Storage -----//
if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
