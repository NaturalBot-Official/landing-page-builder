import { Bot } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-center px-4">
        <div className="flex items-center gap-2">
          <Bot className="h-8 w-8 text-primary" />
          <span className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="text-primary">Natural</span>
            <span className="text-secondary">Bot</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
