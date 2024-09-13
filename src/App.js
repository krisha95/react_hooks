import "./App.css";
import Usecontexthook from "./contexthook/Usecontexthook";
import Refhook from "./refhook/Refhook";
import Ustatehook from "./statehook/Ustatehook";
import Useeffecthook from "./useeffecthook/Useeffecthook";
// import Counter2 from "./usecustomhook/Counter2";
// import Customhook from "./usecustomhook/Customhook";
import Memohook from "./usememo/Memohook";
// import Reducer from "./usereducer/Reducer";
// import ProductPage from "./usecallback/ProductPage";

function App() {
  return (
    <>
      {/* <ProductPage/> */}
      {/* <Reducer /> */}
      {/* <Customhook /><br />
      <Counter2 /> */}
      {/* <Memohook/> */}
      {/* <Refhook /> */}
      {/* <Useeffecthook /> */}
      {/* <Ustatehook /> */}

      <Usecontexthook />
    </>
  );
}

export default App;
