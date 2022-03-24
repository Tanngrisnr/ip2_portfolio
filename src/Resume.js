import { StyledSection } from "./styles/global";
import List from "./list/List";

const Resume = ({ data }) => {
  return (
    <StyledSection>
      <h2>Résumé</h2>
      <List key="experience" list={data[0]}>
        Experience
      </List>
      <List key="education" list={data[1]}>
        Education
      </List>
      <List key="skills" list={data[2]}>
        Skills
      </List>
    </StyledSection>
  );
};

export default Resume;
