import Routes from './Routes';
import ContextProvider from './Contexts/AppContext';

function App() {
  return (
    <div className="App w-screen h-screen font-poppins">
        <ContextProvider>
            <Routes />
        </ContextProvider>
    </div>
  );
}

export default App;
