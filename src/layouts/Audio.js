import React from 'react'
import {
  makeStyles,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
} from '@material-ui/core'
import { MDX_MEDIA_MAXWIDTH } from '@utils/constant'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: MDX_MEDIA_MAXWIDTH,
    margin: '0 auto',
    marginBottom: theme.spacing(4),
  },
  audio: {
    width: '100%',
  },
}))

const Audio = ({ src, title, describe, ...rest }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  return src ? (
    <Box className={classes.root}>
      {title && (
        <Box my={1.5}>
          <Typography variant='h6' color='primary'>
            {title}
          </Typography>
        </Box>
      )}
      <audio
        className={classes.audio}
        controls
        preload='auto'
        src={src}
        {...rest}
      ></audio>
      {describe && (
        <Box my={0.5} color='grey.600'>
          <Typography variant={isMobile ? 'caption' : 'body2'}>
            {describe}
          </Typography>
        </Box>
      )}
    </Box>
  ) : null
}

export default Audio
