import React, { useState } from 'react'
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
import More from '@images/icons/table_more.svg'
import classnames from 'classnames'
import { useI18next, Trans } from 'gatsby-plugin-react-i18next'
import Layout from '@layouts/Layout'
import useLangQuery from '@hooks/useLangQuery'
import ErrorIcon from '@material-ui/icons/Error'
import TitleDot from '@themes/components/TitleDot'
import ImageTranslation from '@components/ImageTranslation'

const steps = [
  {
    label: 'products_and_services.health_check.step1',
    icon: (
      <StaticImage
        src='../assets/images/icons/healthCheck/step_1.svg'
        placeholder='tracedSVG'
        alt='step 01'
      ></StaticImage>
    ),
  },
  {
    label: 'products_and_services.health_check.step2',
    icon: (
      <StaticImage
        src='../assets/images/icons/healthCheck/step_2.svg'
        placeholder='tracedSVG'
        alt='step 02'
      ></StaticImage>
    ),
  },
  {
    label: 'products_and_services.health_check.step3',
    icon: (
      <StaticImage
        src='../assets/images/icons/healthCheck/step_3.svg'
        placeholder='tracedSVG'
        alt='step 03'
      ></StaticImage>
    ),
  },
  {
    label: 'products_and_services.health_check.step4',
    icon: (
      <StaticImage
        src='../assets/images/icons/healthCheck/step_4.svg'
        placeholder='tracedSVG'
        alt='step 04'
      ></StaticImage>
    ),
  },
  {
    label: '醫生為病人講解報告',
    icon: (
      <StaticImage
        src='../assets/images/icons/healthCheck/step_5.svg'
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
      marginBottom: theme.spacing(2.5),
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
    width: theme.spacing(35),
    background: '#fff',
    borderRadius: 10,
    marginTop: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: 700,
    alignItems: 'flex-start',
    padding: theme.spacing(2, 2),
    '& path': {
      fill: theme.palette.error.main,
    },
    [theme.breakpoints.down('xs')]: {
      // height: theme.spacing(1),
      width: '100%',
    },
  },
  tableContainer: {
    height: 'auto',
    borderRadius: '50px',
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      borderRadius: '25px',
      overflow: 'hidden',

      paddingBottom: theme.spacing(5),
    },
  },

  tableImg: {
    display: 'inline-block',
    overflow: 'hidden',
    maxWidth: theme.spacing(98),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(42),
    },
  },
  more: {
    background: 'linear-gradient(180deg,rgba(255,255,255,0.2),#FFFFFF)',
    height: 250,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    textAlign: 'center',
    fontWeight: 700,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      height: 135,
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

const HealthCheck = () => {
  const classes = useStyles()
  const { t, language } = useI18next()
  const isEn = language === 'en'
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const addLangQuery = useLangQuery()
  const [more, setMore] = useState(1)

  return (
    <Layout>
      <Container className={classes.root} disableGutters maxWidth='xl'>
        <Box className={classes.wrapper}>
          <Container className={classes.content} disableGutters maxWidth='md'>
            <Box className={classes.title}>
              <Typography variant='h4' color='primary'>
                {t('menu.health_check_package')}
              </Typography>
              <Box mt={matches ? 2.5 : 3} textAlign='center'>
                <Typography variant={matches ? 'body2' : 'body1'} color='textPrimary'>
                  {t('products_and_services.health_check.title_intro')}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.sectionOneWrapper}>
              <Box className={classes.sectionOneBg}>
                <Typography variant='h4'>
                  <Box textAlign='center' lineHeight={1.5}>
                    {t('products_and_services.health_check.sub_title_intro')}
                  </Box>
                </Typography>
                <Box display='flex' justifyContent='center' flexDirection={matches ? 'column' : 'row'}>
                  <Box className={classes.subBox} color='primary.main' justifyContent='center'>
                    <ErrorIcon color='red' />
                    <Box ml={1}>
                      <Box fontSize={20} mb={2}>
                        {t('products_and_services.health_check.box1.title')}
                      </Box>
                      {t('products_and_services.health_check.box1.intro')}
                    </Box>
                  </Box>
                  <Box className={classes.subBox} color='primary.main' mx={matches ? 0 : 2}>
                    <ErrorIcon pr={2} />
                    <Box ml={1}>
                      <Box fontSize={20} mb={2}>
                        {t('products_and_services.health_check.box2.title')}
                      </Box>
                      <Trans i18nKey='products_and_services.health_check.box2.intro'>
                        .<sup>.</sup>.
                      </Trans>
                    </Box>
                  </Box>
                  <Box className={classes.subBox} color='primary.main'>
                    <ErrorIcon pr={2} />
                    <Box ml={1}>
                      <Box fontSize={20} mb={2}>
                        {t('products_and_services.health_check.box3.title')}
                      </Box>
                      {t('products_and_services.health_check.box3.intro')}
                    </Box>
                  </Box>
                </Box>
                <Box mt={1} py={2} textAlign={isEn ? (matches ? 'left' : 'center') : 'center'}>
                  <Typography variant={matches ? 'body2' : 'body1'}>
                    {t('products_and_services.health_check.box_conclusion')}
                  </Typography>
                </Box>
              </Box>
              <Box mt={matches ? 40 : 0}>
                <Grid className={classes.btnWrapper} container spacing={2} justifyContent='center'>
                  <Grid item xs={matches ? 6 : 'auto'}>
                    <Button
                      variant='contained'
                      color='secondary'
                      href={addLangQuery()}
                      target='_blank'
                      fullWidth={matches}
                      id='RW_Ehealth_HealthCheckPackage_1'
                      className={classes.btn}
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
                        id='RW_SL_HealthCheckPackage_1'
                      >
                        {t('common.service_location')}
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
              <Box className={classes.tableContainer} mt={matches ? 2 : 7} pt={7} bgcolor={matches ? null : '#ffff'}>
                <Box
                  fontWeight={900}
                  fontSize={matches ? 16 : 24}
                  color='secondary.main'
                  ml={matches ? 3 : 14}
                  mb={matches ? 1 : 3}
                >
                  {t('products_and_services.health_check.table_title')}
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center'>
                  <Box textAlign='center' mt={2} overflow={matches ? 'scroll' : ''} width='100%'>
                    <Box
                      height={more ? (matches ? 300 : 600) : 'auto'}
                      overflow='hidden'
                      position='relative'
                      className={classes.tableImgContainer}
                    >
                      <ImageTranslation
                        className={classes.tableImg}
                        filename='health_check_table'
                        alt='health_check_table'
                        hasMobile={false}
                      ></ImageTranslation>

                      {more && (
                        <Box
                          position='absolute'
                          top={more ? (matches ? 165 : 350) : 900}
                          left='50%'
                          className={classes.more}
                        >
                          <Box onClick={() => setMore(!more)} id='RW_HealthCheckPackage_ReadMore'>
                            <Box mb={matches ? 2 : 4} mt={matches ? 8 : 20}>
                              {t('common.view_more')}
                            </Box>
                            <More height={24} />
                          </Box>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>{' '}
                <Box fontSize='12px' fontWeight={700} color='primary.main' mt={5} ml={2} textAlign='center'>
                  {t('products_and_services.health_check.table_mark')}{' '}
                </Box>
              </Box>
              <Box
                fontSize={matches ? 18 : 32}
                color='secondary.main'
                fontWeight={700}
                textAlign='center'
                mt={matches ? 3 : 10}
              >
                {t('products_and_services.health_check.table_conclusion')}
                <br />
                {t('products_and_services.health_check.table_conclusion2')}
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
                      id='RW_Ehealth_HealthCheckPackage_2'
                      className={classes.btn}
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
                        id='RW_SL_HealthCheckPackage_2'
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

                <Box className={classes.reportTip} my={3} mx={matches ? 2 : 0}>
                  {t('common.notice')} <br />
                  {matches && <br />}
                  {t('products_and_services.health_check.notice')} {matches && <br />} {matches && <br />}
                  {t('products_and_services.cancer_screen_package.contact')}
                  <br />
                  {matches && <br />}
                  <sup>#</sup>
                  {t('products_and_services.health_check.notice2')}
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
        {!matches && (
          <ImageTranslation
            className={classes.prophecyImgWrapper}
            filename='product_healthCheck'
            alt='product_healthCheck'
            hasMobile={false}
          ></ImageTranslation>
        )}
        <Box ml={matches ? 0 : 5} px={isEn ? 4 : 0}>
          <Typography variant='h5' component='div'>
            <Box pt={matches ? 0 : 14} color='prophecyPrimary.main'>
              {t('common.book_detection')}
            </Box>
            <Box mt={matches ? 1.5 : 2} mb={matches ? 5 : 7}>
              <Typography variant={matches ? 'body2' : 'body1'} color='textPrimary'>
                {t('products_and_services.take2_prophecy.do_you_have')}
              </Typography>
            </Box>
          </Typography>{' '}
          <Box width={matches ? 300 : 'auto'}>
            <Grid className={classes.btnWrapper} container spacing={2} justifyContent='center'>
              <Grid item xs={matches ? 5 : 'auto'}>
                <Button
                  variant='contained'
                  color='secondary'
                  href={addLangQuery()}
                  target='_blank'
                  fullWidth={matches}
                  className={classes.btn}
                  id='RW_Ehealth_HealthCheckPackage_3'
                >
                  {t('common.book_now')}
                </Button>
              </Grid>
              <Grid item xs={matches ? 5 : 'auto'}>
                <Link to='/service-location/'>
                  <Button
                    className={classes.btn}
                    variant='outlined'
                    color='primary'
                    fullWidth={matches}
                    id='RW_SL_HealthCheckPackage_3'
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
        {t('cp_v2.contact_and_reference.paragraphs.4')} <br />
        {matches ? <br /> : null}
        <Box display='flex'>
          <Box> 1. </Box>
          <Box>{t('products_and_services.health_check.ref')}</Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default HealthCheck
