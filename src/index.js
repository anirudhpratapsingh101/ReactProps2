import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import contacts from "./contacts.js";
import "./../public/styles.css";

const contacts = [
  {
    name: "Beyonce",
    imgURL:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    phone: "+123 456 789",
    email: "b@beyonce.com",
  },
  {
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com",
  },
  {
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com",
  },
];

ReactDOM.render(
  <div>
    <h1 className="heading">My Contacts</h1>
    <App
      name={contacts[0].name}
      img={contacts[0].imgURL}
      tel={contacts[0].phone}
      email={contacts[0].email}
    />
    <App
      name={contacts[1].name}
      img={contacts[1].imgURL}
      tel={contacts[1].phone}
      email={contacts[1].email}
    />
    <App
      name={contacts[2].name}
      img={contacts[2].imgURL}
      tel={contacts[2].phone}
      email={contacts[2].email}
    />
  </div>,
  document.getElementById("root")
);

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
