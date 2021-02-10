import styled from "styled-components";
import Item from "./Item";

const ListArticle = styled.article`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex-grow: 1;
  justify-content: flex-start;
  padding: 2%;
  margin: 2%;
  h3 {
    width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.Secondary};
  }
`;

const List = ({ list_id, list, children }) => {
  console.log(list);
  return (
    <>
      <ListArticle key={list_id}>
        <h3>{children}</h3>
        {list.map((item) => (
          <Item
            key={item.key}
            title={item.title}
            content={item.content}
            img={item.image}
            alt_text={item.alt_text}
            link={item.link}
          />
        ))}
      </ListArticle>
    </>
  );
};

export default List;
