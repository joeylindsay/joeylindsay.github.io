import { Stack } from '@mui/material';
import { OpenLetter572023 } from './OpenLetter572023';
import { WritingEntry } from './WritingEntry';
import { OpenLetter7302023 } from './OpenLetter7302023';
import { Blog862023 } from './Blog862023';

export const WritingPage = (): JSX.Element => (
  <Stack
    spacing={1}
    sx={{
      px: 2,
      paddingBottom: 2,
      paddingTop: 1,
      justifyContent: 'center',
      backgroundColor: 'primary.main',
    }}
  >
    <WritingEntry name="Waiting for Kohaku - 8/6/2023">
      {Blog862023}
    </WritingEntry>
    <WritingEntry name="An Open Letter to President Biden - 7/30/2023">
      {OpenLetter7302023}
    </WritingEntry>
    <WritingEntry name="An Open Letter to President Biden - 5/7/2023">
      {OpenLetter572023}
    </WritingEntry>
  </Stack>
);
