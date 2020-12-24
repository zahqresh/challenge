import './App.css';
import Index from './components/Index';
import BookContext from './context/context';

function App() {
  return (
    <div className="App">
   <BookContext>
     <Index />
   </BookContext>
    </div>
  );
}

export default App;
