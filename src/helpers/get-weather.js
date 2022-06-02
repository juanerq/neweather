const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': '3a367303f4msh5cf46c3f1f6327bp1af5b6jsn3baf82ae6af7'
	}
};

export const getWeateher = async (query) => { 
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`
  
  const data = await ( await fetch(url, OPTIONS) ).json()

  return data
}
