import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow:1;
  min-width:40%;
  height: auto;
  padding: 2%;
  margin: 3%;
  border-radius: 10px;
  background-color:${({ theme }) => theme.Secondary};
  color:${({ theme }) => theme.Primary};
  h4 {
    border-bottom: 2px solid ${({ theme }) => theme.Primary};
    flex-grow: 1;
    padding: 0;
    margin: 0;
  }
  p {
    flex-grow: 1;
    margin: 0;
    padding: 1%;
  }
  figure {
    flex-grow: 2;
    img {
      width: 100%;
      height: auto;
      margin: 0;
      padding: 0;
    }
  }
  a {
    border-radius:3px;
    padding:1%;
    max-width:30%;
  }
  a:hover {
    color: ${({theme}) => theme.Primary};
    background-color:${({ theme }) => theme.Highlight};
  }
`;

const Item = ({ link, img, alt_text, title, content }) => {
  return (
    <StyledItem>
      <h4>{title}</h4>
      {img && (
        <figure>
          <img src={img} alt={alt_text} />
        </figure>
      )}
      {link && <a href={link}>Link to project</a>}
      {content.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </StyledItem>
  );
};

export default Item;
