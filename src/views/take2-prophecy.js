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
import useLangQuery from '@hooks/useLangQuery'
import ErrorIcon from '@material-ui/icons/Error'
import TitleDot from '@themes/components/TitleDot'
import ImageTranslation from '@components/ImageTranslation'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import RightIcon from '@images/icons/right.svg'

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
  { name: 'products_and_services.take2_prophecy.compass1', object: '' },
  { name: 'products_and_services.take2_prophecy.compass2', object: '' },
  { name: 'products_and_services.take2_prophecy.compass6', object: '' },
  {
    name: 'products_and_services.take2_prophecy.compass3',
    object: '',
  },
  {
    name: 'products_and_services.take2_prophecy.compass4',
    object: '',
  },
  {
    name: 'products_and_services.take2_prophecy.compass5',
    object: '',
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
    marginBottom: -100,
    padding: theme.spacing(0, 3),
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
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
      padding: theme.spacing(3, 2),
    },
  },
  sectionSubBg: {
    borderRadius: theme.spacing(1.5),
    marginTop: theme.spacing(7),
    marginLeft: theme.spacing(8.5),
    marginBottom: theme.spacing(10),
    backgroundColor: 'rgb(248, 249, 250)',
    [theme.breakpoints.down('xs')]: {
      background: '#FFF',
      boxShadow: ' 3px 4px 4px 1px rgba(0, 0, 0, 0.15)',
      marginTop: theme.spacing(37.5),
      marginBottom: theme.spacing(-32),
      marginLeft: 0,
      padding: theme.spacing(3),
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
      padding: theme.spacing(3, 0.5),
      justifyContent: 'flex-start',
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
    fontSize: 20,
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
  reportTop2: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(3, 0, 8, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      margin: theme.spacing(2, 0, 4, 0),
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
  mark: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '13px',
    },
  },
  prophecyImgWrapper: {
    overflow: 'hidden',
    width: 400,
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  table: {
    width: '100%',
    paddingBottom: 50,
    margin: theme.spacing(10, 0),
    paddingTop: theme.spacing(3),
    background: '#FFF',
    boxShadow: ' 3px 4px 4px 1px rgba(0, 0, 0, 0.15)',
    borderRadius: '50px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '20px',
      marginTop: theme.spacing(40),
      marginBottom: 0,
    },
  },
  tableTitle: {
    fontSize: theme.spacing(4),
    color: theme.palette.secondary.main,
    fontWeight: 900,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(2.5),
    },
  },
  prophecyImgWrapper1: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
    height: 530,
    [theme.breakpoints.down('xs')]: {
      height: 300,
      width: 580,
    },
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
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
    margin: theme.spacing(4, 0),
    '& a': {
      textDecoration: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(3, 0),
      // width: '380px',
    },
  },
  reportTip: {
    color: '#818181',
    fontSize: theme.typography.caption.fontSize,
    padding: theme.spacing(0, 6),
    marginTop: theme.spacing(10),
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
  const reference = [
    {
      ref: (
        <span>
          Chan, K. C. Allen, et al. “Analysis of Plasma Epstein–Barr Virus DNA to Screen for Nasopharyngeal Cancer.”
          <em>New England Journal of Medicine</em>, vol. 377, no. 6, 2017, pp. 513–22.
        </span>
      ),
    },
    {
      ref: (
        <span>
          Lam, W. K. Jacky, et al. “Sequencing-Based Counting and Size Profiling of Plasma Epstein–Barr Virus DNA
          Enhance Population Screening of Nasopharyngeal Carcinoma.”{' '}
          <em>Proceedings of the National Academy of Sciences</em>, vol. 115, no. 22, 2018, pp. E5115–24.
        </span>
      ),
    },
    {
      ref: (
        <span>
          <em>Hong Kong Cancer Registry.</em> Hong Kong Hospital Authority, www3.ha.org.hk/cancereg/. Accessed 23 May
          2021.
        </span>
      ),
    },
    {
      ref: (
        <span>
          <em>Overview of Hong Kong Cancer Statistics of 2018.</em> Hong Kong Hospital Authority, October 2020.
        </span>
      ),
    },
    {
      ref: (
        <span>
          Chang, Kai-Ping, et al. “Complementary Serum Test of Antibodies to Epstein-Barr Virus Nuclear Antigen-1 and
          Early Antigen: A Possible Alternative for Primary Screening of Nasopharyngeal Carcinoma.”
          <em>Oral Oncology</em>,vol. 44, no. 8, 2008, pp. 784–92.
        </span>
      ),
    },
    {
      ref: (
        <span>
          Tay, Joshua K., et al. “Screening in Nasopharyngeal Carcinoma: Current Strategies and Future Directions.”
          <em>Current Otorhinolaryngology Reports,</em> vol. 2, no. 1, 2013, pp. 1–7.
        </span>
      ),
    },
  ]
  return (
    <>
      <Container className={classes.root} disableGutters maxWidth='xl'>
        <Box className={classes.wrapper}>
          <Container className={classes.content} disableGutters maxWidth='md'>
            <Box className={classes.title}>
              <Typography variant='h4' color='primary'>
                {t('products_and_services.take2_prophecy.title')}
              </Typography>
              <Box mt={matches ? 2.5 : 3} textAlign='justify' mx={matches ? 2 : 22}>
                <Typography variant={matches ? 'body2' : 'body1'} color='textPrimary'>
                  <Trans i18nKey='products_and_services.take2_prophecy.detail'>
                    .<sup>.</sup>.
                  </Trans>
                </Typography>
              </Box>
              <Box mt={matches ? 2.5 : 3} textAlign='left' mx={matches ? 2 : 22}>
                <Typography variant={matches ? 'body2' : 'body1'} color='textPrimary'>
                  {t('products_and_services.take2_prophecy.detail2')}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.sectionOneWrapper}>
              <Box className={classes.sectionOneBg}>
                <Typography variant='h4'>
                  <Box textAlign='center' lineHeight={1.5}>
                    {t('products_and_services.take2_prophecy.subTitle')}
                  </Box>
                </Typography>
                <Box display='flex' justifyContent='center' flexDirection={matches ? 'column' : 'row'}>
                  <Box className={classes.subBox} mr={2} color='primary.main' justifyContent='center'>
                    <ErrorIcon color='red' />
                    <Box ml={1}>
                      <Trans i18nKey='products_and_services.take2_prophecy.subDetail1'>
                        .<sup>.</sup>.
                      </Trans>
                    </Box>
                  </Box>
                  <Box className={classes.subBox} color='primary.main'>
                    <ErrorIcon pr={2} />
                    <Box ml={1}>{t('products_and_services.take2_prophecy.subDetail2')}</Box>
                  </Box>
                </Box>
                <Box mt={1} py={2} textAlign='justify' px={matches ? 2 : 30}>
                  <Typography variant={matches ? 'body2' : 'body1'}>
                    <Trans i18nKey='products_and_services.take2_prophecy.subDetail3'>
                      .<span style={{ textDecoration: 'underline' }}>.</span>.
                    </Trans>
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.sectionSubBg}>
                {!matches && (
                  <Box mb={3}>
                    <Typography variant='h4' color='primary'>
                      {t('products_and_services.take2_prophecy.feature')}
                    </Typography>
                  </Box>
                )}
                <Box display='flex' flexDirection={matches ? 'column-reverse' : 'row'} justifyContent='space-around'>
                  <Box lineHeight={3} ml={matches ? 2 : 0}>
                    {compass.map((item, index) => (
                      <Box key={index}>
                        <TitleDot />
                        <Box display='flex' alignItems='center'>
                          <Box fontSize={matches ? '13px' : '20px'} fontWeight={400} color='#1A285D'>
                            <Trans i18nKey={item.name}>
                              .<sup>.</sup>.
                            </Trans>
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
                  <Box flexShrink={0} width={!matches ? '40%' : '100%'}>
                    <Box mr={matches ? 0 : 3}>
                      <ImageTranslation
                        className={classes.avatar}
                        filename='take2_prophecy'
                        alt='take2_prophecy'
                        hasMobile={false}
                      ></ImageTranslation>
                    </Box>
                    {matches && (
                      <Box my={3}>
                        <Typography variant='h4' color='primary'>
                          {t('products_and_services.take2_prophecy.feature')}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
                <Box mt={matches ? 2 : 0} marginLeft={matches ? '-20px' : 0}>
                  <Grid className={classes.btnWrapper} container spacing={2} justifyContent='center'>
                    <Grid item xs={matches ? 6 : 'auto'}>
                      <Button
                        variant='contained'
                        color='secondary'
                        href={addLangQuery()}
                        target='_blank'
                        fullWidth={matches}
                        id='RW_Ehealth_Prophecy_1'
                        className={classes.btn}
                      >
                        {t('common.book_now')}
                      </Button>
                    </Grid>
                    <Grid item xs={matches ? 6 : 'auto'}>
                      <Link to='/service-location/'>
                        <Button
                          className={classes.btn}
                          variant='outlined'
                          color='primary'
                          fullWidth={matches}
                          id='RW_SL_Prophecy_1'
                        >
                          {t('common.service_location')}
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Box className={classes.table}>
                <Box className={classes.tableTitle} ml={matches ? 1 : 10} mb={3}>
                  {t('products_and_services.take2_prophecy.tableTitle')}
                </Box>
                <Box height={matches ? 300 : 560} overflow={matches ? 'scroll' : ''}>
                  <ImageTranslation
                    className={classes.prophecyImgWrapper1}
                    filename='take2_prophecy_table'
                    alt='take2_prophecy_table'
                    hasMobile={false}
                    objectFit='contain'
                  ></ImageTranslation>
                </Box>
              </Box>
              <Box className={classes.tableTitle} ml={matches ? 0 : 10} my={3} textAlign='center'>
                <Trans i18nKey='products_and_services.take2_prophecy.tableBottom'>
                  .<sup style={{ fontWeight: '700', fontSize: '16px' }}>.</sup>.
                </Trans>
              </Box>
              <Box>
                <Grid className={classes.btnWrapper} container spacing={2} justifyContent='center'>
                  <Grid item xs={matches ? 6 : 'auto'}>
                    <Button
                      variant='contained'
                      color='secondary'
                      href={addLangQuery()}
                      target='_blank'
                      fullWidth={matches}
                      id='RW_Ehealth_Prophecy_2'
                      className={classes.btn}
                    >
                      {t('common.book_now')}
                    </Button>
                  </Grid>
                  <Grid item xs={matches ? 6 : 'auto'}>
                    <Link to='/service-location/'>
                      <Button
                        className={classes.btn}
                        variant='outlined'
                        color='primary'
                        fullWidth={matches}
                        id='RW_SL_Prophecy_2'
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
                          curStep = steps[2]
                          break
                        case 3:
                          curStep = steps[3]
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
                        <Hidden xsDown>
                          {index < steps?.length - 1 && <ArrowIcon className={classes.arrowIcon}></ArrowIcon>}
                        </Hidden>
                      </React.Fragment>
                    )
                  })}
                </Box>
                {!matches && (
                  <Box
                    fontWeight={matches ? 'fontWeightBold' : 'fontWeightMedium'}
                    textAlign='center'
                    mb={matches ? 4 : 3}
                    mt={matches ? 1 : 8}
                    color='primary.main'
                    fontSize='body1.fontSize'
                  >
                    {t('products_and_services.take2_prophecy.process.4')}:
                  </Box>
                )}
                <ImageList rowHeight='auto' cols={matches ? 1 : 2} gap={matches ? 16 : 24}>
                  {reports.map((report, index) => (
                    <ImageListItem
                      key={index}
                      classes={{
                        item: classes.imageListItemItem,
                      }}
                      className={classes.imageListItem}
                    >
                      <Box className={classes.reportItem}>
                        <Box className={index === 1 && isEn ? classes.reportTop2 : classes.reportTop}>
                          <Box
                            className={classes.reportType}
                            style={{
                              color: report.color,
                            }}
                          >
                            {t(report.result)}
                            <RightIcon
                              className={classnames(classes.rightIcon, index === 1 && classes.greenRightIcon)}
                            ></RightIcon>
                          </Box>
                          {t(report.suggestion)}
                        </Box>
                        <Box className={classes.mark}>{t(report.mark)}</Box>
                      </Box>
                    </ImageListItem>
                  ))}
                </ImageList>
                <Box className={classes.reportTip}>
                  {t('common.notice')} <br />
                  {t('products_and_services.take2_prophecy.notice')}
                  <br /> <br />
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
        mt={matches ? -55 : -45}
      >
        {!matches && (
          <ImageTranslation
            className={classes.prophecyImgWrapper}
            filename='take2_prophecy'
            alt='take2_prophecy'
            hasMobile={false}
          ></ImageTranslation>
        )}
        <Box ml={matches ? 0 : 5} px={isEn ? 4 : 0}>
          <Typography variant='h5' component='div'>
            <Box pt={matches ? 5 : 10} color='prophecyPrimary.main'>
              {t('common.book_detection')}
            </Box>
            <Box mt={matches ? 1.5 : 2} mb={matches ? 5 : 7}>
              <Typography variant={matches ? 'body2' : 'body1'} color='textPrimary'>
                {t('products_and_services.take2_prophecy.do_you_have_npc')}
              </Typography>
            </Box>
          </Typography>{' '}
          <Box ml={-3}>
            <Grid className={classes.btnWrapper} container spacing={2} justifyContent='center'>
              <Grid item xs={matches ? 6 : 'auto'}>
                <Button
                  variant='contained'
                  color='secondary'
                  href={addLangQuery()}
                  target='_blank'
                  fullWidth={matches}
                  className={classes.btn}
                  id='RW_Ehealth_Prophecy_3'
                >
                  {t('common.book_now')}
                </Button>
              </Grid>
              <Grid item xs={matches ? 6 : 'auto'}>
                <Link to='/service-location/'>
                  <Button
                    variant='outlined'
                    color='primary'
                    className={classes.btn}
                    fullWidth={matches}
                    id='RW_SL_Prophecy_3'
                  >
                    {t('common.service_location')}
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>{' '}
      <Box className={classes.reportTip} mb={matches ? 3 : 12} ml={matches ? 3 : 20} mt={10}>
        {t('products_and_services.health_check.reference')} <br />
        {matches ? <br /> : null}
        {reference?.map((item, index) => (
          <Box display='flex'>
            <Box> {index + 1}. </Box>
            <Box>{item.ref}</Box>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default CancerScreen
