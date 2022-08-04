export const formValidation = (form) => {
  const name = /[a-z]{4,60}$/i;
  const country = /[a-z]{2,40}$/i;
  const city = /[a-z]{2,40}$/i;
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const errorList = {
    name: "• Name - Surname: (only letters, min 4 – max 60 character)",
    country: "• Country : (only letters, min 2 - max 40 character)",
    city: "• City: (only letters, min 2 - max 40 character)",
    email: "• Email: It is not valid!",
  };
  const showErrorList = {};

  if (!name.test(form.name.trim())) {
    showErrorList.name = errorList["name"];
  }
  if (!country.test(form.country.trim())) {
    showErrorList.country = errorList["country"];
  }
  if (!city.test(form.city.trim())) {
    showErrorList.city = errorList["city"];
  }
  if (!email.test(form.email.trim())) {
    showErrorList.email = errorList["email"];
  }
  return showErrorList;
};
