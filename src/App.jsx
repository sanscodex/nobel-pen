import Authors from "./components/Authors";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Header />
      <Search handleChange={handleChange} />
      <Authors search={search} />
    </div>
  );
}
