import Logo from "../assets/nobel-prize-logo.png";
const Header = () => {
  return (
    <div className="flex justify-around items-center mt-16">
      <img src={Logo} alt="logo" className="w-32"></img>
      <h1 className="text-center text-2xl w-40 text-yellow-300">
        <span className="text-6xl">Nobel</span>{" "}
        <span className="text-5xl">Prizes</span> in Literature
      </h1>
    </div>
  );
};

export default Header;
