import React, { useState } from 'react'
import { makeStyles, Container, Typography, alpha, useTheme, useMediaQuery, Grid, Button } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Link from '@components/Link'
import classnames from 'classnames'
import { useI18next, Trans } from 'gatsby-plugin-react-i18next'
import useLangQuery from '@hooks/useLangQuery'
import { WHATS_APP_LINK, SERVICE_EMAIL, SERVICE_PHONE } from '../components/CampaignV2/utils/constant'
import ImageTranslation from '@components/ImageTranslation'
import MailIcon from '../components/CampaignV2/images/mail.svg'
import PhoneIcon from '../components/CampaignV2/images/phone.svg'
import WhatsAppIcon from '../components/CampaignV2/images/WhatsApp.svg'
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.grey[100],
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
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(5),
    },
  },
  sectionOneBg: {
    borderRadius: theme.spacing(1.5),
    height: 'auto',
    padding: theme.spacing(5, 0),
    background: 'linear-gradient(97.6deg, #40C6A6 18.64%, rgba(64, 198, 166, 0.5) 99.43%)',
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      padding: theme.spacing(3, 3),
    },
  },

  subBox: {
    width: theme.spacing(38),
    background: '#fff',
    borderRadius: 10,
    marginTop: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: 700,
    alignItems: 'flex-start',
    flexDirection: 'column',
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
    maxWidth: theme.spacing(98),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(58),
      overflowX: 'scroll',
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
    maxWidth: '200px',
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
  prophecyImgWrapper: {
    overflow: 'hidden',
    width: 350,
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
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
  icon: {
    display: 'flex',
    width: theme.spacing(6),
    height: theme.spacing(6),
    background: 'rgba(64, 198, 166, 0.12)',
    borderRadius: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    '& path': { fill: '#40C6A6' },
  },
}))

