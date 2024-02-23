const Patient = [];

//!mapping staff section
const staffs = [
  {
    id: 1,
    name: "Alexy Rosetta",
    email: "alexyrosetta@gmail.com",
    image: "./assets/doctor-1.png",
  },
  {
    id: 2,
    name: "Maria July",
    email: "mariajuly@gmail.com",
    image: "./assets/doctor-2.png",
  },
];
const staff_card = document.querySelector(".staff");
staffs.forEach((staff) => {
  let staff_card_html = `<div class="staff_card card">
    <div class="inner">
      <div class="img">
        <img src=${staff.image} alt="image" />
      </div>
      <div class="staff-info">
        <h4 class="doc">${staff.name}</h4>
        <span>${staff.email}</span>
      </div>
    </div>
  </div>`;
  staff_card.innerHTML += staff_card_html;
});
//!

//!mapping service section
const services = [
  {
    id: 1,
    name: "Oral hygiene",
    image: "./assets/oral.png",
    duration: "1 hour",
    price: 50.0,
  },
  {
    id: 2,
    name: "Implants",
    image: "./assets/implant.png",
    duration: "1 hour 30 minutes",
    price: 120.0,
  },
];

const service_card = document.querySelector(".service");
services.forEach((service) => {
  let service_inner_html = `
    <div class=" service-card card">
    <div class="left">
      <div class="img">
        <img src=${service.image} alt="image" />
      </div>
      <div class="service-info">
        <h4>${service.name}</h4>
        <span>${service.duration}</span>
      </div>
    </div>
    <div class="price">$${service.price}</div>
  </div>
    `;
  service_card.innerHTML += service_inner_html;
});
//!

//!next to service & back to staff on click functionality
let select_staff_click = false;
const selected_staffs = document.querySelectorAll(".staff_card");
const next_service_btn = document.querySelector(".staff-next");
const next_service_toast = document.querySelector(".staff-toast");
const staff_section = document.querySelector(".staff-section");
const service_section = document.querySelector(".service-section");
const back_to_staff = document.querySelector(".service-back");
//nav style
const first_nav_num = document.querySelector(".nav-num-1");
const first_nav_name = document.querySelector(".nav-1");
const second_nav_num = document.querySelector(".nav-num-2");
const second_nav_name = document.querySelector(".nav-2");
const third_nav_num = document.querySelector(".nav-num-3");
const third_nav_name = document.querySelector(".nav-3");
const fourth_nav_num = document.querySelector(".nav-num-4");
const fourth_nav_name = document.querySelector(".nav-4");
selected_staffs.forEach((selected_staff) => {
  selected_staff.addEventListener("click", () => {
    selected_staffs.forEach((selected_staff) => {
      selected_staff.style.borderWidth = "0";
    });

    var staffInfoDiv = selected_staff.querySelector(".inner .staff-info");
    var doc = staffInfoDiv.querySelector("h4.doc");
    Patient.staff_name = doc.innerHTML;
    selected_staff.style.borderWidth = "1px";
    selected_staff.style.borderStyle = "solid";
    selected_staff.style.borderColor = "green";
    select_staff_click = true;
    back_to_staff.addEventListener("click", () => {
      staff_section.style.display = "block";
      service_section.style.display = "none";
      first_nav_num.style.backgroundColor = "#7948ce";
      first_nav_num.innerHTML = "✔";
      first_nav_name.style.color = "white";
      second_nav_num.style.backgroundColor = "green";
      second_nav_name.style.color = "green";
      second_nav_num.style.cursor = "pointer";
      second_nav_name.style.cursor = "pointer";
      selected_staff.style.borderWidth = "1px";
      selected_staff.style.borderStyle = "solid";
      selected_staff.style.borderColor = "green";
    });
  });
});

next_service_btn.addEventListener("click", () => {
  if (select_staff_click) {
    staff_section.style.display = "none";
    service_section.style.display = "block";
    first_nav_num.style.backgroundColor = "#7948ce";
    first_nav_num.innerHTML = "✔";
    first_nav_name.style.color = "white";
    second_nav_num.style.backgroundColor = "green";
    second_nav_name.style.color = "green";
    second_nav_num.style.cursor = "pointer";
    second_nav_name.style.cursor = "pointer";
  } else {
    next_service_toast.style.display = "block";
    setTimeout(() => {
      next_service_toast.style.display = "block";
    }, 300);
  }
});

