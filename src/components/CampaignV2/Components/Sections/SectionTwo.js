import React from 'react'
import { useTheme, useMediaQuery, Box, makeStyles, Grid, Button } from '@material-ui/core'
import Link from '@components/Link'
import { StaticImage } from 'gatsby-plugin-image'
import { useI18next, Trans } from 'gatsby-plugin-react-i18next'
import ImageTranslation from '../ImageTranslation'
import useLangQuery from '@hooks/useLangQuery'

const useStyles = makeStyles((theme) => ({
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

const SectionTwo = () => {
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles()
  const addLangQuery = useLangQuery()

  const steps = [
    {
      img: <StaticImage src='../../images/efficient_detection_01.png' alt='efficient detection 01'></StaticImage>,
      detail: 'cp_v2.ngs_advantage.efficient_detections.0',
    },
    {
      img: <StaticImage src='../../images/efficient_detection_02.png' alt='efficient detection 02'></StaticImage>,
      detail: 'cp_v2.ngs_advantage.efficient_detections.1',
    },
    {
      img: <StaticImage src='../../images/efficient_detection_03.png' alt='efficient detection 03'></StaticImage>,
      detail: 'cp_v2.ngs_advantage.efficient_detections.2',
    },
  ]
  const steps2 = [
    {
      img: <StaticImage src='../../images/ngs_advantage_01.png' alt='advantage 01'></StaticImage>,
      title: 'cp_v2.ngs_advantage.advantages.0.title',
      detail: 'cp_v2.ngs_advantage.advantages.0.content',
    },
    {
      img: <StaticImage src='../../images/ngs_advantage_02.png' alt='advantage 02'></StaticImage>,
      title: 'cp_v2.ngs_advantage.advantages.1.title',
      detail: 'cp_v2.ngs_advantage.advantages.1.content',
    },
    {
      img: <StaticImage src='../../images/ngs_advantage_03.png' alt='advantage 03'></StaticImage>,
      title: 'cp_v2.ngs_advantage.advantages.2.title',
      detail: 'cp_v2.ngs_advantage.advantages.2.content',
    },
  ]

  return (
    <Box
      fontSize={isMobile ? 16 : 18}
      lineHeight={1.5}
      fontWeight='fontWeightMedium'
      color='grey.900'
      pb={isMobile ? 8 : 13.5}
      whiteSpace='break-spaces'
    >
      <ImageTranslation filename='section_banner_02' alt='section banner 02'></ImageTranslation>
      <Box
        className='gsap-fade-in-4-trigger gsap-fade-in-4'
        bgcolor='background.paper'
        borderRadius={isMobile ? `0 0 24px 24px` : 24}
        maxWidth={784}
        py={isMobile ? 3 : 8}
        mx='auto'
        mb={isMobile ? 5.25 : 8}
        mt={isMobile ? 0 : -4}
        boxShadow='0px 2px 30px rgba(120, 120, 120, 0.15)'
        position='relative'
      >
        <Box fontSize={isMobile ? 16 : 18} maxWidth={580} mx='auto' px={2.5}>
          <Box>{t('cp_v2.ngs_advantage.paragraphs.0')}</Box>
          <Box fontWeight={900} fontSize='h4.fontSize' textAlign='center' color='prophecyPrimary.main' my={4}>
            <Box>{t('cp_v2.ngs_advantage.paragraphs.1')}</Box>
            <Box color='secondary.main' component='span'>
              {t('cp_v2.ngs_advantage.paragraphs.6')}
            </Box>
            {isMobile && <br />} <Box component='span'>{t('cp_v2.ngs_advantage.paragraphs.7')}</Box>
          </Box>
          <Box>
            {steps.map((item, index) => (
              <Box alignItems='center' mb={5} display='flex' key={index}>
                <Box flexShrink={0} width={isMobile ? 80 : 120} height={isMobile ? 80 : 120} mr={3}>
                  {item.img}
                </Box>
                <Box>
                  <Trans i18nKey={item.detail}></Trans>
                </Box>
              </Box>
            ))}
          </Box>
          <Box mt={1} textAlign='justify'>
            <Trans i18nKey='cp_v2.ngs_advantage.paragraphs.2'>
              .<sup>1</sup>
            </Trans>
          </Box>
        </Box>
      </Box>
      <Box maxWidth={988} mx='auto' px={2.5}>
        <Box fontSize={isMobile ? 20 : 28} fontWeight={900} textAlign='center' color='prophecyPrimary.main' mb={4}>
          Take2 Prophecy™ {isMobile && <br />}
          {t('cp_v2.ngs_advantage.paragraphs.3')}
        </Box>
        <Box textAlign={isMobile ? 'left' : 'center'} mb={4}>
          <Trans i18nKey='cp_v2.ngs_advantage.paragraphs.4'>
            .<sup>16</sup>.
          </Trans>
          {/* {t('cp_v2.ngs_advantage.paragraphs.4')} */}
        </Box>
        <Box
          className='gsap-fade-in-5-trigger gsap-fade-in-5'
          maxWidth={theme.spacing(100)}
          margin={isMobile ? '20px 10px' : '40px auto'}
        >
          <ImageTranslation filename='table' alt='table'></ImageTranslation>
        </Box>
        <Box
          className='gsap-fade-in-5'
          fontWeight={900}
          fontSize={isMobile ? 20 : 28}
          textAlign='center'
          color='prophecyPrimary.main'
          mb={6}
        >
          {t('cp_v2.ngs_advantage.paragraphs.5')}
        </Box>
        <Box className='gsap-fade-in-5'>
          <Grid alignItems='center' container spacing={4}>
            <Grid item sm={5}>
              <Box width='100%'>
                <ImageTranslation
                  hasMobile={false}
                  filename='ngs_advantage_triangle'
                  alt='ngs advantage triangle'
                ></ImageTranslation>
              </Box>
            </Grid>
            <Grid item sm={7}>
              <Box>
                {steps2.map((item, index) => (
                  <Box
                    key={index}
                    alignItems='center'
                    borderRadius={16}
                    px={isMobile ? 2.5 : 3}
                    py={2}
                    pb={isMobile ? 4 : 2}
                    bgcolor='background.paper'
                    display='flex'
                    flexDirection={isMobile ? 'column' : 'row'}
                    mb={3}
                    boxShadow='0px 5px 30px rgba(124, 124, 124, 0.1)'
                  >
                    <Box mr={isMobile ? 0 : 3} width={isMobile ? 80 : 108} height={isMobile ? 80 : 108} flexShrink={0}>
                      {item.img}
                    </Box>
                    <Box alignItems={isMobile ? 'center' : 'flex-start'} flexDirection='column' display='flex'>
                      <Box
                        fontSize={20}
                        fontWeight='900'
                        color='prophecyPrimary.main'
                        alignItems='center'
                        display='flex'
                        mb={1}
                      >
                        <Box flexShrink={0} width={24} height={24} mr={1}>
                          <StaticImage src='../../images/check.png' alt='check'></StaticImage>
                        </Box>
                        <Box>{t(item.title)}</Box>
                      </Box>
                      {index === 1 ? (
                        <Box>
                          <Trans i18nKey={item.detail}>
                            .<sup>1</sup>
                            <Box fontSize={13} component={isMobile ? 'span' : 'div'}>
                              (詳情請向醫護人員查詢)
                            </Box>
                          </Trans>
                        </Box>
                      ) : (
                        <Box>
                          <Trans i18nKey={item.detail}>
                            .<sup>1</sup>
                          </Trans>
                        </Box>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          mt={isMobile ? 4 : 8}
          flexWrap={isMobile ? 'wrap' : 'nowrap'}
          display='flex'
          width='100%'
          mx='auto'
          maxWidth={isMobile ? 'auto' : 480}
        >
          <Button
            fullWidth
            href={addLangQuery()}
            variant='contained'
            color='secondary'
            target='_blank'
            id='ECP_Credibility_EH'
          >
            {t('common.book_now')}
          </Button>
          <Box width='100%' target='_blank' component={Link} to='/service-location/'>
            <Button className={classes.outlineButton} fullWidth variant='outlined' id='ECP_Credibility_Location'>
              {t('cp_v2.common.view_service_location')}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SectionTwo
