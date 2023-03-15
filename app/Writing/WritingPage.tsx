import { Stack } from '@mui/material';
import { AfterTomorrow } from './AfterTomorrow';
import { AlwaysLove } from './AlwaysLove';
import { ButterflyParade } from './ButterflyParade';
import { CricketCoffee } from './CricketCoffee';
import { ManicPixie } from './ManicPixie';
import { MicroPlasticMan } from './MicroPlasticMan';
import { NewRomantic } from './NewRomantic';
import { Reentry } from './Reentry';
import { WhatYoullFind } from './WhatYoullFind';
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
    <WritingEntry name="After Tomorrow">{AfterTomorrow}</WritingEntry>
    <WritingEntry name="Manic Pixie Dream Girl">{ManicPixie}</WritingEntry>
    <WritingEntry name="We Will Always Love You">{AlwaysLove}</WritingEntry>
    <WritingEntry name="Micro-Plastic Man">{MicroPlasticMan}</WritingEntry>
    <WritingEntry name="What You'll Find">{WhatYoullFind}</WritingEntry>
    <WritingEntry name="Cricket in my Coffee">{CricketCoffee}</WritingEntry>
    <WritingEntry name="Stand by for re-entry">{Reentry}</WritingEntry>
    <WritingEntry name="The Butterfly Parade">{ButterflyParade}</WritingEntry>
    <WritingEntry name="The New Romantic">{NewRomantic}</WritingEntry>
  </Stack>
);
