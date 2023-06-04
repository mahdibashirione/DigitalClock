import { useEffect, useState } from "react";
import useGetFullDate from "./Hooks/useGetFullTime";

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [days, setDays] = useState("sunday");

  useEffect(() => {
    setInterval(() => {
      const { days, minutes, hours, seconds } = useGetFullDate();
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      setDays(days);
    }, 1000);
  }, []);

  return (
    <div className="bg-gray-100 flex-col md:flex-wrap md:flex-row text-[100px] md:text-[150px] lg:text-[250px] font-black min-h-screen min-w-full flex items-center justify-center select-none gap-x-4">
      <p>
        {hours}
        <span className="hidden md:flex font-extralight text-xl -mt-12 items-center">
          {days.toLocaleUpperCase()}
          <span className="text-sm font-thin text-gray-500">
            - develop by <a href="https://github.com/mahdibashirione">MAHDI</a>
          </span>
        </span>
      </p>
      <svg
        className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
        viewBox="0 0 22 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12C5 15.3137 7.68629 18 11 18C14.3137 18 17 15.3137 17 12C17 8.68629 14.3137 6 11 6C7.68629 6 5 8.68629 5 12Z"
          fill="#000"
        />
      </svg>
      <p>{minutes}</p>
      <svg
        className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
        viewBox="0 0 22 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12C5 15.3137 7.68629 18 11 18C14.3137 18 17 15.3137 17 12C17 8.68629 14.3137 6 11 6C7.68629 6 5 8.68629 5 12Z"
          fill="#000"
        />
      </svg>
      <p>{seconds}</p>
    </div>
  );
}

export default App;
