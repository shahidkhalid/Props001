import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function People() {
  const friends = [
    { name: "john", job: "Developer" },
    { name: "Doe", job: "Designer" },
    { name: "Susy", job: "Artist", age: "33" },
  ];
  return (
    <section>
      <Person newobj={friends[0]} />
      <Person newobj={friends[1]} />
      <Person newobj={friends[2]} />
    </section>
  );
}

const aadmi = {
  name: "shahid",
  age: 50,
};
const { name } = aadmi;
console.log(name);

const showAadmi = ({ name, age }) => console.log(name, age);
showAadmi(aadmi);

const Person = ({ newobj: { name, job, age } }) => {
  //console.log(name, job, age);
  // const { name, job, age } = props.newobj;
  return (
    <article>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{age}</p>
      <hr />
    </article>
  );
};

ReactDom.render(<People />, document.getElementById("root"));
