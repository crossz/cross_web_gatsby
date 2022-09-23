import React from 'react'
import {
  makeStyles,
  Container,
  Typography,
  alpha,
  useTheme,
  useMediaQuery,
  Hidden,
  Grid,
  Button,
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { StaticImage } from 'gatsby-plugin-image'
import Link from '@components/Link'
import ArrowIcon from '@images/icons/arrow.svg'
import classnames from 'classnames'
import { useI18next, Trans } from 'gatsby-plugin-react-i18next'
import Layout from '@layouts/Layout'
import useLangQuery from '@hooks/useLangQuery'
import ErrorIcon from '@material-ui/icons/Error'
import TitleDot from '@themes/components/TitleDot'
import ImageTranslation from '@components/ImageTranslation'

const steps = [
  {
    label: 'products_and_services.take2_prophecy.process.0',
    icon: (
      <StaticImage
        src='../assets/images/icons/prophecy/step_01.svg'
        placeholder='tracedSVG'
        alt='step 01'
      ></StaticImage>
    ),
  },
  {
    label: 'products_and_services.take2_prophecy.process.1',
    icon: (
      <StaticImage
        src='../assets/images/icons/prophecy/step_02.svg'
        placeholder='tracedSVG'
        alt='step 02'
      ></StaticImage>
    ),
  },
  {
    label: 'products_and_services.take2_prophecy.process.2',
    icon: (
      <StaticImage
        src='../assets/images/icons/prophecy/step_03.svg'
        placeholder='tracedSVG'
        alt='step 03'
      ></StaticImage>
    ),
  },
  {
    label: 'products_and_services.take2_prophecy.process.3',
    icon: (
      <StaticImage
        src='../assets/images/icons/prophecy/step_04.svg'
        placeholder='tracedSVG'
        alt='step 04'
      ></StaticImage>
    ),
  },
  {
    label: 'products_and_services.take2_prophecy.process.4',
    icon: (
      <StaticImage
        src='../assets/images/icons/prophecy/step_05.svg'
        placeholder='tracedSVG'
        alt='step 05'
      ></StaticImage>
    ),
  },
]

const reports = [
  {
    result: 'products_and_services.take2_prophecy.reports.0.result',
    suggestion: 'products_and_services.take2_prophecy.reports.0.suggestion',
    mark: 'products_and_services.take2_prophecy.reports.0.mark',
    color: '#C8002E',
  },
  {
    result: 'products_and_services.take2_prophecy.reports.1.result',
    suggestion: 'products_and_services.take2_prophecy.reports.1.suggestion',
    mark: 'products_and_services.take2_prophecy.reports.1.mark',
    color: '#00AA82',
  },
]
const compass = [
  { name: 'products_and_services.cancer_screen_package.compass1', object: '' },
  { name: 'products_and_services.cancer_screen_package.compass2', object: '' },
  { name: 'products_and_services.cancer_screen_package.compass3', object: '' },
  {
    name: 'products_and_services.cancer_screen_package.compass4',
    object: 'products_and_services.cancer_screen_package.only_to_woman',
  },
  {
    name: 'products_and_services.cancer_screen_package.compass5',
    object: 'products_and_services.cancer_screen_package.only_to_woman',
  },
  {
    name: 'products_and_services.cancer_screen_package.compass6',
    object: 'products_and_services.cancer_screen_package.only_to_man',
  },
]
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    borderTop: `370px solid ${theme.palette.background.paper}`,
    borderBottom: `455px solid ${theme.palette.background.paper}`,
  },
  wrapper: {
    marginTop: -370,
    marginBottom: -500,
    padding: theme.spacing(0, 3),
    [theme.breakpoints.down('xs')]: {
      marginBottom: -420,
    },
  },
  content: {
    marginTop: theme.spacing(9.5),
    marginBottom: theme.spacing(15),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(8),
    },
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(13),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(5),
    },
  },
  sectionOneBg: {
    borderRadius: theme.spacing(1.5),
    height: 'auto',
    paddingTop: theme.spacing(5),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(-32),
      height: 'auto',
      padding: theme.spacing(3, 3),
    },
  },
  sectionSubBg: {
    borderRadius: theme.spacing(1.5),
    marginTop: theme.spacing(7),
    marginLeft: theme.spacing(8.5),
    marginBottom: theme.spacing(10),
    backgroundColor: 'rgb(248, 249, 250)',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(37.5),
      marginBottom: theme.spacing(-32),
      marginLeft: 0,
    },
  },
  subBox: {
    width: theme.spacing(50),
    background: '#fff',
    height: theme.spacing(15),
    borderRadius: 10,
    marginTop: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: 700,
    padding: theme.spacing(3, 2),
    '& path': {
      fill: theme.palette.error.main,
    },
    [theme.breakpoints.down('xs')]: {
      // height: theme.spacing(1),
      width: '100%',
    },
  },
  bannerWrapper: {
    height: theme.spacing(30),
    marginBottom: theme.spacing(-5),
    display: 'grid',
    borderRadius: theme.spacing(1.2),
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(17.5),
      marginLeft: theme.spacing(-1.5),
      marginRight: theme.spacing(-1.5),
    },
  },
  sectionOneBanner: {
    height: '100%',
    width: '100%',
    backgroundColor: alpha(theme.palette.prophecyPrimary.main, 0.85),
    opacity: '0.75',
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    display: 'grid',
    position: 'relative',
    gridArea: '1/1',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(3),
    },
  },
  bannerBg: {
    gridArea: '1/1',
  },
  sectionOneWrapper: {
    marginBottom: theme.spacing(7),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(4),
    },
  },
  sectionOneContent: {
    width: '100%',
    paddingBottom: 10,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4, 2),
    },
  },
  stepsWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  stepItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    zIndex: '2',
    whiteSpace: 'break-spaces',
    [theme.breakpoints.down('xs')]: {
      width: '50%',
      marginBottom: theme.spacing(6),
      padding: theme.spacing(0, 2),
    },
  },
  stepFiveItem: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  stepIcon: {
    background: '#fff',
    borderRadius: '50%',
    maxWidth: theme.spacing(21.5),
    marginBottom: theme.spacing(3.75),
    [theme.breakpoints.down('xs')]: {
      maxWidth: theme.spacing(12.5),
      marginBottom: theme.spacing(1.5),
    },
  },
  stepLabel: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.body2.fontSize,
    },
  },
  stepOneArrow: {
    right: theme.spacing(-3),
    top: theme.spacing(-9),
  },
  stepTwoArrow: {
    left: '50%',
    bottom: theme.spacing(-5),
    transform: `rotate(90deg) translateY(50%)`,
  },
  stepThreeArrow: {
    right: theme.spacing(-3),
    transform: `rotate(180deg)`,
    top: theme.spacing(-9),
  },
  stepFourArrow: {
    left: theme.spacing(-2),
    bottom: theme.spacing(-5),
    transform: `rotate(90deg) translateY(50%)`,
  },
  arrowIcon: {
    flexShrink: 0,
    marginTop: 'auto',
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      marginBottom: 0,
    },
  },
  rightIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: theme.spacing(0, 3),
    '& path': {
      fill: '#C8002E',
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 2),
    },
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  },
  greenRightIcon: {
    '& path': {
      fill: '#00AA82',
    },
  },
  reportItem: {
    padding: theme.spacing(4),
    color: theme.palette.grey[600],
    fontSize: theme.typography.caption.fontSize,
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1.5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3),
      fontSize: 11,
    },
  },
  reportTop: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.subtitle1.fontSize,
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(5),
      fontSize: theme.typography.body1.fontSize,
    },
  },
  reportType: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: '0',
  },
  prophecyImgWrapper: {
    overflow: 'hidden',
    width: 350,
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  prophecyImgWrapper1: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    width: 350,
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      width: '100%',
    },
  },
  prophecyImg: {
    borderRadius: theme.spacing(1.5),
  },
  btnWrapper: {
    marginTop: theme.spacing(4),
    '& a': {
      textDecoration: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      // width: '380px',
    },
  },
  reportTip: {
    color: '#818181',
    fontSize: theme.typography.caption.fontSize,
    padding: theme.spacing(0, 6),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(10),
      padding: 0,
    },
  },
  btn: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 0),
    },
  },
}))

