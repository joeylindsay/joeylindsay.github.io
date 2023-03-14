import { CardMedia, Paper, Stack, Typography } from '@mui/material';

export const HobbiesPage = (): JSX.Element => (
  <Stack
    direction="row"
    spacing={1}
    sx={{
      px: 2,
      paddingBottom: 2,
      paddingTop: 1,
      backgroundColor: 'primary.main',
    }}
  >
    <Stack component={Paper} alignItems="center" p={1} sx={{ borderRadius: 2 }}>
      <CardMedia
        component="img"
        image="app/assets/biking.jpg"
        alt="My little brother and I on a mountain biking trip"
        sx={{ maxHeight: 400 }}
      />
      <Typography variant="body1">Hey look I&apos;m biking</Typography>
    </Stack>
    <Stack component={Paper} alignItems="center" p={1} sx={{ borderRadius: 2 }}>
      <CardMedia
        component="img"
        image="app/assets/hiking.jpg"
        alt="Me next to the James Dean statue outside the Griffith observatory"
        sx={{ maxHeight: 400 }}
      />
      <Typography variant="body1">Hey look I&apos;m hiking</Typography>
    </Stack>
    <Stack component={Paper} alignItems="center" p={1} sx={{ borderRadius: 2 }}>
      <CardMedia
        component="img"
        image="app/assets/natsgame.jpg"
        alt="Me at a Washinton Nationals game with several friends"
        sx={{ maxWidth: 400 }}
      />
      <Typography variant="body1">Baseball!</Typography>
    </Stack>
    <Stack component={Paper} alignItems="center" p={1} sx={{ borderRadius: 2 }}>
      <CardMedia
        component="img"
        image="app/assets/meandmario.jpg"
        alt="A picture of me next to a lifesize cutout of Mario"
        sx={{ maxHeight: 400 }}
      />
      <Typography variant="body1">It&apos;s a me</Typography>
    </Stack>
    <Stack component={Paper} alignItems="center" p={1} sx={{ borderRadius: 2 }}>
      <CardMedia
        component="img"
        image="app/assets/meandmario.jpg"
        alt="A picture of me next to a lifesize cutout of Mario"
        sx={{ maxHeight: 400 }}
      />
      <Typography variant="body1">It&apos;s a me</Typography>
    </Stack>
    <Stack component={Paper} alignItems="center" p={1} sx={{ borderRadius: 2 }}>
      <CardMedia
        component="img"
        image="app/assets/tallship.jpg"
        alt="My family and I on a ship in Jamestown VA"
        sx={{ maxHeight: 400 }}
      />
      <Typography variant="body1">Ahoy</Typography>
    </Stack>
  </Stack>
);
