import { SidebarSection, PFHeading, Content } from "../../styles";

const Sidebar = ({ title, children }) => {
  return (
    <SidebarSection>
      <PFHeading>{title}</PFHeading>
      <Content>{children}</Content>
    </SidebarSection>
  );
};

export default Sidebar;
