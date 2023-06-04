const useGetFullDate = () => {
  const date = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const optionsDate = {
    hours: date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
    minutes:
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
    seconds:
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(),
    days: days[date.getDay()],
  };

  return optionsDate;
};

export default useGetFullDate;
