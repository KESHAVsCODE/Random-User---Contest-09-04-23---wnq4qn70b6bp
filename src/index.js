

const image = document.getElementById("image");
const Name = document.getElementById("name");
const age = document.getElementById("age");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const addInfo = document.getElementById("additional-info");
const getUser = document.getElementById("getUser");

let Age = 24;
let Email = "keshavchamria@gmail.com";
let Phone = "1212123113";
const R_U_API = "https://randomuser.me/api/";

function getRandomUser() {
  return fetch(R_U_API)
    .then((response) => response.json())
    .then((res) => res.results[0]);
}

async function renderRandomUser() {
  let randomUser = await getRandomUser();
  image.src = randomUser.picture.large;
  Name.textContent = `${randomUser.name.first} ${randomUser.name.last}`;
  Age = randomUser.dob.age;
  Email = randomUser.email;
  Phone = randomUser.phone;
  console.log(randomUser);
}
renderRandomUser();

age.addEventListener("click", () => {
  addInfo.textContent = Age;
});

email.addEventListener("click", () => {
  addInfo.textContent = Email;
});
phone.addEventListener("click", () => {
  addInfo.textContent = Phone;
});

getUser.addEventListener("click", renderRandomUser);


