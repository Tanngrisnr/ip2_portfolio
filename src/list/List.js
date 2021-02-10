import styled from 'styled-components';
import Item from './Item';

const ListArticle = styled.article`
display:flex;
flex-wrap:wrap;
flex-direction:row;
align-items:flex-start;
flex-grow:1;
justify-content:space-around;
padding:2%;
margin:2%;
h3{
    width:100%;
    border-bottom: 2px solid ${({ theme }) => theme.Secondary};
}
`;

const List = ({list_id, list, children}) => {
    console.log(list);
    return ( 
        <ListArticle id={list_id}>
            <h3>{children}</h3>
            {list.map(item=>(
                <Item
                    item_key={item.res_key}
                    title={item.title}
                    content={item.content}
                    img={item.image}
                />
            ))}
        </ListArticle>
     );
}
 
export default List;