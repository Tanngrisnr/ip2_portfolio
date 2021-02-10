import {StyledSection} from './styles/global'
import List from './list/List'

const Qualifications = ({data}) => {
    console.log(data)
    return ( 
        <StyledSection>
        <h2>Résumé</h2>
        <List list_id="education" list={data[0]}>Education</List>
        <List list_id="experience" list={data[1]}>Experience</List>
        <List list_id="skills" list={data[2]}>Skills</List>
        </StyledSection>
        
     );
}
 
export default Qualifications;