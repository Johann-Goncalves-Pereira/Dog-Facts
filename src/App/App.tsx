import { useFetch } from "./hooks/useFetch";

type Dogs = {
  facts: string;
  success: boolean;
};

function App() {
  const {
    data: dogs,
    error,
    isFetching,
  } = useFetch<Dogs>("api/v1/resources/dogs?number=10");

  return (
    <main className="bg-surface-3">
      {isFetching && <p>Loading...</p>}
      {error && <p>Err</p>}

      <ul>
        {dogs?.map((fact) => {
          return <li key={fact.facts}>{fact.facts}</li>;
        })}
      </ul>
    </main>
  );
}

export default App;
