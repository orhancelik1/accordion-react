import './App.css';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="App">
      <Accordion
        title="What is your policy?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mollis elit. Phasellus posuere ligula arcu"
      />
      <Accordion
        title="What is your policy?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mollis elit. Phasellus posuere ligula arcu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mollis elit. Phasellus posuere ligula arcu"
      />
      <Accordion
        title="What is your policy?"
        content="
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mollis elit. Phasellus posuere ligula arcu</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mollis elit. Phasellus posuere ligula arcu</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mollis elit. Phasellus posuere ligula arcu</p>
        </br>
        "
      />
    </div>
  );
}

export default App;
