import { useState } from "react";
import Card from "./card";

function App() {
  
  const [username, setUsername] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();
};
  return (
    <div className="App">

  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6">
      <div className=" absolute w-[70%] h-[90vh] sm:h-[50vh] flex justify-center items-center rotate-3 rounded-xl bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg ">  </div>

      <div className=" relative px-4 py-10 bg-white rounded-xl  shadow-lg sm:rounded-3xl sm:p-20">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Enter a GitHub username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="e.g. jhon"
              className="shadow  border rounded w-full py-2 px-3 text-gray-700  outline-none shadow-outline"
            />
          </div>
        </form>
        {username && <Card username={username} />}
      </div>
   
  </div>
    </div>
  );
}

export default App;
