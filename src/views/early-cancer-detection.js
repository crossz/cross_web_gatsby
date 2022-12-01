import React from 'react'
import { makeStyles, Container, Typography, alpha, useTheme, useMediaQuery, Grid } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import TitleDot from '@themes/components/TitleDot'
import { StaticImage } from 'gatsby-plugin-image'
import AlertIcon from '@images/icons/alert.svg'
import classnames from 'classnames'
import { useI18next, Trans } from 'gatsby-plugin-react-i18next'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(9.5),
    paddingBottom: theme.spacing(26.75),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1.5),
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(15),
    },
  },
  sectionOneBg: {
    borderRadius: theme.spacing(1.5),
    height: 294,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(-30),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(-32),
    },
  },
  rightLine: {
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(9),
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1,
    '&:before': {
      content: '""',
      display: 'inline-block',
      width: 3,
      height: 22,
      marginBottom: -3,
      marginRight: theme.spacing(1.5),
      backgroundColor: theme.palette.primary.contrastText,
    },
    [theme.breakpoints.down('xs')]: {
      lineHeight: 1.5,
      fontSize: theme.typography.h6.fontSize,
      marginBottom: theme.spacing(3),
    },
  },
  icon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginTop: theme.spacing(-0.4),
    flexShrink: 0,
    '& path:first-child': {
      fill: theme.palette.secondary.main,
    },
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(2),
    },
  },
  centerDataWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: theme.spacing(0, -1.5),
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      margin: 0,
      height: 'auto',
    },
  },
  centerDataItem: {
    padding: theme.spacing(3),
    paddingRight: theme.spacing(2),
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: theme.spacing(1.5),
    color: theme.palette.primary.main,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    boxShadow: ` 0px 12px 30px -10px ${alpha(theme.palette.common.black, 0.03)}`,
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin: 0,
      marginBottom: theme.spacing(1),
      padding: theme.spacing(3, 2),
      fontSize: theme.typography.body2.fontSize,
    },
  },
  lastCenterDataItem: {
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    },
  },
  sectionTwo: {
    borderRadius: theme.spacing(1.5),
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
    marginTop: theme.spacing(21.25),
    padding: theme.spacing(0, 2.5),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(11.5),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(9.25),
      paddingTop: theme.spacing(4.75),
      paddingBottom: theme.spacing(5),
    },
  },
  reasonsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(0, -1.5),
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  reasonItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(0, 1.5),
    width: `calc(${(1 / 3) * 100}% - ${theme.spacing(1 / 5)}px)`,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin: 0,
      marginBottom: theme.spacing(4),
    },
  },
  tips: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(1.5),
    fontSize: theme.typography.body1.fontSize,
    padding: theme.spacing(4.25),
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    marginTop: theme.spacing(12),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(8),
      fontSize: theme.typography.body2.fontSize,
      padding: theme.spacing(2.5, 3),
      textAlign: 'center',
    },
  },
}))

const centerData = [
  'our_technologies.early_cancer_detection.center_data.0',
  'our_technologies.early_cancer_detection.center_data.1',
  'our_technologies.early_cancer_detection.center_data.2',
]

const references = [
  'our_technologies.early_cancer_detection.references.0',
  'our_technologies.early_cancer_detection.references.1',
  'our_technologies.early_cancer_detection.references.2',
]

