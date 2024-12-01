import { useEffect } from "react";

function App() {
  //########## lab 1 ##########
  console.log("App");
  useEffect(() => {
    console.log("useEffect Active");

    return console.log("Clean up effect active");
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
