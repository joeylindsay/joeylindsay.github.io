import { Stack } from '@mui/material';
import { WillowProjectOpenLetter } from './WillowProjectOpenLetter';
import { WritingEntry } from './WritingEntry';

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
    <WritingEntry name="An Open Letter to President Biden on the Willow Project">
      {WillowProjectOpenLetter}
    </WritingEntry>
  </Stack>
);