const Take2Clarity = () => {
  const classes = useStyles()
  const { t, language } = useI18next()
  const isEn = language === 'en'
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const addLangQuery = useLangQuery()
  const CONTACT_LIST = [
    {
      name: t('products_and_services.take2_clarity.tel'),
      title: SERVICE_PHONE,
      href: SERVICE_PHONE,
      icon: <PhoneIcon />,
      id: 'ECP_Contact_Telephone',
    },
    {
      name: 'WhatsApp',
      href: '(852) 5377 0823',
      icon: <WhatsAppIcon />,
      id: 'ECP_Contact_Whatapp',
    },

    {
      name: t('form.email.label'),
      title: SERVICE_EMAIL,
      href: SERVICE_EMAIL,
      icon: <MailIcon />,
      id: 'ECP_Contact_Email',
    },
  ]
  return (
    <>
      <Container className={classes.root} disableGutters maxWidth='xl'>
        <Box className={classes.wrapper}>
          <Container className={classes.content} disableGutters maxWidth='md'>
            <Box className={classes.title}>
              <h1>
                <Typography variant='h4' color='primary'>
                  {t('menu.take2_clarity')}
                </Typography>
              </h1>
              <Box
                mt={matches ? 2.5 : 3}
                textAlign='center'
                bgcolor='rgba(64, 198, 166, 0.12)'
                minHeight={96}
                borderRadius={15}
                display={matches ? 'block' : 'flex'}
                alignItems='center'
                justifyContent='center'
                fontSize={matches ? 16 : 20}
                color='#184D40'
                mb={4}
                py={matches && 3}
              >
                <Trans i18nKey='products_and_services.take2_clarity.subtitle'>
                  .
                  <Box fontWeight={700} component='span' px={0.5} fontSize={matches ? 16 : 20}>
                    .
                  </Box>
                  .
                </Trans>
              </Box>{' '}
              <Typography variant={matches ? 'body2' : 'body1'} color='textPrimary' textAlign='center'>
                {t('products_and_services.take2_clarity.subtitle2')}
              </Typography>
            </Box>
            <Box className={classes.sectionOneWrapper}>
              <Box className={classes.sectionOneBg}>
                <Typography variant='h4'>
                  <Box textAlign='center' lineHeight={1.5}>
                    {t('products_and_services.take2_clarity.box_title')}
                  </Box>
                </Typography>
                <Box
                  display='flex'
                  justifyContent='center'
                  flexDirection={matches ? 'column' : 'row'}
                  mx={matches ? 0 : 2}
                >
                  <Box className={classes.subBox} color='primary.main'>
                    <Box display='flex' alignItems='center' mb={2} mt={0}>
                      <Box height={16} width={20} bgcolor='secondary.main' />
                      <Box ml={1}>
                        <Box fontSize={16} mb={0}>
                          {t('products_and_services.take2_clarity.box1.title')}
                        </Box>
                      </Box>
                    </Box>
                    <Box ml={3} fontSize={14} fontWeight={400}>
                      <Trans i18nKey='products_and_services.take2_clarity.box1.intro'>
                        .
                        <Box fontWeight={700} component='span'>
                          .
                        </Box>
                        .
                      </Trans>
                    </Box>
                  </Box>
                  <Box className={classes.subBox} color='primary.main' mx={matches ? 0 : 2}>
                    <Box display='flex' alignItems='center' mb={2} mt={0}>
                      <Box height={16} width={16} bgcolor='secondary.main' />
                      <Box ml={1}>
                        <Box fontSize={16} mb={0}>
                          {t('products_and_services.take2_clarity.box2.title')}
                        </Box>
                      </Box>
                    </Box>
                    <Box ml={3} fontSize={14} fontWeight={400}>
                      <Trans i18nKey='products_and_services.take2_clarity.box2.intro'>
                        .
                        <Box fontWeight={700} component='span'>
                          .
                        </Box>
                        .
                      </Trans>
                    </Box>
                  </Box>
                  <Box className={classes.subBox} color='primary.main'>
                    <Box display='flex' justifyContent='center' alignItems='center' mt={-1}>
                      <Box height={16} width={16} bgcolor='secondary.main' />
                      <Box ml={1} pt={1}>
                        <Box fontSize={16} mb={1}>
                          {t('products_and_services.take2_clarity.box3.title')}
                        </Box>
                      </Box>
                    </Box>
                    <Box ml={3} fontSize={14} fontWeight={400}>
                      {' '}
                      <Trans i18nKey='products_and_services.take2_clarity.box3.intro'>
                        .
                        <Box fontWeight={700} component='span'>
                          .
                        </Box>
                        .
                      </Trans>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.tableContainer} mt={matches ? 2 : 5} pt={7} bgcolor={matches ? null : '#ffff'}>
                <Box fontWeight={900} fontSize={matches ? 18 : 24} color='primary.main' textAlign='center'>
                  {t('products_and_services.take2_clarity.table_title')}
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center'>
                  <Box textAlign='center' mt={2} overflow={matches ? 'scroll' : ''} width='100%'>
                    <Box overflow='scroll' position='relative' className={classes.tableImgContainer}>
                      <ImageTranslation
                        className={classes.tableImg}
                        filename='take2_clarity'
                        alt='Take2 Clarity'
                        hasMobile={false}
                      ></ImageTranslation>
                    </Box>
                    <Box fontSize={matches ? 16 : 20} fontWeight={400} mt={5} color='primary.main'>
                      <Trans i18nKey='products_and_services.take2_clarity.table_intro'>
                        .
                        <Box fontWeight={700} component='span'>
                          .
                        </Box>
                        .
                      </Trans>
                    </Box>
                  </Box>
                </Box>{' '}
              </Box>
              <Box textAlign='center' fontWeight={700} fontSize={matches ? 18 : 20} color='primary.main' mt={6}>
                {t('menu.contact_us')}
              </Box>
              <Box display={matches ? 'block' : 'flex'} mt={3} justifyContent='center'>
                {CONTACT_LIST.map((item, index) => (
                  <Box
                    key={index}
                    boxShadow=' 0px 0px 2px rgba(0, 0, 0, 0.22)'
                    borderRadius={8}
                    mr={matches ? 0 : 2}
                    mb={matches ? 2 : 0}
                    py={2}
                    px={3}
                    display='flex'
                    alignItems='center'
                    id={item.id}
                  >
                    <Box mr={1} flexShrink={0} bgcolor='#40C6A6' className={classes.icon}>
                      {item.icon}
                    </Box>
                    <Box
                      fontSize='body1.fontSize'
                      fontWeight='fontWeightBold'
                      component='span'
                      display='flex'
                      flexDirection='column'
                      color='grey.700'
                    >
                      {item.name}
                      <Box component='span' my={0.5} color='grey.900' fontWeight='400'>
                        {item.href}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box>
                <Grid className={classes.btnWrapper} container spacing={2} justifyContent='center'>
                  <Grid item xs={matches ? 12 : 'auto'}>
                    <Button
                      variant='contained'
                      color='secondary'
                      href='https://take2health.net/pdfs/ClarityPatientLeaflet_website_20221219.pdf'
                      target='_blank'
                      fullWidth={matches}
                      id='RW_PDF_ClarityProductLeaflet'
                      className={classes.btn}
                    >
                      {matches
                        ? t('products_and_services.take2_clarity.downland_mobile')
                        : t('products_and_services.take2_clarity.downland')}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>
      </Container>

      <Box className={classes.reportTip} mb={matches ? 3 : 12} ml={matches ? 3 : 20} mt={10}>
        {t('products_and_services.health_check.reference')} <br />
        {matches ? <br /> : null}
        <Box display='flex'>
          <Box pr={1}>1.</Box>
          <Box>
            Chan, D.C.T., et al."Improved risk stratification of nasopharyngeal cancer by targeted sequencing of
            Epstein-Barr virus DNA in post-treatment plasma.<em>Annals of Oncology</em> , 2022.
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Take2Clarity
