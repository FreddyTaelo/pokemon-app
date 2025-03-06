import apiClient from './apiClient';
import pokemonPlaceHolder from '../../assets/unavailable.png'


export const getPokemonList = async () => {
  try {
    console.log("Fetching the 1st 100 pokemons ...")
    const response = await apiClient.get('/pokemon');
    return response.data;
  } catch (error) {
    console.error("Failed to fetch Pokemon list:", error);
    return [];
  }
};

// fetch the pokemon details using id, 
export const getPokemonDetails = async (id) => {
  try {
    const response = await apiClient.get(`/pokemon/${id}`);
    const data = response.data;
    return {
      name: data?.name ?? 'Unknown',
      image: data?.image ?? 'https://fakeimg.pl/600x400',        
      types: Array.isArray(data.types) ? data.types.join(', ') : 'unknown',
      stats: data?.stats || [],
      height: data?.height || 0,
      weight: data?.weight || 0,
    };
  } catch (error) {
    console.error("Failed to fetch Pokemon details for pokemon id "+ id +": f", error);
    return { 
      name: 'Unknown', 
      image: 'https://fakeimg.pl/600x400',
      types: 'unknown',
      stats: [],
      height: 0,
      weight: 0 
    };
  }
};
