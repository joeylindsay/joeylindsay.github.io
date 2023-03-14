import { CardMedia, Link, Paper, Stack, Typography } from '@mui/material';

type ProjectEntryType = {
  name: string;
  iconLoc: string;
  description: string;
  link?: string;
};

export function ProjectEntry({
  name,
  iconLoc,
  description,
  link,
}: ProjectEntryType): JSX.Element {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      component={Paper}
      justifyContent="space-evenly"
      alignItems={{ xs: 'center', md: 'left' }}
      gap={2}
      p={1}
      sx={{ borderRadius: 2 }}
    >
      <CardMedia
        component="img"
        sx={{
          maxWidth: {
            xs: '100%',
            sm: '600px',
          },
          minWidth: {
            md: '500px',
          },
          maxHeight: '200px',
          display: 'flex',
          flexGrow: 1,
        }}
        image={iconLoc}
        alt={`${name}`}
      />
      <Stack gap={1} alignItems="space-evenly">
        <Typography
          variant="h4"
          sx={{ textAlign: { xs: 'center', md: 'left' }, fontWeight: 'bold' }}
        >
          {link ? (
            <Link
              href={link}
              target="_blank"
              sx={{ color: '#000' }}
              rel="noopener"
            >
              {name}
            </Link>
          ) : (
            name
          )}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: 15, lg: 18 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}
