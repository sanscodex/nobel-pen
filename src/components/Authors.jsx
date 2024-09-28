import { data } from "../helpers/data";
import Author from "./Author";

const Authors = (props) => {
  console.log(data);
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(props.search.toLowerCase())
  );
  return (
    <div className="authors-container flex flex-row flex-wrap justify-center items-center gap-16 m-8">
      {filteredData.map((authorItem, index) => (
        <Author key={index} authorItem={authorItem} />
      ))}
    </div>
  );
};

export default Authors;
