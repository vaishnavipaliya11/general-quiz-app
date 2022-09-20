import { HeaderProps } from "./Header.types"

const Header = ({username,score}:HeaderProps) =>{
    return(
        <div>
        <h1> Infinite Quizy 🤯</h1>
        <p>Welcome {username}  {score}</p>
        </div>
    )
}

export {Header}