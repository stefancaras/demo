export default function Card({fnc, img, title, text}) {
  const clickHandler = () => {
    fnc("clicked!")
  }
  return (
    <div className="card">
      <img
        src={img}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-primary" onClick={clickHandler}>Click me!</button>
      </div>
    </div>
  );
}
