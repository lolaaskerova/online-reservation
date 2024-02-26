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
      second_nav_num.style.cursor = "pointer";
      second_nav_name.style.color = "green";
      second_nav_name.style.cursor = "pointer";
      selected_staff.classList.add("selected-style");
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
      selected_service.classList.add("selected-style");
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

// dinamic calendar and pick date functionality

let currentMonth;
let currentYear;

function generateCalendar(year, month) {
  const nextMonth = document.querySelector(".next");
  const prevMonth = document.querySelector(".prev");

  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  const date = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();

  let row = document.createElement("tr");
  let cell;

  for (let i = 0; i < date.getDay(); i++) {
    cell = document.createElement("td");
    row.appendChild(cell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    cell = document.createElement("td");
    cell.textContent = day;
    row.appendChild(cell);

    if (date.getDay() === 6) {
      tableBody.appendChild(row);
      row = document.createElement("tr");
    }

    date.setDate(date.getDate() + 1);
  }

  if (row.cells.length > 0) {
    while (row.cells.length < 7) {
      cell = document.createElement("td");
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }

  document.getElementById("monthAndYear").textContent = `${getMonthName(
    month
  )} ${year}`;
  currentYear = year;
  currentMonth = month;

  function getMonthName(month) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month - 1];
  }

  prevMonth.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 1) {
      currentMonth = 12;
      currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
  });

  nextMonth.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 12) {
      currentMonth = 1;
      currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
  });
}
const currentDate = new Date();
currentYear = currentDate.getFullYear();
currentMonth = currentDate.getMonth() + 1;
generateCalendar(currentYear, currentMonth);

// set hours

const times = document.querySelector(".times");
const oralHygieneTimes = [
  {
    start_time: "9:00",
    end_time: "10:00",
  },
  {
    start_time: "11:00",
    end_time: "12:00",
  },
];

const implantTimes = [
  {
    start_time: "9:00",
    end_time: "10:30",
  },
  {
    start_time: "11:00",
    end_time: "12:30",
  },
];

const today = new Date();
const selected_day = document.querySelector(".selected-date");
const allDays = document.querySelectorAll("td");
allDays.forEach((allday) => {
  allday.addEventListener("click", (event) => {
    const setDate = `${event.target.innerHTML} - ${
      today.getMonth() + 1
    } - ${today.getFullYear()}`;
    selected_day.textContent = setDate;
    Patient.date = setDate;

    if (Patient.service_name == "Oral hygiene") {
      oralHygieneTimes.forEach((time) => {
        times.innerHTML += `
      <div class="range">
                    <span class="first-hour">${time.start_time}</span>
                    <span class="second-hour">${time.end_time}</span>
                  </div>
      `;
      });
    } else if (Patient.service_name == "Implants") {
      implantTimes.forEach((time) => {
        times.innerHTML += `
      <div class="range">
                    <span class="first-hour">${time.start_time}</span>
                    <span class="second-hour">${time.end_time}</span>
                  </div>
      `;
      });
    }
  });
});

//! next to confirm page back to date functionality
let select_confirm_click = false;
const next_confirm_toast = document.querySelector(".date-toast");
const next_to_confirm = document.querySelector(".date-next");
const back_to_date = document.querySelector(".confirm-back");
const confirm_section = document.querySelector(".confirm-section");

const ranges = document.querySelectorAll(".range");

times.addEventListener("click", function (event) {
  const clickedRange = event.target.closest(".range");
  if (clickedRange) {
    // Remove existing styles from all ranges
    const allRanges = document.querySelectorAll(".range");
    allRanges.forEach((range) => {
      range.style.borderWidth = "0";
      range.classList.remove("selected-style");
    });

    // Apply styles to the clicked range
    clickedRange.style.borderWidth = "1px";
    clickedRange.style.borderStyle = "solid";
    clickedRange.style.borderColor = "green";
    clickedRange.classList.add("selected-style");
    // Get the start_hour element within the clicked range
    const start_hour = clickedRange.querySelector(".first-hour");
    Patient.time = start_hour.innerHTML;
    select_confirm_click = true;
    // Handle back_to_service button click
    back_to_service.addEventListener("click", () => {
      service_section.style.display = "block";
      date_section.style.display = "none";
      second_nav_num.style.backgroundColor = "#7948ce";
      second_nav_num.innerHTML = "✔";
      second_nav_name.style.color = "white";
      third_nav_num.style.backgroundColor = "green";
      third_nav_num.style.cursor = "pointer";
      third_nav_name.style.color = "green";
      third_nav_name.style.cursor = "pointer";
      // Add selected-style class to the clicked range
      clickedRange.classList.add("selected-style");
    });
  }
});

