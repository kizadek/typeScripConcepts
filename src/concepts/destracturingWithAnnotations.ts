const forecast = {
  date: new Date(),
  weather: 'sunnyA',
};

// typeScript annotation

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, '2');
  console.log(weather);
};

logWeather2(forecast);

logWeather(forecast);

export default logWeather;
