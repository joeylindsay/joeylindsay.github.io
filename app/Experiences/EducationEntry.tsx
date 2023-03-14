import { CardMedia, Paper, Stack, Typography } from '@mui/material';

type EducationEntry = {
  school: string;
  degree: string;
  timeframe: string;
  iconLoc: string;
};

export function EducationEntry({
  school,
  degree,
  timeframe,
  iconLoc,
}: EducationEntry): JSX.Element {
  return (
    <Stack
      component={Paper}
      alignItems="center"
      p={1}
      sx={{ borderRadius: 2 }}
      width="min-content"
    >
      <CardMedia
        component="img"
        sx={{
          width: 200,
          maxHeight: 200,
        }}
        image={iconLoc}
        alt={`${school} logo`}
      />
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', fontSize: { xs: 20, sm: 25 } }}
        align="center"
      >
        {school}
      </Typography>
      <Typography variant="h6" component="p" fontWeight="normal" align="center">
        {degree}
      </Typography>
      <Typography variant="h6" component="p" fontWeight="normal" align="center">
        {timeframe}
      </Typography>
    </Stack>
  );
}
