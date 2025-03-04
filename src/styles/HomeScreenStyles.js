import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width; 

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'skyblue', 
    paddingTop: 20, 
    paddingHorizontal: 10 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 10 
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  noData: { 
    textAlign: 'center', 
    marginTop: 20, 
    color: '#888' 
  },
  listContainer: { 
    paddingBottom: 20, 
    paddingHorizontal: 5 
  },  
  card: {
    flex: 1,                     
    margin: 5,                   
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    maxWidth: (screenWidth / 2) - 15,   
    aspectRatio: 1,            
  },
  listCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 12,
    marginVertical: 5,
    width: '95%',        
  },
  image: { 
    width: '80%',         
    height: undefined,
    aspectRatio: 1,  
    marginBottom: 5,
  },
  name: { 
    fontWeight: 'bold', 
    fontSize: 16, 
    textAlign: 'center', 
    flexShrink: 1 
  },
});

export default styles;
