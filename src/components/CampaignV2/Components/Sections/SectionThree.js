import React from 'react'
import { useTheme, useMediaQuery, Box, makeStyles, Button } from '@material-ui/core'
import { useI18next, Trans } from 'gatsby-plugin-react-i18next'
import Map from '@components/Map'
import { StaticImage } from 'gatsby-plugin-image'
import ImageTranslation from '../ImageTranslation'
import useLangQuery from '@hooks/useLangQuery'
import YouTube from 'react-youtube'
import Link from '@components/Link'

const useStyles = makeStyles((theme) => ({
  map: {
    margin: 0,
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
    color: theme.palette.prophecyPrimary.main,
    borderColor: theme.palette.prophecyPrimary.main,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginTop: theme.spacing(1.5),
    },
  },
}))
const Steps = () => {
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles()
  const addLangQuery = useLangQuery()

  const steps = [
    {
      img: <StaticImage src='../../images/ngs_step_01.png' alt='step 01'></StaticImage>,
      title: 'cp_v2.ngs_progress.steps.0.title',
      detail: 'cp_v2.ngs_progress.steps.0.content',
      arrowDown: <StaticImage src='../../images/arrowDown.png' alt='empty'></StaticImage>,
    },
    {
      img: <StaticImage src='../../images/ngs_step_02.png' alt='step 02'></StaticImage>,
      title: 'cp_v2.ngs_progress.steps.1.title',
      detail: 'cp_v2.ngs_progress.steps.1.content',
      arrowDown: <StaticImage src='../../images/arrowDown.png' alt='empty'></StaticImage>,
    },
    {
      img: <StaticImage src='../../images/ngs_step_03.png' alt='step 03'></StaticImage>,
      title: 'cp_v2.ngs_progress.steps.2.title',
      detail: 'cp_v2.ngs_progress.steps.2.content',
    },
  ]

  return (
    <>
      <ImageTranslation filename='section_banner_03' alt='section banner 03'></ImageTranslation>
      <Box mb={-15} position='relative' mx='auto' maxWidth={784}>
        <Box whiteSpace='break-spaces' pt={isMobile ? 3 : 6} fontSize={isMobile ? 16 : 18} px={2.5}>
          {t('cp_v2.ngs_progress.paragraphs.0')}
        </Box>

        <Box maxWidth={784} mx='auto'>
          <Box
            className='gsap-fade-in-10-trigger gsap-fade-in-10'
            whiteSpace='break-spaces'
            lineHeight={isMobile ? 1.5 : 2}
            mb={isMobile ? 3 : 6}
          >
            <Box fontSize='h5.fontSize' fontWeight={900} textAlign='center' mt={6} color='primary.main'>
              <Trans i18nKey='cp_v2.video_title'>
                .
                <Box color='secondary.main' fontSize='h3.fontSize' component='span' px={0.5}>
                  .
                </Box>
                .
              </Trans>
            </Box>
          </Box>
          <Box pt={`${(9 / 16) * 100}%`} position='relative'>
            <YouTube
              className={classes.videoContainer}
              iframeClassName={classes.video}
              videoId='wOPREMoVhys'
              opts={{
                width: '100%',
                height: '100%',
              }}
              id='ECP_Video_Play'
            />
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
        </Box>
        <Box
          className='gsap-fade-in-6-trigger gsap-fade-in-6'
          color='prophecyPrimary.main'
          fontWeight={900}
          fontSize={isMobile ? 20 : 28}
          mt={isMobile ? 5 : 4}
          mb={3}
          textAlign='center'
        >
          {t('cp_v2.ngs_progress.paragraphs.1')}
        </Box>
        <Box
          className='gsap-fade-in-6'
          borderRadius={isMobile ? 24 : 16}
          pt={isMobile ? 5 : 8}
          pb={isMobile ? 8 : 6}
          bgcolor='background.paper'
          color='prophecyPrimary.main'
          boxShadow='0px 5px 30px rgba(124, 124, 124, 0.1)'
        >
          <Box flexDirection='column' display='flex' alignItems='center' mx='auto' maxWidth={580} px={2.5}>
            {steps.map((item, index) => (
              <React.Fragment key={index}>
                <Box flexDirection={isMobile ? 'column' : 'row'} alignItems='center' display='flex'>
                  <Box flexShrink={0} mr={isMobile ? 0 : 8} mb={isMobile ? 2 : 0} width={120} height={120}>
                    {item.img}
                  </Box>
                  <Box textAlign={isMobile ? 'center' : 'left'}>
                    <Box fontSize='h5.fontSize' fontWeight={900}>
                      <Trans i18nKey={item.title}>
                        .
                        <Box color='secondary.main' fontSize='h3.fontSize' component='span' px={0.5}>
                          .
                        </Box>
                        .
                      </Trans>
                    </Box>
                    <Box fontWeight='fontWeightMedium' fontSize={isMobile ? 16 : 18}>
                      {t(item.detail)}
                    </Box>
                  </Box>
                </Box>
                <Box width={48} height={48} my={3}>
                  {item.arrowDown}
                </Box>
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
      <Box pt={isMobile ? 20 : 22} pb={isMobile ? 8 : 15} bgcolor='prophecyPrimary.main'>
        <Box className='gsap-fade-in-7-trigger gsap-fade-in-7' mx='auto' maxWidth={1192}>
          <Box px={2.5} fontSize={isMobile ? 'body1.fontSize' : 'h6.fontSize'} color='primary.contrastText' mb={3}>
            {t('cp_v2.ngs_progress.paragraphs.2')}
          </Box>
          <Box borderRadius={isMobile ? 0 : 16} overflow='hidden'>
            <Map showMap className={classes.map} trackCodeV2></Map>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Steps
