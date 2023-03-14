import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { HobbiesEntry } from './HobbiesEntry';

export const HobbiesPage = (): JSX.Element => (
  <Grid2
    container
    spacing={1}
    sx={{
      px: 2,
      paddingBottom: 2,
      paddingTop: 1,
      justifyContent: 'center',
      backgroundColor: 'primary.main',
    }}
    columns={{ xs: 3, sm: 6, md: 7, lg: 11, xl: 14 }}
  >
    <HobbiesEntry
      imageLoc="app/assets/biking.jpg"
      description="I am an avid cyclist. Exploring the trails in and around Washington D.C. is among my favorite passtimes, and I use my bicycle as a primary means of transportation. Mountain biking is my favorite form of cycling – this pickture was taking in the mountains of Colorado with my little brother."
      align="column"
      alt="My little brother and I on a mountain biking trip"
      columns={3}
    />
    <HobbiesEntry
      imageLoc="app/assets/tallship.jpg"
      description="History has always been an important to my family. We love to visit historical sites and monuments. Some of the highlights of our trips include Pompeii, the Forum in Rome, Manassas Battlefield, and this replica of the Susan Constant in Jamestown VA."
      align="row"
      alt="My family and I standing on the deck of a tall ship in Jamestown VA"
      columns={5}
    />
    <HobbiesEntry
      imageLoc="app/assets/hiking.jpg"
      description="Hiking is my favorite way to relax and take in my surroundings. Whether it's a quick loop through the local park or a camping trip to Shenandoah National Park, I always enjoy getting outside and hitting the trails. Here's me in Los Angeles CA, while hiking at the Griffith Observatory."
      align="column"
      alt="A photo of me standing next to the James Dean statue outside the Griffith observatory"
      columns={3}
    />
    <HobbiesEntry
      imageLoc="app/assets/natsgame.jpg"
      description="I love baseball, specifically the Washington Nationals! You'll frequently find me hanging out in the ULTRA Loft at Nats Park, leaning up against the railing and chatting with friends while enjoying America's passtime."
      align="row"
      alt="Me at a Washinton Nationals game with several friends"
      columns={6}
    />
    <HobbiesEntry
      imageLoc="app/assets/meandmario.jpg"
      description="I've been a fam of video games ever since I was little, particularly single-player strategy or story-driven experiences. I'm always up for some Nintendo though, and would be happy to beat you at Super Smash Bros. or lose to you at Mario Kart."
      align="column"
      alt="A picture of me next to a lifesize cutout of Mario"
      columns={3}
    />
  </Grid2>
);
