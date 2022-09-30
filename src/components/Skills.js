const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="projects__cards skilldata">
        <div className="projects__card skilltext">
          <h3>Languages</h3>

          <p>
            Solidity <br></br> C/C++ <br></br>JAVASCRIPT<br></br> CSS3 <br></br>
            HTML5<br></br> Python
          </p>
        </div>

        <div className="projects__card skilltext">
          <h3>Frameworks</h3>

          <p>
            Truffle<br></br> Node<br></br>Web3 Js <br></br>Ether Js <br></br>{" "}
            React <br></br>
            Openzeppelin
            <br></br>BOOTSTRAP
          </p>
        </div>

        <div className="projects__card skilltext">
          <h3>Tools</h3>

          <p>
            Metamask<br></br> Remix IDE <br></br> GIT & GITHUB <br></br>Gelato
            <br></br>IPFS<br></br>Geth
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
