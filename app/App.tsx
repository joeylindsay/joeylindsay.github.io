import { Box, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';
import { HomePage } from './HomePanel';
import { Panels } from './PanelTypes';
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
      <HomePage />
    </>
  );
};
