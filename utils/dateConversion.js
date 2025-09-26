const formatDate = (dateString) => {
  const dateObject = new Date(dateString);

  const options = {
    year: "numeric", // "2025"
    month: "long", // "September", "October", etc.
    day: "numeric", // "25"
  };

  return dateObject.toLocaleDateString("en-US", options);
};

export default formatDate;
