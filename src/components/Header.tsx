import logo from "@/assets/logo-naturalbot.jpeg";

const Header = () => {
  return (
    <header className="w-full bg-background py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-center px-4">
        <img src={logo} alt="Natural Bot" className="h-10 object-contain" />
      </div>
    </header>
  );
};

export default Header;
