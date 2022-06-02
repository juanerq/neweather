export const getWeateher = async (query) => {
  const key = '54ea0ee335b44b6595b215631222205'
  
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&aqi=no`
  
  const data = await ( await fetch(url) ).json

  return data
}
