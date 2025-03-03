import apiClient from './apiClient';


export const getPokemonList = async () => {
  try {
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
      image: data?.image ?? 'https://via.placeholder.com/200',        
      types: Array.isArray(data.types) ? data.types.join(', ') : 'unknown',
      stats: data?.stats || [],
      height: data?.height || 0,
      weight: data?.weight || 0,
    };
  } catch (error) {
    console.error("Failed to fetch Pokemon details:", error);
    return { 
      name: 'Unknown', 
      image: 'https://via.placeholder.com/200',
      types: 'unknown',
      stats: [],
      height: 0,
      weight: 0 
    };
  }
};
