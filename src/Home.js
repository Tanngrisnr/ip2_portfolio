import styled from 'styled-components'


const HomePage = styled.section`
  padding:5%;
  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  max-width:80%;
  align-self: center;
  justify-content: center;
  align-items: center;
  h2{
    font-size:2rem;
    flex-grow:3;
    flex-basis:100%;
    text-align:center;
  }
  figure {
      flex-grow:1;
      flex-basis:50%;

      img {
        border: 2px solid ${({ theme }) => theme.Secondary};
        background-color:${({ theme }) => theme.Secondary};
        border-radius:10px;
        margin: 0;
        padding: 0;
        width:100%;
        height:auto;
      }
  }
  article {
      flex-grow:2;
      background-color:${({ theme }) => theme.Secondary};
      color:${({ theme }) => theme.Primary};
      padding:2%;
      border-radius:10px;
      flex-grow:2;
      display:flex;
      flex-direction:column;
  }
  `;


const Home = () => {
    return ( 
        <HomePage>
            <h2>About Me</h2>
            <article>
            <p>I am a front-end developer and UX-designer passionate about web desing, programming and creating new and innovative things.</p>
            <p>I'm a graduate from Södertörn University as well as KYH vocational university in Sweden.</p>
            </article>
            <figure><img src="https://raw.githubusercontent.com/Tanngrisnr/ip2_portfolio/main/src/images/designer.JPG" alt="A person in a blue checkered shirt crouching and leaning against a wall, Fredrik Wintzell"/></figure>
        </HomePage>
     );
}
 
export default Home;