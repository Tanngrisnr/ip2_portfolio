import { Link } from "react-router-dom";
import styled from "styled-components";
import designer from "./images/designer.JPG";

const HomePage = styled.section`
  padding: 5%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 80%;
  align-self: center;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2rem;
    flex-grow: 3;
    flex-basis: 100%;
    text-align: center;
  }
  figure {
    flex-grow: 1;
    flex-basis: 30%;

    img {
      border: 2px solid ${({ theme }) => theme.Secondary};
      background-color: ${({ theme }) => theme.Secondary};
      border-radius: 10px;
      margin: 0;
      padding: 0;
      width: 100%;
      height: auto;
    }
  }
  article {
    flex-grow: 2;
    flex-basis: 40%;
    padding: 2%;
    flex-grow: 2;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  :hover {
    color: ${({ theme }) => theme.Secondary};
  }
`;

const Home = () => {
  return (
    <HomePage>
      <h2>About Me</h2>
      <article>
        <p>
          I'm a front-end developer working on becoming full-stack amd looking
          for the next step to build my career. I have most experience working
          in React.js as well as some Back-end work in Node.js utilizing
          Express.js.
        </p>
        <p>
          I'm a graduate from Södertörn University as well as KYH vocational
          university in Sweden. I have also participated in Sigma Technology
          Cloud's young talent program as an intern building full stack
          applications in Node.js.
        </p>
        <p>
          While you are here please check out the{" "}
          <StyledLink to="/projects">Projects</StyledLink> I have worked on as
          well as my <StyledLink to="/resume">Résumé</StyledLink> I am always
          interested to hear about any position I might be a good fit for.
        </p>
      </article>
      <figure>
        <img
          src={designer}
          alt="A person in a flower patterend shirt with blonde hair the designer and applicant, Fredrik Wintzell"
        />
      </figure>
    </HomePage>
  );
};

export default Home;
