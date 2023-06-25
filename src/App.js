const dotenv = require("dotenv");

function App() {
  dotenv.config({ path: "/../config.env" });
  console.log(process.env.API_ACCESS_KEY);
  return <h1>asdasd</h1>;
}

export default App;
