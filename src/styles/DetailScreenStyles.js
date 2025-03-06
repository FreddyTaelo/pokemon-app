import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center', 
    backgroundColor: 'skyblue', 
    paddingTop: 20, 
    paddingHorizontal: 10 
  },
  loader: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  image: { 
    width: 200, 
    height: 200, 
    marginBottom: 10 
  },
  name: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  infoContainer: { 
    width: '100%', 
    paddingHorizontal: 20 
  },
  info: { 
    textAlign: 'center', 
    marginBottom: 10, 
    fontSize: 16 
  },
  typeContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginBottom: 20 
  },
  noTypeText: { 
    color: '#888' 
  },
  errorText: { 
    color: 'red', 
    textAlign: 'center', 
    marginTop: 20 
  },
});

export default styles;
