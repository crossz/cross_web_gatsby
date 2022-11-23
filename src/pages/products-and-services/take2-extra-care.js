import React from 'react'
import { makeStyles, Container, Typography, alpha, Hidden, Button, Box } from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import ArrowIcon from '@images/icons/arrow.svg'
import CheckCircleIcon from '@images/icons/check_circle.svg'
import TitleDot from '@themes/components/TitleDot'
import { padStartNum } from '@utils'
import { useI18next, Trans } from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'
import useLangQuery from '@hooks/useLangQuery'

const steps = [
  {
    label: 'products_and_services.take2_extra_care.steps.0',
    icon: (
      <StaticImage
        src='../../assets/images/icons/take2Care/step_01.svg'
        placeholder='tracedSVG'
        alt='step 01'
      ></StaticImage>
    ),
  },
  {
    label: 'products_and_services.take2_extra_care.steps.1',
    icon: (
      <StaticImage
        src='../../assets/images/icons/take2Care/step_02.svg'
        placeholder='tracedSVG'
        alt='step 02'
      ></StaticImage>
    ),
  },
  {
    label: 'products_and_services.take2_extra_care.steps.2',
    icon: (
      <StaticImage
        src='../../assets/images/icons/take2Care/step_03.png'
        placeholder='tracedSVG'
        alt='step 03'
      ></StaticImage>
    ),
  },
]

const clubPlans = [
  'products_and_services.take2_extra_care.club_plans.0',
  'products_and_services.take2_extra_care.club_plans.1',
  'products_and_services.take2_extra_care.club_plans.2',
  'products_and_services.take2_extra_care.club_plans.3',
]

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    paddingTop: theme.spacing(9.75),
    paddingBottom: theme.spacing(23.5),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(26),
    },
  },
  root: {
    backgroundColor: '#F6F9FA',
    paddingBottom: theme.spacing(11),
  },
  wrapper: {
    padding: theme.spacing(0, 1),
  },
  bannerWrapper: {
    height: 293,
    display: 'grid',
    borderRadius: theme.spacing(1.2),
    overflow: 'hidden',
    marginTop: -140,
    [theme.breakpoints.down('xs')]: {
      height: 262,
      marginTop: -172,
    },
  },
  bannerCover: {
    height: '100%',
    width: '100%',
    backgroundColor: alpha(theme.palette.primary.main, 0.85),
    display: 'grid',
    position: 'relative',
    gridArea: '1/1',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(3),
    },
  },
  bannerBg: {
    gridArea: '1/1',
  },
  contentRoot: {
    padding: theme.spacing(0, 8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1),
    },
  },
  contentWrapper: {
    maxWidth: 966,
    margin: '0 auto',
    position: 'relative',
  },
  box01: {
    backgroundColor: theme.palette.primary.contrastText,
    height: 295,
    borderRadius: theme.spacing(1.5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -253,
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      marginTop: -233,
    },
  },
  box01Icon: {
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(10),
      marginBottom: theme.spacing(4),
    },
  },
  box01Content: {
    maxWidth: 446,
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.body2.fontSize,
      maxWidth: 'auto',
    },
  },
  box01Title: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      marginBottom: theme.spacing(1.5),
    },
  },
  downArrow: {
    paddingTop: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(-1),
    '& svg': {
      width: theme.spacing(5),
      height: theme.spacing(5),
      transform: 'rotate(90deg)',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      marginBottom: 0,
      paddingTop: 0,
    },
  },
  box02: {
    backgroundColor: theme.palette.primary.contrastText,
    padding: theme.spacing(8, 9.5),
    borderRadius: theme.spacing(1.5),
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3, 6.75),
    },
  },
  box02Title: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(3),
  },
  clubPlansWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: theme.spacing(1.5),
    border: `2px solid #D2C7BC`,
    padding: theme.spacing(4),
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    marginTop: theme.spacing(6.25),
    '& svg': {
      marginRight: theme.spacing(1.5),
    },
    '& path:first-child': {
      fill: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      marginTop: 0,
      padding: theme.spacing(3, 4),
      fontSize: theme.typography.body1.fontSize,
      alignItems: 'flex-start',
    },
  },
  clubPlanItem: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(3),
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
  box03: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(0, 3),
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(6.25),
    },
  },
  box03Title: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      marginBottom: theme.spacing(5),
    },
  },
  stepsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  arrowIcon: {
    [theme.breakpoints.down('xs')]: {
      transform: `rotate(90deg)`,
    },
  },
  stepItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: theme.spacing(31),
    flexShrink: 1,
    '&:last-child $stepIcon': {
      width: 209,
      height: 142,
      [theme.breakpoints.down('xs')]: {
        width: 174,
      },
    },
  },
  stepIcon: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: 174,
    },
  },
  stepLabel: {
    marginTop: theme.spacing(5.25),
    textAlign: 'left',
    display: 'flex',
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
    },
  },
  stepNum: {
    display: 'flex',
    color: theme.palette.primary.main,
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1,
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  stepBetween: {
    margin: theme.spacing(0, 4.5),
    paddingTop: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 3),
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(3),
    },
  },
  box04: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(15.5),
    textAlign: 'center',
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(12),
      fontSize: theme.typography.body2.fontSize,
    },
  },
  box04Title: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      marginBottom: theme.spacing(5),
    },
  },
  box04Wrapper: {
    maxWidth: 585,
  },
  box04BtnWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(4),
    },
  },
  box04Btn: {
    width: theme.spacing(20.5),
    padding: 0,
    flexShrink: 1,
    '&:last-child': {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}))

