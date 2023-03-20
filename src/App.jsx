import "./App.css";
import Left from "./components/Leftblock";
import Right from "./components/Rightblock";
import data from './data.json';
import url from './assets/images/icon-memory.svg'

export default function App() {
    return (
        <div className="container">
            <Left />
            <Right data={data}/>
        </div>
    );
}
