// 2/26/21 - MQ - added util functions to fetch movie data
// 2/26/21 - MQ - create a function called getMoviesByName with a parameter(argument) called search
export const getMoviesByName = async (search) => {
    // create a string constant variable called baseUrl with the value of the movie api website
    const baseUrl = 'http://www.omdbapi.com'
    // 2/26/21 - MQ - you would add your API KEY here
    const apiKey = 'YOUR API KEY WOULD GO HERE'
    const url = `${baseUrl}/?apikey=${apiKey}&s=${search}`
    
    const res = await fetch(url);
    const data = await res.json();
    return data;
};

// 2/26/21 - MQ - create a function called getMovieDetailsById with a parameter(argument) called movieId
export const getMovieDetailsById = async (movieId) => {
    // create a string constant variable called baseUrl with the value of the movie api website
    const baseUrl = 'http://www.omdbapi.com'
    // 2/26/21 - MQ - you would add your API KEY here
    const apiKey = 'YOUR API KEY WOULD GO HERE'
    const url = `${baseUrl}/?apikey=${apiKey}&i=${movieId}`

    const res = await fetch(url);
    const data = await res.json();
    return data;
};