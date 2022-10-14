import { HeaderProps } from "./Header.types";

const Header = ({ text }: HeaderProps) => {
  return (
    <div className="header-container">
      <h1> Infinity Quizy 🤯</h1>

      <p>{text}</p>
    </div>
  );
};

export { Header };