const Take2ExtraCare = () => {
  const classes = useStyles()
  const { t } = useI18next()
  const addLangQuery = useLangQuery()
  return (
    <>
      <Typography className={classes.title} variant='h4' color='primary'>
        {t('products_and_services.take2_extra_care.title')}
      </Typography>
      <Box className={classes.root}>
        <Container className={classes.contentRoot} disableGutters maxWidth='lg'>
          <Box className={classes.bannerWrapper}>
            <StaticImage
              className={classes.bannerBg}
              src='../../assets/images/take2_extra_care_banner_bg.jpg'
              alt='homepage banner mobile'
            ></StaticImage>
            <Box className={classes.bannerCover} />
          </Box>
          <Box mx={3}>
            <Box className={classes.contentWrapper}>
              <Box className={classes.box01}>
                <StaticImage
                  className={classes.box01Icon}
                  src='../../assets/images/icons/take2Care/step_04.svg'
                  alt='homepage banner mobile'
                  objectFit='contain'
                ></StaticImage>
                <Box className={classes.box01Content}>
                  <Box className={classes.box01Title}>
                    {t('products_and_services.take2_extra_care.what_is_extra_care')}
                  </Box>
                  {t('products_and_services.take2_extra_care.what_is_extra_care_content')}
                </Box>
              </Box>
              <Box className={classes.downArrow}>
                <Hidden xsDown>
                  <ArrowIcon></ArrowIcon>
                </Hidden>
              </Box>
              <Box className={classes.box02}>
                <Hidden xsDown>
                  <Box className={classes.box02Title}>
                    {t('products_and_services.take2_extra_care.what_is_extra_care')}
                  </Box>
                  {t('products_and_services.take2_extra_care.what_is_extra_care_content')}
                </Hidden>
                <Box className={classes.clubPlansWrapper}>
                  {clubPlans.map((clubPlan, index) => (
                    <Box className={classes.clubPlanItem} key={index}>
                      <CheckCircleIcon></CheckCircleIcon>
                      {t(clubPlan)}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box className={classes.box03}>
                <Box className={classes.box03Title}>
                  {t('products_and_services.take2_extra_care.how_to_join_extra_care')}
                </Box>
                <Box className={classes.stepsWrapper}>
                  {steps.map(({ icon, label }, index) => (
                    <React.Fragment key={index}>
                      <Box className={classes.stepItem}>
                        <Box className={classes.stepIcon}>{icon}</Box>
                        <Box className={classes.stepLabel}>
                          {index < steps.length - 1 && (
                            <Box className={classes.stepNum}>
                              <TitleDot size={1.5} left={-2}></TitleDot>
                              {padStartNum(index + 1)}
                            </Box>
                          )}
                          {t(label)}
                        </Box>
                      </Box>
                      {index === 0 && (
                        <Box className={classes.stepBetween}>
                          <ArrowIcon className={classes.arrowIcon} />
                        </Box>
                      )}
                      {index === 1 && (
                        <Typography className={classes.stepBetween} variant='h5' color='primary' key='or'>
                          {t('common.or')}
                        </Typography>
                      )}
                    </React.Fragment>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box className={classes.box04}>
        <Box mx={3}>
          <Container disableGutters className={classes.box04Wrapper}>
            <Box whiteSpace='break-spaces' className={classes.box04Title}>
              {t('products_and_services.take2_extra_care.benefit_of_extra_care')}
            </Box>
            <Trans i18nKey='products_and_services.take2_extra_care.benefit_of_extra_care_content'>
              免費成為永久會員，享用Take2 Extra
              Care會員計劃轄下一切服務，包括即時查詢、健康資訊、獨家優惠和年度篩查提醒等。
              <Hidden xsDown>
                <br />
              </Hidden>
              長遠而言，透過參加Take2 Extra
              Care會員計劃，你可更有效運用健康管理所需時間及金錢，透過現今科技和醫療專業意見協助你更早為健康做好準備。
            </Trans>
            <Box className={classes.box04BtnWrapper}>
              <Button
                variant='outlined'
                color='primary'
                href={addLangQuery(`${process.env.GATSBY_SITE_URL}signup`)}
                target='_blank'
                className={classes.box04Btn}
              >
                {t('common.sign_up')}
              </Button>
              <Button
                variant='contained'
                color='secondary'
                href={addLangQuery(`${process.env.GATSBY_SITE_URL}signin`)}
                target='_blank'
                className={classes.box04Btn}
              >
                {t('common.sign_in')}
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Take2ExtraCare

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
