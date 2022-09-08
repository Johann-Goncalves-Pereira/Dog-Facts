import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

import styles from "./App.module.scss";

type Dogs = {
  facts: string;
  success: boolean;
  name: string;
};

function App() {
  const {
    data: dogs,
    error,
    isFetching,
  } = useFetch<Dogs>(`users/Johann-Goncalves-Pereira/repos`);
  const [search, setSearch] = useState("");

  const filteredDogs =
    search.length > 0 ? dogs?.filter((dog) => dog.name.includes(search)) : [];

  return (
    <main className={styles.main}>
      {isFetching && <p className={styles.loading}>Loading...</p>}
      {error && (
        <div className={styles.error}>
          <p>Sorry, an error occurred in the api fetching</p>
          <i>😬</i>
        </div>
      )}

      <input
        type="text"
        className={styles.input}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      ></input>

      {search.length > 0 ? (
        <ul className={styles.list}>
          {filteredDogs?.map((fact) => {
            return <li key={fact.name}>{fact.name}</li>;
          })}
        </ul>
      ) : (
        <ul className={styles.list}>
          {dogs?.map((fact) => {
            return <li key={fact.name}>{fact.name}</li>;
          })}
        </ul>
      )}
    </main>
  );
}

export default App;
