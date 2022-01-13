import logo from './logo.svg';
import './App.css';

import PersonComponent from './components/PersonComponent';

var peopleArr =[
  {"firstName":"Steve", "lastName":"Jobs", "age":65, "hairColor":"brown"},
  {"firstName":"Johnny", "lastName":"Depp", "age":54, "hairColor":"brown"},
  {"firstName":"Bill", "lastName":"Gates", "age":74, "hairColor":"grey"},
  {"firstName":"Steve", "lastName":"Wozniak", "age":70, "hairColor":"brown"}
]


function App() {
  return (
    <div className="App">
        {peopleArr.map(person => {
          return <PersonComponent firstName={person.firstName} lastName={person.lastName} age = {person.age} hairColor={person.hairColor}/>
        })}
    </div>
  );
}

export default App;
