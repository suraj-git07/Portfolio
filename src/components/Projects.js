// Import Assets
import codeStory from "../assets/codeStory.jpeg";
import metaverse from "../assets/metaverse.png";
import socialDapp from "../assets/social.png";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <h3>Code Story</h3>
          <img src={codeStory} alt="codeStory Swap Page" />
          <p>
            The Code Story is a learning game with the involvement of NFTs. The
            player spawns on the map and moves around to find various NPCs which
            in terms are called battlegrounds. The Player has to find all the
            NPCs for that level and must correctly answer all 10 questions then
            he/she can claim the NFT which is the "Proof of Learning", then go
            to the next level
          </p>

          <a
            href="https://the-code-story.github.io/The-Code-Story/game-index.html"
            target="_blank"
            className="button-30"
          >
            Site
          </a>
          <a
            href="https://github.com/suraj-git07/The-Code-Story"
            target="_blank"
            className="button-30"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Metaverse 1.0</h3>
          <img src={metaverse} alt="metaverse Landing Page" />
          <p>
            Metaverse1.0: Space where you can buy buildings and collect and show
            your ownership by owing it as an NFT. I used ThreeJs for creating a
            3D space for making it interactive just like Sandbox. when you
            request for buying a Space in this metaverse, you are claiming an
            NFT for the same in your wallet. This is my first NFT integrated
            Project.
          </p>

          <a
            href="https://metaverse10.netlify.app"
            target="_blank"
            className="button-30"
          >
            Site
          </a>
          <a
            href="https://github.com/suraj-git07/Metaverse1.0"
            target="_blank"
            className="button-30"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>SocialDapp</h3>
          <img src={socialDapp} alt="socialDapp Landing Page" />
          <p>
            Social Dapp: A decentralized social media app where you can post
            without any fear of being censored. Also to show the majority
            interest on top, there is a feature of tipping a post. The highest
            tipped post shows on the top. that's how we are showing what our
            users want to see not what any algorithm wants to show based on your
            Private data.
          </p>

          <a
            href="https://socialdapp.netlify.app/"
            target="_blank"
            className="button-30"
          >
            Site
          </a>
          <a
            href="https://github.com/suraj-git07/Social_NetworkDapp"
            target="_blank"
            className="button-30"
          >
            Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
