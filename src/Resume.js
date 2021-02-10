import {StyledSection} from './styles/global'
import List from './list/List'


const Resume = ({data}) => {
    console.log(data)
    return ( 
        <StyledSection>
        <h2>Résumé</h2>
        <List key="education" list={data[0]}>Education</List>
        <List key="experience" list={data[1]}>Experience</List>
        <List key="skills" list={data[2]}>Skills</List>
        </StyledSection>

     );
}

export default Resume;