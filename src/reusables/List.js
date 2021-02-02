import styled from 'styled-components';
import Item from './Item';

const ListArticle = styled.article`
display:flex;
flex-direction:column;
flex-grow:1;
`;

const List = ({list_id, list, children}) => {
    console.log(list);
    return ( 
        <article id={list_id}>
            <h3>{children}</h3>
            {list.map(item=>(
                <Item
                    item_key={item.res_key}
                    title={item.title}
                    content={item.content}
                    img={item.image}
                />
            ))}
        </article>
     );
}
 
export default List;