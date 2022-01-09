import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { useTheme, useMediaQuery } from '@material-ui/core'
import { annotateListData } from './utils/constant'

const Annotate = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.only('xs'))

  return (
    <Typography component='div'>
      <Box
        color='text.disabled'
        fontSize={matches ? '10px' : 'overline.fontSize'}
        fontWeight='fontWeightLight'
        style={{
          wordBreak: 'break-word',
        }}
      >
        {annotateListData.map((annotate, index) => (
          <Box key={index} mb={1.5} display='flex'>
            <Box flexShrink={0} pr={2}>{`${index + 1}.`}</Box>
            <div dangerouslySetInnerHTML={{ __html: annotate.content }}></div>
          </Box>
        ))}
      </Box>
    </Typography>
  )
}

export default Annotate
