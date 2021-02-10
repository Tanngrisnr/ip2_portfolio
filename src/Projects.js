import {StyledSection} from './styles/global'
import List from './list/List'

const Projects = ({data}) => {
    return ( 
        <StyledSection><h2>Projects</h2>
            <List list={data} ></List>
        </StyledSection>
     );
}
 
export default Projects;