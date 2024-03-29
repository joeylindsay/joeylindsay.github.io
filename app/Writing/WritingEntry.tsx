import { ExpandLess } from '@mui/icons-material';
import { Icon, IconButton, Paper, Stack, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type WritingEntryType = {
  name: string;
  children: React.ReactElement;
};

export function WritingEntry({
  name,
  children,
}: WritingEntryType): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  return (
    <Stack component={Paper} sx={{ borderRadius: 2 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        onClick={() => setExpanded(!expanded)}
        aria-controls={`Toggle ${name} text`}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          {name}
        </Typography>
        <IconButton
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={`Toggle ${name} text`}
        >
          <motion.div
            animate={{
              transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)',
            }}
          >
            <Icon
              component={ExpandLess}
              sx={{ color: '#000' }}
              fontSize="large"
            />
          </motion.div>
        </IconButton>
      </Stack>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'fit-content' }}
            exit={{ height: 0 }}
            transition={{ type: 'linear' }}
            style={{ overflow: 'hidden' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Stack>
  );
}
