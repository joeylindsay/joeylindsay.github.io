import { Box, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';
import { ExperiencePage } from './Experiences/ExperiencesPage';
import { HobbiesPage } from './Hobbies/HobbiesPage';
import { HomePage } from './HomePage';
import { Panels } from './PanelTypes';
import { ProficienciesPage } from './Proficiencies/ProficienciesPage';
import { ProjectsPage } from './Projects/ProjectsPage';
import { TabHeader } from './TabHeader';

export const App: React.FC = () => {
  const [activePanel, setActivePanel] = useState<Panels>('home');
  const tabBoxRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Box
        sx={{ py: 1, px: 2, backgroundColor: '#fff' }}
        justifyContent="center"
      >
        <Typography
          variant="h5"
          sx={{
            color: 'primary.main',
            pl: 1,
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
          }}
        >
          Joey Lindsay
        </Typography>
      </Box>
      <Box ref={tabBoxRef}>
        <TabHeader
          activePanel={activePanel}
          setActivePanel={setActivePanel}
          tabBoxRef={tabBoxRef}
        />
      </Box>
      {activePanel === 'home' && <HomePage />}
      {activePanel === 'projects' && <ProjectsPage />}
      {activePanel === 'proficiencies' && <ProficienciesPage />}
      {activePanel === 'experience' && <ExperiencePage />}
      {activePanel === 'hobbies' && <HobbiesPage />}
    </>
  );
};