const selected_staff_name = document.querySelector(".selected-staff-name");
const selected_service_name = document.querySelector(".selected-service-name");
const selected_dates = document.querySelector(".selected-dates");
const selected_price = document.querySelector(".selected-price");

next_to_confirm.addEventListener("click", () => {
  if (select_confirm_click) {
    date_section.style.display = "none";
    confirm_section.style.display = "block";
    third_nav_num.style.backgroundColor = "#7948ce";
    third_nav_num.innerHTML = "✔";
    third_nav_name.style.color = "white";
    fourth_nav_num.style.backgroundColor = "green";
    fourth_nav_name.style.color = "white";
    fourth_nav_num.style.cursor = "pointer";
    fourth_nav_name.style.cursor = "pointer";
    selected_staff_name.textContent = Patient.staff_name;
    selected_service_name.textContent = Patient.service_name;
    selected_dates.innerHTML += `<span>${Patient.date} / ${Patient.time}</span> `;
    if (Patient.service_name == "Oral hygiene") {
      selected_price.textContent = "$50";
    } else {
      selected_price.textContent = "$120";
    }
  } else {
    next_confirm_toast.style.display = "block";
    setTimeout(() => {
      next_confirm_toast.style.display = "block";
    }, 300);
  }
});

//!

////FINAL CONFIRM
let succes = false;
const confirmAll = document.querySelector(".confirm-next");

const name_input = document.querySelector("#first-name");
const surname_input = document.querySelector("#last-name");
const email_input = document.querySelector("#email");
const phone_input = document.querySelector("#phone");
const confirm_toast = document.querySelector(".confirm-toast");

confirmAll.addEventListener("click", () => {
  if (
    name_input.value.trim() !== "" &&
    surname_input.value.trim() !== "" &&
    email_input.value.trim() !== "" &&
    phone_input.value.trim() !== ""
  ) {
    succes = true;
  }
  if (succes) {
    if (Patient.length === 0) {
      Patient.push({
        customer: {
          name: name_input.value,
          surname: surname_input.value,
          email: email_input.value,
          phone: phone_input.value,
        },
      });
    } else {
      Patient[0].customer.name = name_input.value;
      Patient[0].customer.surname = surname_input.value;
      Patient[0].customer.email = email_input.value;
      Patient[0].customer.phone = phone_input.value;
    }
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Confirmation successfully completed!",
      showConfirmButton: false,
      timer: 1500,
    });
    confirm_section.style.display = "none";
    staff_section.style.display = "block";
    first_nav_name.style.color = "green";
    second_nav_name.style.color = "#4d545a";
    third_nav_name.style.color = "#4d545a";
    fourth_nav_name.style.color = "#4d545a";
    first_nav_num.innerHTML = "1";
    first_nav_num.style.backgroundColor = "green";
    second_nav_num.innerHTML = "2";
    second_nav_num.style.backgroundColor = "#4d545a";
    third_nav_num.innerHTML = "3";
    third_nav_num.style.backgroundColor = "#4d545a";
    fourth_nav_num.style.backgroundColor = "#4d545a";
    select_staff_click = false;
    select_service_click = false;
    select_confirm_click = false;
    succes = false;
    selected_staffs.forEach((s) => {
      s.style.borderWidth = "0";
      s.style.borderStyle = "none";
      s.style.borderColor = "none";
    });
    selected_services.forEach((ser) => {
      ser.style.borderWidth = "0";
      ser.style.borderStyle = "none";
      ser.style.borderColor = "none";
    });
    document.querySelector(".selected-date").textContent = "Select Date";
    times.innerHTML = "";
  } else {
    confirm_toast.style.display = "block";
  }
});

console.log(Patient);
