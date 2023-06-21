//components
import Home from './components/Main'
import DataProvider from './context/DataProvider';
function App() {
  return (
    <DataProvider>
      <Home/>
    </DataProvider>
  );
}

export default App; 