const CancerScreen = () => {
  const classes = useStyles()
  const { t, language } = useI18next()
  const isEn = language === 'en'
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const addLangQuery = useLangQuery()
  return (
    <Layout>
      <Container className={classes.root} disableGutters maxWidth='xl'>
        <Box className={classes.wrapper}>
          <Container className={classes.content} disableGutters maxWidth='md'>
            <Box className={classes.title}>
              <Typography variant='h4' color='primary'>
                {t('menu.cancer_screen_package')}
              </Typography>
              <Box mt={matches ? 2.5 : 3} textAlign='justify'>
                <Typography variant={matches ? 'body2' : 'body1'} color='textPrimary'>
                  {t('products_and_services.cancer_screen_package.detail')}
                  {/* {matches ? <br /> : null} */}
                  {/* <Box display={matches ? 'block' : 'inline-block'} mt={matches ? 2 : 0}> */}
                  {t('products_and_services.cancer_screen_package.detail2')}
                  {/* </Box> */}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.sectionOneWrapper}>
              <Box className={classes.sectionOneBg}>
                <Typography variant='h4'>
                  <Box textAlign='center' lineHeight={1.5}>
                    {t('products_and_services.cancer_screen_package.subtitle0')}
                    {matches ? isEn ? ' ' : null : <br />}
                    {t('products_and_services.cancer_screen_package.subtitle')}
                  </Box>
                </Typography>
                <Box display='flex' justifyContent='center' flexDirection={matches ? 'column' : 'row'}>
                  <Box className={classes.subBox} mr={2} color='primary.main' justifyContent='center'>
                    <ErrorIcon color='red' />
                    <Box ml={1}>
                      <Trans i18nKey='products_and_services.cancer_screen_package.sub_detail1'>
                        .<sup>.</sup>.
                      </Trans>
                    </Box>
                  </Box>
                  <Box className={classes.subBox} color='primary.main'>
                    <ErrorIcon pr={2} />
                    <Box ml={1}> {t('products_and_services.cancer_screen_package.sub_detail2')}</Box>
                  </Box>
                </Box>
                <Box mt={1} py={2} textAlign={isEn ? (matches ? 'left' : 'center') : 'center'}>
                  <Typography variant={matches ? 'body2' : 'body1'}>
                    {t('products_and_services.cancer_screen_package.subdetail3')}
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.sectionSubBg}>
                {!matches && (
                  <Typography variant='h4' color='primary'>
                    <Box>{t('products_and_services.cancer_screen_package.pachages')}</Box>
                    <Box mb={8}> {t('products_and_services.cancer_screen_package.pachages2')}</Box>
                  </Typography>
                )}
                <Box display='flex' flexDirection={matches ? 'column-reverse' : 'row'} justifyContent='space-around'>
                  <Box lineHeight={3} ml={matches ? 2 : 0}>
                    {compass.map((item, index) => (
                      <Box key={index}>
                        <TitleDot />
                        <Box display='flex' alignItems='center'>
                          <Box fontSize={matches ? '13px' : '20px'} fontWeight={400} color='#1A285D'>
                            {t(item.name)}
                          </Box>
                          {item.object && (
                            <Box color='grey.800' flexShrink='0'>
                              <em>-{t(item.object)}</em>
                            </Box>
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Box width={!matches ? 337 : '100%'}>
                    <Box mr={matches ? 0 : 3}>
                      <ImageTranslation
                        className={classes.prophecyImgWrapper1}
                        filename='cancer_screen'
                        alt='cancer screen'
                        hasMobile={false}
                      ></ImageTranslation>
                    </Box>
                    {matches && (
                      <Box my={3}>
                        <Typography variant='h4' color='primary'>
                          {t('products_and_services.cancer_screen_package.pachages')}
                          {t('products_and_services.cancer_screen_package.pachages2')}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
                <Box mt={5} textAlign={isEn ? (matches ? 'left' : 'center') : 'center'}>
                  <Box fontSize='12px' color='grey.700'>
                    {t('products_and_services.cancer_screen_package.attention')}
                  </Box>
                </Box>
              </Box>
              <Box mt={matches ? 40 : 0}>
                <Typography variant='h4'>
                  <Box textAlign='center' color='secondary.main'>
                    {t('products_and_services.cancer_screen_package.subdetail4')}
                  </Box>
                </Typography>
                <Grid className={classes.btnWrapper} container spacing={2} justifyContent='center'>
                  <Grid item xs={matches ? 6 : 'auto'}>
                    <Button
                      variant='outlined'
                      color='primary'
                      href={addLangQuery()}
                      target='_blank'
                      fullWidth={matches}
                      id='RW_Ehealth_CancerScreening_1'
                      className={classes.btn}
                    >
                      {t('common.book_now')}
                    </Button>
                  </Grid>
                  <Grid item xs={matches ? 6 : 'auto'}>
                    <Link to='/service-location/'>
                      <Button
                        className={classes.btn}
                        variant='contained'
                        color='secondary'
                        fullWidth={matches}
                        id='RW_SL_CancerScreening_1'
                      >
                        {t('common.service_location')}
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Box>

              <Box className={classes.bannerWrapper} mt={10}>
                <StaticImage
                  className={classes.bannerBg}
                  src='../assets/images/products_services_banner_bg.jpg'
                  alt='homepage banner mobile'
                ></StaticImage>
                <Box className={classes.sectionOneBanner}>
                  {t('products_and_services.take2_prophecy.detection_process')}
                </Box>
              </Box>
              <Box className={classes.sectionOneContent} bgcolor='#fafafa'>
                <Box className={classes.stepsWrapper}>
                  {steps.map((step, index) => {
                    let curStep
                    if (matches) {
                      switch (index) {
                        case 2:
                          curStep = steps[3]
                          break
                        case 3:
                          curStep = steps[2]
                          break
                        default:
                          curStep = step
                          break
                      }
                    } else {
                      curStep = step
                    }
                    return (
                      <React.Fragment key={index}>
                        <Box
                          className={classnames(classes.stepItem, {
                            [classes.stepFiveItem]: index === 4,
                          })}
                        >
                          <Box className={classes.stepIcon}>{curStep.icon}</Box>
                          {matches && (
                            <Box color='primary.main' fontSize={20} mt={-3} zIndex={2}>
                              <em>{index + 1}</em>
                            </Box>
                          )}
                          <Box className={classes.stepLabel}>
                            <Box component='span'>
                              {t(curStep.label)}
                              {index === 3 && !matches && <sup>#</sup>}
                              {index === 2 && matches && <sup>#</sup>}
                            </Box>
                            {/* <Hidden smUp>
                              {index < steps?.length - 1 && (
                                <ArrowIcon
                                  className={classnames(classes.arrowIcon, {
                                    [classes.stepOneArrow]: index === 0,
                                    [classes.stepTwoArrow]: index === 1,
                                    [classes.stepThreeArrow]: index === 2,
                                    [classes.stepFourArrow]: index === 3,
                                  })}
                                ></ArrowIcon>
                              )}
                            </Hidden> */}
                          </Box>
                        </Box>
                        {/* <Hidden xsDown>
                          {index < steps?.length - 1 && <ArrowIcon className={classes.arrowIcon}></ArrowIcon>}
                        </Hidden> */}
                      </React.Fragment>
                    )
                  })}
                </Box>

                <Box className={classes.reportTip} my={3} mx={matches ? 2 : 0}>
                  {t('common.notice')} <br />
                  {matches && <br />}
                  {t('products_and_services.take2_prophecy.notice')} {matches && <br />} {matches && <br />}
                  {t('products_and_services.cancer_screen_package.contact')}
                  <br />
                  {matches && <br />}
                  <sup>#</sup>
                  {t('products_and_services.take2_prophecy.covid_notice')}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Container>
      <Box
        display='flex'
        justifyContent='center'
        flexDirection={matches ? 'column' : 'row'}
        alignItems='center'
        width='100%'
      >
        <ImageTranslation
          className={classes.prophecyImgWrapper}
          filename='cancer_screen'
          alt='cancer screen'
          hasMobile={false}
        ></ImageTranslation>
        <Box ml={matches ? 0 : 5} px={isEn ? 4 : 0}>
          <Typography variant='h5' component='div'>
            <Box pt={matches ? 5 : 14} color='prophecyPrimary.main'>
              {t('common.book_detection')}
            </Box>
            <Box mt={matches ? 1.5 : 2} mb={matches ? 5 : 7}>
              <Typography variant={matches ? 'body2' : 'body1'} color='textPrimary'>
                {t('products_and_services.take2_prophecy.do_you_have')}
              </Typography>
            </Box>
          </Typography>
        </Box>
      </Box>{' '}
      <Grid className={classes.btnWrapper} container spacing={2} justifyContent='center'>
        <Grid item xs={matches ? 5 : 'auto'}>
          <Button
            variant='outlined'
            color='primary'
            href={addLangQuery()}
            target='_blank'
            fullWidth={matches}
            className={classes.btn}
            id='RW_Ehealth_CancerScreening_2'
          >
            {t('common.book_now')}
          </Button>
        </Grid>
        <Grid item xs={matches ? 5 : 'auto'}>
          <Link to='/service-location/'>
            <Button
              className={classes.btn}
              variant='contained'
              color='secondary'
              fullWidth={matches}
              id='RW_SL_CancerScreening_2'
            >
              {t('common.service_location')}
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Box className={classes.reportTip} mb={matches ? 3 : 12} ml={matches ? 3 : 20} mt={10}>
        {t('cp_v2.contact_and_reference.paragraphs.4')} <br />
        {matches ? <br /> : null}
        1. "<em>Cancer Factsheet.</em>" World Health Organisation, February 2022, from
        https://www.who.int/news-room/fact-sheets/detail/cancer. Accessed 08 August 2022. <br />
        2. <em>Hong Kong Cancer Strategy 2019. </em>Department of Health, Food and Health Bureau, & Hospital Authority,
        July 2019.
      </Box>
    </Layout>
  )
}

export default CancerScreen
