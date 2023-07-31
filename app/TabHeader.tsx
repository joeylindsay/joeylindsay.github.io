import { Tab, Tabs, TabProps } from '@mui/material';
import { Panels } from './PanelTypes';

type FormattedTabProps = {
  label: string;
  value: string;
};

type TabHeaderProps = {
  activePanel: Panels;
  setActivePanel: (activePanel: Panels) => void;
  tabBoxRef: React.RefObject<HTMLDivElement>;
};

const FormattedTab: React.FC<FormattedTabProps & TabProps> = ({
  label,
  value,
  ...tabProps
}) => (
  <Tab
    sx={{ p: 1, minHeight: 3, minWidth: 100, width: '25%', color: '#dedede' }}
    label={label}
    value={value}
    {...tabProps}
  />
);

export function TabHeader({
  activePanel,
  setActivePanel,
  tabBoxRef,
}: TabHeaderProps): JSX.Element {
  return (
    <Tabs
      value={activePanel}
      onChange={(e, i) => setActivePanel(i)}
      variant="scrollable"
      sx={{
        p: 0,
        minHeight: 1,
        width: '100%',
        backgroundColor: 'primary.main',
      }}
      indicatorColor="secondary"
      textColor="secondary"
      allowScrollButtonsMobile={true}
      scrollButtons={
        tabBoxRef.current && tabBoxRef.current.offsetWidth < 325 ? false : true
      }
    >
      <FormattedTab label="Home" value="home" />
      <FormattedTab label="Blog" value="writing" />
      <FormattedTab label="Projects" value="projects" />
      <FormattedTab label="Proficiencies" value="proficiencies" />
      <FormattedTab label="Experience" value="experience" />
      <FormattedTab label="Hobbies" value="hobbies" />
    </Tabs>
  );
}
