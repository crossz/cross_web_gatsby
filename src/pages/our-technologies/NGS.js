import React, { useState } from 'react'
import { makeStyles, Container, alpha, useTheme, useMediaQuery, Hidden, Grid } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import TitleDot from '@themes/components/TitleDot'
import { StaticImage } from 'gatsby-plugin-image'
import classnames from 'classnames'
import { useI18next, Trans } from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10.25),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: 0,
    },
  },
  bannerImg: {
    borderRadius: theme.spacing(0.75),
  },
  sectionOneWrapper: {
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
    padding: theme.spacing(6.25, 1.5),
    borderRadius: theme.spacing(1.5),
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4),
      backgroundColor: 'transparent',
      fontSize: theme.typography.body2.fontSize,
      paddingBottom: theme.spacing(6),
    },
  },
  sectionTwoWrapper: {
    marginTop: theme.spacing(7),
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
    padding: theme.spacing(9.5, 3),
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(1),
    },
  },
  noteTab: {
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2.5),
  },
  noteTabActive: {
    color: theme.palette.supporting.supporting01,
  },
  noteItem: {
    boxShadow: `0px 15px 40px -10px ${alpha(theme.palette.common.black, 0.05)}`,
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(0.75),
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
    marginBottom: theme.spacing(10),
  },
  noteContent: {
    paddingLeft: theme.spacing(10.25),
    paddingRight: theme.spacing(7),
    paddingTop: theme.spacing(4.25),
    paddingBottom: theme.spacing(4.25),
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(8),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3),
      fontSize: theme.typography.body2.fontSize,
    },
  },
  noteImgWrapper: {
    height: '100%',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      minHeight: 270,
    },
    [theme.breakpoints.down('xs')]: {
      height: 184,
      minHeight: 'auto',
    },
  },
  noteImg: {
    height: '100%',
    borderRadius: theme.spacing(0.75),
    [theme.breakpoints.down('xs')]: {
      borderRadius: `6px 6px 0 0`,
    },
  },
}))

const NGS = () => {
  const classes = useStyles()
  const { t } = useI18next()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const [activeNote, setActiveNote] = useState(0)

  const notes = [
    {
      title: t('our_technologies.ngs.notes.0.title'),
      content: t('our_technologies.ngs.notes.0.content'),
      image: (
        <StaticImage
          className={classes.noteImgWrapper}
          imgClassName={classes.noteImg}
          src='../../assets/images/1_how_do_we_use_ngs.jpg'
          alt='how do we use ngs'
          objectPosition='top'
        ></StaticImage>
      ),
    },
    {
      title: t('our_technologies.ngs.notes.1.title'),
      content: t('our_technologies.ngs.notes.1.content'),
      image: (
        <StaticImage
          className={classes.noteImgWrapper}
          imgClassName={classes.noteImg}
          src='../../assets/images/2_endoscopy.png'
          alt='endoscopy'
          objectPosition='top'
        ></StaticImage>
      ),
    },
    {
      title: t('our_technologies.ngs.notes.2.title'),
      content: t('our_technologies.ngs.notes.2.content'),
      image: (
        <StaticImage
          className={classes.noteImgWrapper}
          imgClassName={classes.noteImg}
          src='../../assets/images/3_traditional_ebv_test.jpg'
          alt='traditional ebv test'
        ></StaticImage>
      ),
    },
  ]

  const handleChange = (e) => e.target.dataset?.value && setActiveNote(Number(e.target.dataset?.value))
  return (
    <Box bgcolor='background.paper' className={classes.root}>
      <Container className={classes.sectionOne} maxWidth='md'>
        <Box textAlign='center' mb={6}>
          <Typography variant='h4' color='primary'>
            {t('our_technologies.ngs.title')}
          </Typography>
        </Box>
        <Hidden smUp>
          <StaticImage
            imgClassName={classes.bannerImg}
            src='../../assets/images/ngs_banner.jpg'
            alt='ngs banner'
          ></StaticImage>
        </Hidden>
        <Box className={classes.sectionOneWrapper}>
          <Container disableGutters maxWidth='sm'>
            <Box mb={2} pl={matches ? 2 : 0}>
              {matches && <TitleDot left={-2}></TitleDot>}
              <Typography variant='h4' color='primary'>
                {t('our_technologies.ngs.what_is_ngs')}
              </Typography>
            </Box>
            <Box>
              <Hidden xsDown>
                <TitleDot left={-4.5}></TitleDot>
              </Hidden>
              <Trans i18nKey='our_technologies.ngs.intro'></Trans>
            </Box>
          </Container>
        </Box>
      </Container>
      <Box className={classes.sectionTwoWrapper}>
        <Container disableGutters maxWidth='md'>
          <Hidden smUp>
            <Box onClick={handleChange}>
              {notes.map((note, index) => (
                <Box
                  pl={1.5}
                  key={index}
                  data-value={index}
                  className={classnames(classes.noteTab, index !== activeNote && classes.noteTabActive)}
                >
                  <TitleDot bgcolor={index !== activeNote && '#e8e8e8'} left={-3}></TitleDot>
                  {note.title}
                  {activeNote !== index && t('our_technologies.ngs.read_full_article')}
                </Box>
              ))}
            </Box>
          </Hidden>
          {notes.map(
            (note, index) =>
              (!matches || index === activeNote) && (
                <Box key={index} className={classes.noteItem}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={3}>
                      {note.image}
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Box className={classes.noteContent}>
                        <Box mb={1.25}>
                          <Typography variant='h4' color='primary'>
                            {note.title}
                          </Typography>
                        </Box>
                        <Box>
                          <Hidden xsDown>
                            <TitleDot left={-5}></TitleDot>
                          </Hidden>
                          {note.content}
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              )
          )}
        </Container>
      </Box>
    </Box>
  )
}

export default NGS

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
