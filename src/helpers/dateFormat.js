export const dateFormatCurrent = (input) => {
  const [day, month, year] = input.split("/");
  if (!day || !month || !year === undefined) {
    const [day, month, year] = input.split(".");
    return `${month}/${day}/${year}`;
  }
  console.log("record", `${month}/${day}/${year}`);
  return `${month}/${day}/${year}`;
};
