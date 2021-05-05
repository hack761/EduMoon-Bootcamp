import ReactComponent from "./ReactComponent";
import Person from './Person.jsx';

function App() {
  return (
    <div>
      {/* <h1>Hey People!</h1>
      <ReactComponent/> */}
      {/* props -> properties of a component */}
      <Person name="Karun Karthik" job="tutor and web developer" hobby="coding"/>
      <Person name="Satya Rao" job="student" hobby="play games" />
      <Person name="Sam" job="student" hobby="Web Development" />
      <Person name="EduMoon" job="company" hobby="helping students" />
    </div>
  );
}

export default App;
