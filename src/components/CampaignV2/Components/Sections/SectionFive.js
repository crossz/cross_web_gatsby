import React from 'react'
import { useTheme, useMediaQuery, Box, makeStyles, Button } from '@material-ui/core'
import { useI18next } from 'gatsby-plugin-react-i18next'
import YouTube from 'react-youtube'
import LineDots from '@components/CampaignV2/images/bg_wave_dots.png'
import ImageTranslation from '../ImageTranslation'
import Link from '@components/Link'
import useLangQuery from '@hooks/useLangQuery'

const useStyles = makeStyles((theme) => ({
  bgImage: {
    background: `url(${LineDots}) no-repeat ,linear-gradient(150.62deg, #1B295D 11.31%, #1C4170 81.99%)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: 'center 30%',
    },
  },
  videoContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  video: {
    borderRadius: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      borderRadius: theme.spacing(0.75),
    },
  },
  outlineButton: {
    whiteSpace: 'nowrap',
    color: theme.palette.primary.contrastText,
    backgroundColor: 'transparent',
    borderColor: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginTop: theme.spacing(1.5),
    },
  },
}))
const SectionFive = () => {
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles({
    progressRightWidth: isMobile ? 80 : 316,
    isMobile,
  })
  const addLangQuery = useLangQuery()

  return (
    <>
      <ImageTranslation filename='section_banner_05' alt='section banner 05'></ImageTranslation>
      <Box
        color='primary.contrastText'
        fontSize={isMobile ? 16 : 18}
        className={classes.bgImage}
        pt={isMobile ? 7.5 : 15}
        pb={isMobile ? 5 : 10}
        textAlign={isMobile ? 'left' : 'center'}
        px={2.5}
      >
        <Box maxWidth={784} mx='auto'>
          <Box
            className='gsap-fade-in-10-trigger gsap-fade-in-10'
            whiteSpace='break-spaces'
            lineHeight={isMobile ? 1.5 : 2}
            mb={isMobile ? 3 : 6}
          >
            {t('cp_v2.second_life.paragraphs.0')}
          </Box>
          <Box className='gsap-fade-in-10' id='ECP_TM_Video_Play' pt={`${(9 / 16) * 100}%`} position='relative'>
            <YouTube
              className={classes.videoContainer}
              iframeClassName={classes.video}
              videoId='BACVA3es0NI'
              opts={{
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
          <Box
            mt={isMobile ? 3 : 5.5}
            mb={isMobile ? 6 : 8}
            fontWeight='fontWeightBold'
            textAlign='center'
            fontSize={isMobile ? 14 : 20}
            whiteSpace='break-spaces'
          >
            {t('cp_v2.second_life.paragraphs.1')}
          </Box>
          <Box
            mt={isMobile ? 4 : 8}
            mx='auto'
            flexWrap={isMobile ? 'wrap' : 'nowrap'}
            display='flex'
            width='100%'
            maxWidth={isMobile ? 'auto' : 480}
          >
            <Button
              fullWidth
              variant='contained'
              color='secondary'
              href={addLangQuery()}
              target='_blank'
              id='ECP_TM_EH'
            >
              {t('common.book_now')}
            </Button>
            <Box width='100%' target='_blank' to='/service-location/' component={Link}>
              <Button className={classes.outlineButton} fullWidth variant='outlined' id='ECP_TM_Location'>
                {t('cp_v2.common.view_service_location')}
              </Button>
            </Box>
          </Box>
          {/* <Box textAlign='center'>
            <Button
              variant='contained'
              color='secondary'
              href={addLangQuery()}
              target='_blank'
              className={classes.btn}
              id='ECP_TM_EH'
            >
              {t('common.book_now')}
            </Button>
          </Box> */}
        </Box>
      </Box>
    </>
  )
}

export default SectionFive
