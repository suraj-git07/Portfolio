// Import Assets
import profile from "../assets/profile.png";
import ethlogo from "../assets/ethlogo.png";
const Header = () => {
  return (
    <section className="header">
      <img src={profile} alt="Suraj Mishra" className="profileimg" />
      <img src={ethlogo} alt="ethLogo" className="ethimg" />

      <div className="header__content">
        <h1 className="textH">Hi, I'm Suraj Mishra </h1>
        <p className="textH">Smart Contract Developer</p>

        <a href="mailto:suraj844722@gmail.com" class="button-30" role="button">
          <img
            className="iconGet"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"
          ></img>
          <span class="text">Get In Touch</span>
        </a>
      </div>
    </section>
  );
};

export default Header;
