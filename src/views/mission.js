import React from 'react'
import { makeStyles, Container, Typography, alpha, useTheme, useMediaQuery, Link, Box, Grid } from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import classnames from 'classnames'
import { useI18next, Trans } from 'gatsby-plugin-react-i18next'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(9.5),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(7),
      paddingBottom: theme.spacing(2.5),
    },
  },
  beliefItem: {
    maxWidth: 1168,
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
    padding: theme.spacing(5, 8),
    paddingBottom: theme.spacing(8),
    borderRadius: theme.spacing(1.5),
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(10.75),
    borderTop: '1px solid transparent',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      padding: theme.spacing(0, 3),
      paddingTop: 0,
      paddingBottom: theme.spacing(5.25),
      margin: theme.spacing(0, 3),
      marginBottom: theme.spacing(12.5),
      borderRadius: theme.spacing(1),
    },
  },
  beliefReverseItem: {
    flexDirection: 'row-reverse',
    marginLeft: 'auto',
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, 3),
    },
  },
  beliefImgWrapper: {
    width: `calc(50% - ${theme.spacing(4)}px)`,
    flexShrink: 0,
    borderRadius: theme.spacing(1.5),
    overflow: 'hidden',
    marginTop: theme.spacing(-8),
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      marginTop: theme.spacing(-7),
      marginBottom: theme.spacing(3),
      borderRadius: theme.spacing(1),
    },
  },
  beliefImg: {
    borderRadius: theme.spacing(1.5),
    [theme.breakpoints.down('xs')]: {
      borderRadius: theme.spacing(1),
    },
  },
  beliefContent: {
    width: `calc(50% - ${theme.spacing(4)}px)`,
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.primary,
    whiteSpace: 'break-spaces',
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
    },
  },
  beliefType: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.body2.fontSize,
    },
  },
  beliefSlogan: {
    color: theme.palette.primary.main,
    paddingLeft: theme.spacing(2.75),
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(1.25),
    },
  },
  founderWrapper: {
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(19.25),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(3),
      marginTop: theme.spacing(4),
      borderRadius: theme.spacing(1),
      paddingBottom: theme.spacing(5.25),
    },
  },
  founderCard: {
    padding: theme.spacing(5, 4),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1.5),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.body2.fontSize,
      padding: theme.spacing(4, 3),
    },
  },
  founderDetailWrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  founderImgWrapper: {
    width: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      maxWidth: theme.spacing(35),
      marginTop: theme.spacing(-16),
    },
  },
  founderImg: {
    borderRadius: theme.spacing(1.25),
  },
  link: {
    wordBreak: 'break-all',
  },
}))
const Mission = () => {
  const classes = useStyles()
  const { t } = useI18next()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  const beliefs = [
    {
      image: (
        <StaticImage
          imgClassName={classes.beliefImg}
          src='../assets/images/belief_01.jpg'
          alt='belief 01'
        ></StaticImage>
      ),
      type: t('about_us.mission.beliefs.0.type'),
      slogan: t('about_us.mission.beliefs.0.slogan'),
      content: t('about_us.mission.beliefs.0.content'),
    },
    {
      image: (
        <StaticImage
          imgClassName={classes.beliefImg}
          src='../assets/images/belief_02.jpg'
          alt='belief 02'
        ></StaticImage>
      ),
      type: t('about_us.mission.beliefs.1.type'),
      slogan: t('about_us.mission.beliefs.1.slogan'),
      content: t('about_us.mission.beliefs.1.content'),
    },
  ]
  return (
    <Box className={classes.root}>
      <Container disableGutters maxWidth='lg'>
        <Box textAlign='center' mb={matches ? 9.25 : 10.75}>
          <Typography variant='h4' color='primary'>
            {t('about_us.mission.title')}
          </Typography>
        </Box>
        {beliefs.map((belief, index) => (
          <Box key={index} className={classnames(classes.beliefItem, index % 2 && classes.beliefReverseItem)}>
            <Box className={classes.beliefImgWrapper}>{belief.image}</Box>
            <Box className={classes.beliefContent}>
              <Box className={classes.beliefType}>{t(belief.type)}</Box>
              <Typography className={classes.beliefSlogan} variant='h5' color='primary'>
                {t(belief.slogan)}
              </Typography>
              <Box>{t(belief.content)}</Box>
            </Box>
          </Box>
        ))}
      </Container>
      <Box className={classes.founderWrapper}>
        <Container disableGutters maxWidth='md'>
          <Box textAlign='center' mb={matches ? 16 : 4.75}>
            <Typography variant='h4' color='primary'>
              {t('about_us.mission.team_title')}
            </Typography>
          </Box>
          <Box className={classes.founderCard}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <StaticImage
                  className={classes.founderImgWrapper}
                  imgClassName={classes.founderImg}
                  src='../assets/images/team_01.jpg'
                  alt='team 01'
                ></StaticImage>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Box className={classes.founderDetailWrapper}>
                  <Typography variant='caption' color='textPrimary' component='div'>
                    <Box fontWeight='fontWeightBold'>{t('about_us.mission.background_founder')}</Box>
                    <Trans i18nKey='about_us.mission.team_founder_content'>
                      得易健康奠基於亞洲區頂尖大學的科研成果，是將一流學術成果轉化為商業應用並發揚光大的一所典範企業。我們的創辦人是來自香港中文大學醫學院化學病理學系的三位教授，二十多年來紮根香港、影響世界，在基因及疾病檢測領域深耕研究、成果豐碩。2019年，教授團隊正式創建得易健康，並宣佈公司首項工作為開發早期鼻咽癌檢測產品，以此為公司的根基，謀求未來更多的發展和貢獻社會的機會。
                      有關三位教授創辦得易健康並發佈公司首項產品的資訊，請參閱以下新聞連結：
                      <Link
                        className={classes.link}
                        href='https://www.businesswire.com/news/home/20190506005296/zh-HK/'
                        target='_blank'
                      >
                        https://www.businesswire.com/news/home/20190506005296/zh-HK/
                      </Link>
                    </Trans>
                    <br />
                    <br />
                    <Box color='text.primary' fontWeight='fontWeightBold'>
                      {t('about_us.mission.our_team')}
                    </Box>
                    {t('about_us.mission.our_team_content')}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            {/* <Box mr={5.5} display={matches ? 'flex' : 'block'}>

            </Box> */}
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Mission
