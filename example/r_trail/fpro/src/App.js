import './App.css';
import Nav from "./mine/nav";
import First from './mine/first';
import SecondI from './mine/second_I';
import SecondII from "./mine/second_II";
import ThirdI from "./mine/third_I";
import ThirdII from "./mine/third_II";

import Footer from "./mine/footer";

function App() {
  return (
    <div >
      <form>
        <label>          
        <Nav />
        <First />
        <div className="second-container">
          <SecondI/>
          <SecondII/>
        </div>
        <div className="second-container">          
          <ThirdI/>
          <ThirdII/>
        </div>
      <div>
        <Footer/>
      </div>
        </label>
      </form>
    </div>
  );
}

export default App;
