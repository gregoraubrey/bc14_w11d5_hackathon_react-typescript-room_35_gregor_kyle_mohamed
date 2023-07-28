// import dotenv from "dotenv";
// dotenv.config();

export async function fetchRequest(city: string) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  );
  const data = await res.json();
  console.log(data)
  //delay for 1 second
  return data;
}
