import { CardMedia, Paper, Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

type HobbiesEntryType = {
  imageLoc: string;
  description: string;
  align: 'column' | 'row';
  alt: string;
  columns: number;
};

export function HobbiesEntry({
  imageLoc,
  description,
  align,
  alt,
  columns,
}: HobbiesEntryType): JSX.Element {
  return (
    <Grid2 xs={columns}>
      <Stack
        direction={{ xs: 'column', sm: align }}
        component={Paper}
        alignItems="center"
        justifyContent="space-evenly"
        gap={2}
        p={1}
        sx={{ borderRadius: 2 }}
      >
        <CardMedia
          component="img"
          image={imageLoc}
          alt={alt}
          sx={{ maxWidth: { xs: '100%', sm: '75%' } }}
        />
        <Typography
          variant="body1"
          align="center"
          sx={{
            maxWidth: {
              xs: 'fit-content',
              sm: align === 'row' ? 150 : 'fit-content',
            },
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Grid2>
  );
}
