import './App.scss';
import Landing from "./components/landing/Landing";
import Present from "./components/present/Present";
import ContactForm from "./components/ChallReq/ChallReq";

function App() {

    return (
      <div className="App">
          <Landing />
          <Present />
          <ContactForm />
      </div>
    );

}

export default App;
