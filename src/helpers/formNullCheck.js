export const formNullCheck = (form) => {
  const errorList = {
    name: "Name Surname can not be null!",
    country: "Country can not be null!",
    city: "City can not be null!",
    email: "Email can not be null!",
  };
  const showErrorList = {};

  if (!form.name) {
    showErrorList.name = errorList["name"];
  }
  if (!form.country) {
    showErrorList.country = errorList["country"];
  }
  if (!form.city) {
    showErrorList.city = errorList["city"];
  }
  if (!form.email) {
    showErrorList.email = errorList["email"];
  }
  return showErrorList;
};