const EarlyCancerDetection = () => {
  const classes = useStyles()
  const { language, t } = useI18next()
  const isEn = language === 'en'
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  const reasons = [
    {
      icon: <StaticImage src='../assets/images/icons/reason/symptoms.svg' alt='symptoms'></StaticImage>,
      title: t('our_technologies.early_cancer_detection.reasons.0.title'),
      content: t('our_technologies.early_cancer_detection.reasons.0.content'),
    },
    {
      icon: <StaticImage src='../assets/images/icons/reason/vaccine.svg' alt='vaccine'></StaticImage>,
      title: t('our_technologies.early_cancer_detection.reasons.1.title'),
      content: t('our_technologies.early_cancer_detection.reasons.1.content'),
    },
    {
      icon: <StaticImage src='../assets/images/icons/reason/pills.svg' alt='pills'></StaticImage>,
      title: t('our_technologies.early_cancer_detection.reasons.2.title'),
      content: t('our_technologies.early_cancer_detection.reasons.2.content'),
    },
  ]
  return (
    <Box bgcolor='background.paper'>
      <Container className={classes.root} maxWidth='md'>
        <Typography component='div'>
          <Box textAlign='center' mb={6}>
            <Typography variant='h4' color='primary'>
              {t('our_technologies.early_cancer_detection.title')}
            </Typography>
          </Box>
          <Box className={classes.sectionOneBg}></Box>
          <Box px={3}>
            <Container disableGutters maxWidth='sm'>
              <Box mb={matches ? 2 : 2.5}>
                <Typography variant='h6' color='secondary'>
                  {t('our_technologies.early_cancer_detection.do_you_know')}
                </Typography>
              </Box>
              <Box className={classes.rightLine}>
                {t('our_technologies.early_cancer_detection.do_you_know_content')}
              </Box>
              <Box fontSize='body1.fontSize' color='primary.contrastText' mb={matches ? 3 : 4.5}>
                {t('our_technologies.early_cancer_detection.center_data_title')}
              </Box>
              <Box className={classes.centerDataWrapper}>
                <Grid container spacing={matches ? 0 : 3}>
                  <Grid item sm={6}>
                    <Box className={classnames(classes.centerDataItem)} mb={3}>
                      <AlertIcon className={classes.icon}></AlertIcon>
                      {t(centerData[0])}
                    </Box>
                    <Box className={classes.centerDataItem}>
                      <AlertIcon className={classes.icon}></AlertIcon>
                      {t(centerData[1])}
                    </Box>
                  </Grid>
                  <Grid item sm={6}>
                    <Box className={classnames(classes.centerDataItem, classes.lastCenterDataItem)}>
                      <AlertIcon className={classes.icon}></AlertIcon>
                      {t(centerData[2])}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box
                mt={matches ? 3 : 6}
                mb={matches ? 3 : 10}
                fontSize={matches ? 'body2.fontSize' : 'body1.fontSize'}
                color='text.primary'
                mx={matches ? -1 : 0}
              >
                {t('our_technologies.early_cancer_detection.content_data_detail')}
              </Box>
              <Box fontSize={matches ? 10 : 'caption.fontSize'} color='grey.600' mx={matches ? -1 : 0}>
                {references.map((reference, index) => (
                  <Box key={index} dangerouslySetInnerHTML={{ __html: t(reference) }}></Box>
                ))}
              </Box>
            </Container>
          </Box>
        </Typography>
        <Box className={classes.sectionTwo}>
          <Container disableGutters maxWidth='sm'>
            <Box textAlign='center' mb={matches ? 3 : 4.5}>
              <Typography variant='h4' color='primary'>
                {t('our_technologies.early_cancer_detection.whats_is_early_cancer_detection')}
              </Typography>
            </Box>
            <Box pl={matches ? 1 : 4} fontSize={matches ? 'body2.fontSize' : 'body1.fontSize'} color='text.primary'>
              <TitleDot left={matches ? -2 : -4.75}></TitleDot>
              <Trans i18nKey='our_technologies.early_cancer_detection.whats_is_early_cancer_detection_content'></Trans>
            </Box>
          </Container>
        </Box>
        <Box mt={matches ? 8 : 12.5} px={matches ? 1.5 : 2.5}>
          <Box textAlign='center' mb={matches ? 3 : 8}>
            <Typography variant='h5' color='primary'>
              {t('our_technologies.early_cancer_detection.reason_title')}
            </Typography>
          </Box>
          <Container disableGutters maxWidth='sm'>
            <Box className={classes.reasonsWrapper}>
              {reasons.map((reason, index) => (
                <Box className={classes.reasonItem} key={reason.title}>
                  <Box width={matches ? 108 : 146}>{reason.icon}</Box>
                  <Box
                    fontSize={matches ? 'body2.fontSize' : 'body1.fontSize'}
                    fontWeight='fontWeightBold'
                    color='primary.main'
                    mt={matches ? 1.25 : 2.5}
                    mb={matches ? 1.25 : 2}
                  >
                    {index === 1 && isEn ? reason.content : reason.title}
                  </Box>
                  {!(index === 1 && isEn) && (
                    <Box fontSize='body2.fontSize' textAlign='center'>
                      {reason.content}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
            <Box className={classes.tips} bgcolor='primary.main' color='primary.contrastText' borderRadius={12}>
              {t('our_technologies.early_cancer_detection.expect')}
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  )
}

export default EarlyCancerDetection
