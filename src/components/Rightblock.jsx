export default function Right(props) {
    let blocks = props.data.map((el) => (
        <div className={el.category ? `block-info ${el.category}` : "block-info"}>
            <img src={`./src/${el.icon}`} alt="" />
            <h3>{el.category}</h3>
            <p>
                <span className="score">{el.score}</span> / 100
            </p>
        </div>
    ));
    return (
        <div className="right-block">
            <h2>Summary</h2>
            {blocks}
            <button>Continue</button>
        </div>
    );
}
