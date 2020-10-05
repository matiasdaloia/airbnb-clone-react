import React from "react";
import "./Home.css";
import Header from "./Header";
import Cards from "./Cards";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__section">
        <Cards
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Amazing house at Beverly Hills"
          description="Just a new crazy house to live in, you will love to stay here."
        />

        <Cards
          src="https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=720"
          title="Amazing house at Beverly Hills"
          description="Just a new crazy house to live in, you will love to stay here."
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Amazing house at Beverly Hills"
          description="Just a new crazy house to live in, you will love to stay here."
        />
      </div>
      <div className="home__section">
        <Cards
          src="https://d1cfnnhb7hbym9.cloudfront.net/dist/images/home_design.eb7d4643f05241d90fe789e19794d804.jpg"
          title="Amazing house at Beverly Hills"
          description="Just a new crazy house to live in, you will love to stay here."
          price="$35/Night"
        />

        <Cards
          src="https://d1cfnnhb7hbym9.cloudfront.net/dist/images/home_design.eb7d4643f05241d90fe789e19794d804.jpg"
          title="Amazing house at Beverly Hills"
          description="Just a new crazy house to live in, you will love to stay here."
          price="$26/Night"
        />
        <Cards
          src="https://d1cfnnhb7hbym9.cloudfront.net/dist/images/home_design.eb7d4643f05241d90fe789e19794d804.jpg"
          title="Amazing house at Beverly Hills"
          description="Just a new crazy house to live in, you will love to stay here."
          price="$20/Night"
        />
      </div>
    </div>
  );
}

export default Home;
