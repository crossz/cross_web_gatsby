import React, { useState, useEffect } from 'react'
import { makeStyles, Container, Typography, alpha, Hidden, Button, Box, Grid } from '@material-ui/core'
import useSiteMetadata from '@hooks/useSiteMetadata'
import PhoneIcon from '@images/icons/phone.svg'
import WhatsappIcon from '@images/icons/whatsapp.svg'
import classnames from 'classnames'
import FaqItem from '@components/FaqItem'
import FaqSearch from '@components/FaqSearch'
import fetchWithTimeout from '@utils/fetchWithTimeout'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { ESelect, EMenuItem } from '@themes/components/ETextField'
import Loading from '@components/Loading'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'
import useObjectTranslation from '@hooks/useObjectTranslation'

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    paddingLeft: theme.spacing(6),
    paddingBottom: theme.spacing(8),
    marginLeft: theme.spacing(1.5),
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      textAlign: 'center',
      paddingBottom: theme.spacing(5),
      marginLeft: 0,
    },
  },
  titleWrapper: {},
  faqList: {
    // marginTop: theme.spacing(-5),
  },
  contentRoot: {
    padding: theme.spacing(0, 3.5),
    paddingTop: theme.spacing(11),
    paddingBottom: theme.spacing(19.5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 3),
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(10),
    },
  },
  contactRoot: {
    backgroundColor: alpha(theme.palette.supporting.supporting01, 0.1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(12.5),
    paddingBottom: theme.spacing(15),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(10.5),
    },
  },
  contactTitle: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.h6.fontSize,
      marginBottom: theme.spacing(3.5),
    },
  },
  contactBtnWrapper: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  contactBtn: {
    width: theme.spacing(34.5),
    height: theme.spacing(11),
    borderRadius: theme.spacing(1),
    '&:last-child': {
      marginLeft: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        marginTop: theme.spacing(2),
      },
    },
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing(2.5),
    paddingRight: 0,
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(28.25),
    },
    '& .MuiButton-startIcon': {
      marginRight: theme.spacing(2),
    },
  },
  btnIcon: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    margin: 0,
    '& path': {
      fill: theme.palette.secondary.contrastText,
    },
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  },
  phoneIcon: {
    '& path': {
      fill: theme.palette.primary.main,
    },
  },
  types: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[600],
    paddingTop: theme.spacing(3),
  },
  type: {
    padding: theme.spacing(1, 0),
    cursor: 'pointer',
  },
  activeType: {
    color: theme.palette.primary.main,
  },
  formWrapper: {
    position: 'sticky',
    top: theme.spacing(20),
    zIndex: 1,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      top: theme.spacing(13.25),
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1.5, 2),
      paddingBottom: 0,
    },
  },
  select: {
    width: '100%',
  },
}))
const FAQ = () => {
  const classes = useStyles()
  const { t } = useI18next()
  const { tB } = useObjectTranslation()
  const { whatsapp, phone } = useSiteMetadata()
  const [allFaqList, setAllFaqList] = useState([])
  const [faqList, setFaqList] = useState([])
  const [activePanel, setActivePanel] = useState(null)
  const [faqTypes, setFaqTypes] = useState()
  const [loadingStatus, setLoadingStatus] = useState('')
  const allTypeList = [{ nameHk: '所有問題', nameEn: 'All questions', nameCn: '所有问题' }]
  const [activeType, setActiveType] = useState(tB('name', allTypeList[0]))

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingStatus('pending')
        const res = await fetchWithTimeout(`/faqs/list`)
        const resType = await fetchWithTimeout(`/faqType/list`)
        if (res?.code !== 1000) {
          return console.log('fetch error')
        }
        const list = res?.data?.filter((item) => item.status) || []
        setAllFaqList(list)
        setFaqList(list)
        if (resType.code !== 1000) {
          return console.log('fetch error')
        } else {
          allTypeList.push(...resType.data)
          setFaqTypes(allTypeList)
          setLoadingStatus('fulfilled')
        }
      } catch (error) {
        setLoadingStatus('rejected')
        console.log('fetch error')
      }
    }
    fetchData()
  }, [])

  const handleChange = (index) => setActivePanel(index)
  const handleSearchResult = (result) => {
    setFaqList(result)
  }

  const handleTypeChange = (e) => {
    scrollTo('#section-tabs')
    return setActiveType(e.target.dataset?.value)
  }

  const handleMobileTypeChange = (e) => {
    scrollTo('#section-tabs')
    return setActiveType(e.target?.value)
  }

  return (
    <Box className={classes.root}>
      <Container className={classes.contentRoot} disableGutters maxWidth='md'>
        <Grid container>
          <Grid item xs={12} sm={4}></Grid>
          <Grid className={classes.titleWrapper} item xs={12} sm={8}>
            <Typography className={classes.title} variant='h4' color='primary'>
              {activeType && activeType !== tB('name', allTypeList[0]) && (
                <Typography component='span' variant='h5'>
                  {` ${activeType}`}
                </Typography>
              )}
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.faqList} container spacing={4}>
          <Hidden xsDown>
            <Grid item sm={4}>
              <Box className={classes.formWrapper}>
                <FaqSearch data={allFaqList} setSearchResult={handleSearchResult}></FaqSearch>
                <Box className={classes.types} onClick={handleTypeChange}>
                  {faqTypes?.map((type, index) => (
                    <Box
                      className={classnames(classes.type, activeType === tB('name', type) && classes.activeType)}
                      key={index}
                      data-value={tB('name', type)}
                    >
                      {tB('name', type)}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Box className={classes.formWrapper}>
              <Grid container spacing={1}>
                <Grid item xs={7}>
                  <FaqSearch data={allFaqList} setSearchResult={handleSearchResult}></FaqSearch>
                </Grid>
                <Grid item xs={5}>
                  <ESelect value={activeType} onChange={handleMobileTypeChange} className={classes.select} displayEmpty>
                    {faqTypes?.map((type, index) => (
                      <EMenuItem key={index} value={tB('name', type)}>
                        {tB('name', type) || t('options.faq_types.all')}
                      </EMenuItem>
                    ))}
                  </ESelect>
                </Grid>
              </Grid>
            </Box>
          </Hidden>
          <Grid item xs={12} sm={8}>
            {faqList?.length > 0 && loadingStatus !== 'pending' && faqList?.find((faq) => faq.status) ? (
              faqList
                ?.filter(
                  (faq) =>
                    tB('typeName', faq) === activeType || !activeType || activeType === tB('name', allTypeList[0])
                )
                ?.map((faq) => (
                  <FaqItem
                    key={faq.id}
                    id={faq.id}
                    question={tB('question', faq)}
                    content={tB('content', faq)}
                    onChange={handleChange}
                    activePanel={activePanel}
                  ></FaqItem>
                ))
            ) : (
              <Loading status={loadingStatus}></Loading>
            )}
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.contactRoot}>
        <Box className={classes.contactTitle}>{t('products_and_services.take2_extra_care.faq.welcome_contact')}</Box>
        <Box className={classes.contactBtnWrapper}>
          <Button
            className={classes.contactBtn}
            variant='contained'
            color='secondary'
            startIcon={<WhatsappIcon className={classes.btnIcon} />}
            href={whatsapp}
            target='_blank'
          >
            WhatsApp
          </Button>
          <Button
            className={classnames(classes.contactBtn, classes.phoneIcon)}
            variant='contained'
            color='default'
            startIcon={<PhoneIcon className={classes.btnIcon} />}
            href={`tel:${phone}`}
          >
            {phone}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default FAQ

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

export async function config() {
  // Optionally use GraphQL here

  return ({ params }) => {
    return {
      defer: true,
    }
  }
}
