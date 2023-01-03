import Card from "./Card";

export default function Cards() {
  const onClickHandler = (msg) => {
    console.log("Cards");
    console.log(msg);
  }
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <Card
        fnc={onClickHandler}
        img="https://picsum.photos/id/237/200/300"
        title="dog"
        text="cute dog"
      />
      <Card
        img="https://picsum.photos/id/238/200/300"
        title="skyscrapper"
        text="a nice day in New York"
      />
      <Card
        img="https://picsum.photos/id/239/200/300"
        title="dandellion"
        text="the joy of life"
      />
      <Card
        img="https://picsum.photos/id/240/200/300"
        title="wall"
        text="how not to drown"
      />
      <Card
        img="https://picsum.photos/id/241/200/300"
        title="hill"
        text="far from the madding crowd"
      />
    </div>
  );
}
