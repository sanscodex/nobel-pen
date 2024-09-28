const Search = (props) => {
  return (
    <div className="flex justify-center mt-16">
      <input
        type="text"
        placeholder="Search Author"
        className="w-96 p-4 bg-yellow-400 text-black"
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Search;
