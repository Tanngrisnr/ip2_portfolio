import styled from "styled-components"

const StyledItem = styled.div`
display:flex;
flex-direction:column;
flex-grow:1;
h4 {
    padding-bottom:0;
    margin-bottom:0;
}
p{
    margin:0;
    padding:0;
}
`;

const Item = ({item_key, title, content, image=null}) => {
    return ( 
        <>
        <StyledItem item-key={item_key}>
            <h4>{title}</h4>
            {content.map(item => (
                <p>{item}</p>
            ))}
        </StyledItem>
        </>
     );
}
 
export default Item;