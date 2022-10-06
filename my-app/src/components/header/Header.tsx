import { HeaderProps } from "./Header.types";

const Header = ({ username }: HeaderProps) => {
  return (
    <div className="header-container">
      <h1> Infinite Quizy 🤯</h1>

      <p>
        Welcome {username}
      </p>
    </div>
  );
};

export { Header };
