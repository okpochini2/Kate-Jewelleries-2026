import profile1 from "../assets/Profile-1.png";
import profile2 from "../assets/Profile-2.jpg";
import profile3 from "../assets/Profile-3.png";

function About() {
  return (
    <div className="page">
      <h2>About Kate</h2>

      <div className="profile-grid">
        <img src={profile1} className="img"/>
        <img src={profile2}/>
        <img src={profile3} className="img-2"/>
      </div>

      <p>
        Welcome to Kate Unisex Jewelleries Collection. We provide stylish accessories for 
        both men and women.
      </p>
      <br />
      <p>
        <b>We sell:</b>
      </p>
      <br />
      <p>
        <b><i>Necklaces</i></b>
      </p>
       <p>
        <b><i>Bracelets</i></b>
      </p>
       <p>
        <b><i>Rings</i></b>
      </p>
       <p>
        <b><i>Sunglasses</i></b>
      </p>
       <p>
        <b><i>Gift sets</i></b>
      </p>
       <p>
        <b><i>Unisex accessories for both men and women</i></b>
      </p>
      <br />
      <p><b>High quanlity</b></p>
      <p><b>Affordable prices</b></p>
      <p><b>Perfect for gifts</b></p>
      <br />
      <p>Send us a message to order now,.</p>
      <p>Limited pieces available!</p>
    </div>
  )
}

export default About;