//!

//! next to date & back to service functionality
let select_service_click = false;
const selected_services = document.querySelectorAll(".service-card");
const next_date_btn = document.querySelector(".service-next");
const next_date_toast = document.querySelector(".service-toast");
const date_section = document.querySelector(".date-section");
const back_to_service = document.querySelector(".date-back");

selected_services.forEach((selected_service) => {
  selected_service.addEventListener("click", () => {
    selected_services.forEach((selected_service) => {
      selected_service.style.borderWidth = "0";
    });

    selected_service.style.borderWidth = "1px";
    selected_service.style.borderStyle = "solid";
    selected_service.style.borderColor = "green";
    select_service_click = true;

    var staffInfoDiv = selected_service.querySelector(".left .service-info");
    var service_patient = staffInfoDiv.querySelector("h4");
    Patient.service_name = service_patient.innerHTML;

    back_to_service.addEventListener("click", () => {
      service_section.style.display = "block";
      date_section.style.display = "none";
      second_nav_num.style.backgroundColor = "#7948ce";
      second_nav_num.innerHTML = "✔";
      third_nav_name.style.color = "white";
      third_nav_num.style.backgroundColor = "green";
      third_nav_name.style.color = "green";
      third_nav_num.style.cursor = "pointer";
      third_nav_name.style.cursor = "pointer";
      selected_service.style.borderWidth = "1px";
      selected_service.style.borderStyle = "solid";
      selected_service.style.borderColor = "green";
    });
  });
});

next_date_btn.addEventListener("click", () => {
  if (select_service_click) {
    service_section.style.display = "none";
    date_section.style.display = "block";
    second_nav_num.style.backgroundColor = "#7948ce";
    second_nav_num.innerHTML = "✔";
    second_nav_name.style.color = "white";
    third_nav_num.style.backgroundColor = "green";
    third_nav_name.style.color = "green";
    third_nav_num.style.cursor = "pointer";
    third_nav_name.style.cursor = "pointer";
  } else {
    next_date_toast.style.display = "block";
    setTimeout(() => {
      next_date_toast.style.display = "block";
    }, 300);
  }
});

//!

//! next to date & back to service functionality
let select_date_click = false;
// const selected_services = document.querySelectorAll(".service-card");
const next_confirm_btn = document.querySelector(".confirm-next");
const next_confirm_toast = document.querySelector(".date-toast");
const confirm_section = document.querySelector(".confirm-section");
const back_to_date = document.querySelector(".confirm-back");

selected_services.forEach((selected_service) => {
  selected_service.addEventListener("click", () => {
    selected_services.forEach((selected_service) => {
      selected_service.style.borderWidth = "0";
    });

    selected_service.style.borderWidth = "1px";
    selected_service.style.borderStyle = "solid";
    selected_service.style.borderColor = "green";
    select_service_click = true;
    back_to_date.addEventListener("click", () => {
      date_section.style.display = "block";
      confirm_section.style.display = "none";
      third_nav_num.style.backgroundColor = "#7948ce";
      third_nav_num.innerHTML = "✔";
      fourth_nav_name.style.color = "white";
      fourth_nav_num.style.backgroundColor = "green";
      fourth_nav_name.style.color = "green";
      fourth_nav_num.style.cursor = "pointer";
      fourth_nav_name.style.cursor = "pointer";
      selected_service.style.borderWidth = "1px";
      selected_service.style.borderStyle = "solid";
      selected_service.style.borderColor = "green";
    });
  });
});

next_confirm_btn.addEventListener("click", () => {
  if (select_date_click) {
    date_section.style.display = "none";
    confirm_section.style.display = "block";
    third_nav_num.style.backgroundColor = "#7948ce";
    third_nav_num.innerHTML = "✔";
    third_nav_name.style.color = "white";
    fourth_nav_num.style.backgroundColor = "green";
    fourth_nav_name.style.color = "green";
    fourth_nav_num.style.cursor = "pointer";
    fourth_nav_name.style.cursor = "pointer";
  } else {
    next_confirm_toast.style.display = "block";
    setTimeout(() => {
      next_confirm_toast.style.display = "block";
    }, 300);
  }
});

//!

console.log(Patient);
