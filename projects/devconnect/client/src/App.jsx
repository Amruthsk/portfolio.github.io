import NavBar from "./NavBar";

function App() {
 

  return (
    <>
    <NavBar />

      <h1 className="text-5xl font-black text-green-500">
        Hello World App.jsx
      </h1>
      <button class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
        Button
      </button>
    </>
  );
}

export default App
