import React, { useState } from 'react'
import {
  makeStyles,
  Box,
  Container,
  Typography,
  alpha,
  ImageListItem,
  ImageList,
  Button,
  Link,
  Grid,
  FormControl,
  FormHelperText,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import RightIcon from '@images/icons/right.svg'
import { Formik } from 'formik'
import { oriSchema } from '@utils/schema'
import { throttle } from 'lodash-es'
import { DIALING_CODES } from '@utils/constant'
import { graphql } from 'gatsby'
import { EInputBase, EFormLabel, ESelect, CancelButton, EMenuItem } from '@themes/components/ETextField'
import { toast } from 'react-toastify'
import ReCaptcha from '@components/ReCaptcha'
import SimpleGoogleMap from '@components/Map/SimpleGoogleMap'
import fetchWithTimeout from '@utils/fetchWithTimeout'
import { useI18next } from 'gatsby-plugin-react-i18next'
import useBusinessPartners from '@hooks/useBusinessPartners'
import Layout from '@layouts/Layout'
import useObjectTranslation from '@hooks/useObjectTranslation'

const useStyles = makeStyles((theme) => ({
  root: {},
  box01: {
    textAlign: 'center',
    padding: theme.spacing(9.5, 9.25),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1),
      paddingTop: theme.spacing(6.25),
      paddingBottom: theme.spacing(5.5),
    },
  },
  titleWrapper: {
    margin: theme.spacing(0, 2),
    marginBottom: theme.spacing(9.5),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(5.5),
    },
  },
  box01Title: {
    marginBottom: theme.spacing(2),
  },
  box01Content: {
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.body2.fontSize,
    },
  },
  bannerWrapper: {
    height: 250,
    display: 'grid',
    [theme.breakpoints.down('xs')]: {
      height: 140,
    },
  },
  bannerBg: {
    gridArea: '1/1',
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
  box02: {
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    position: 'relative',
    paddingBottom: 190,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1),
      paddingBottom: 193,
    },
  },
  box02Title: {
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
    marginTop: -184,
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      marginTop: -92,
      marginBottom: theme.spacing(3),
    },
  },
  imageList: {
    overflow: 'initial',
  },
  imageListItem: {
    height: 'auto',
  },
  imageListItemItem: {
    overflow: 'initial',
  },
  partnerItem: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    minHeight: '295px',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.standard,
    }),
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: `0 6px 20px 0 ${alpha(theme.palette.common.black, 0.05)}`,
    },
    '& a:hover': {
      textDecoration: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(1),
      minHeight: 'auto',
    },
  },
  country: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.caption.fontSize,
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(0.5),
    },
  },
  partnerContent: {
    display: '-webkit-box',
    color: theme.palette.text.primary,
    '-webkit-box-orient': 'vertical',
    lineClamp: '5',
    '-webkit-line-clamp': '5',
    overflow: 'hidden' /*溢出部分隐藏*/,
    textOverflow: 'ellipsis',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(1),
    },
  },
  name: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3.5),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(0.5),
      fontSize: theme.typography.body2.fontSize,
    },
  },
  partnerBtnWrapper: {
    textAlign: 'right',
    marginTop: 'auto',
  },
  viewBtn: {
    textDecoration: 'none',
    padding: theme.spacing(0, 2),
  },
  box03: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(10),
    },
  },
  form: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(4),
    },
  },
  box03Title: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1),
    },
  },
  box03Wrapper: {
    maxWidth: 570,
    fontSize: theme.typography.body1.fontSize,
    padding: theme.spacing(0, 3),
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'none',
    },
  },
  sideImgWrapper: {
    marginTop: theme.spacing(-9),
    width: `93%`,
    [theme.breakpoints.down('xs')]: {
      width: `calc(100% - ${theme.spacing(3)}px)`,
      marginTop: theme.spacing(-26),
    },
  },
  sideImg: {
    borderRadius: `0 12px 12px 0`,
  },
  formControl: {
    '&:last-child': {
      marginLeft: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        marginTop: theme.spacing(3),
      },
    },
  },
  formControlLine: {
    marginBottom: theme.spacing(3),
    display: 'flex',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  dialingCodeFormControl: {
    flexShrink: 0,
    marginRight: theme.spacing(1),
  },
  submitBtn: {
    marginTop: theme.spacing(1),
  },
  hiddenLabel: {
    opacity: 0,
  },
}))

const initialValues = {
  companyName: '',
  dialingCode: '852',
  name: '',
  phone: '',
  email: '',
}

const International = () => {
  const classes = useStyles()
  const { t } = useI18next()
  const { tB } = useObjectTranslation()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const businessPartners = useBusinessPartners()
  const [loading, setLoading] = useState(false)
  const [reCapStatus, setReCapStatus] = useState(0)

  const schema = oriSchema(t).pick(['companyName', 'dialingCode', 'name', 'phone', 'email'])

  const handleFetch = async (values) => {
    try {
      const res = await fetchWithTimeout(`/applyPartner/add`, {
        values, // data can be `string` or {object}!
      })
      if (res?.code !== 1000) return Promise.reject(res?.message || t('status.submit.fail'))
      return
    } catch (error) {
      return Promise.reject(t('status.submit.fail'))
    }
  }

  return (
    <Layout>
      <Box className={classes.root}>
        <Container className={classes.box01} maxWidth='lg'>
          <Box className={classes.titleWrapper}>
            <Typography className={classes.box01Title} variant='h4' color='primary'>
              {t('international.title')}
            </Typography>
            <Typography className={classes.box01Content} variant='body1' color='textPrimary'>
              {t('international.detail')}
            </Typography>
          </Box>
          <SimpleGoogleMap></SimpleGoogleMap>
        </Container>
        <Container disableGutters className={classes.bannerWrapper} maxWidth='lg'>
          <StaticImage
            className={classes.bannerBg}
            src='../assets/images/international_banner_bg.jpg'
            alt='international banner'
            objectPosition='left'
          ></StaticImage>
          <Box className={classes.bannerCover} />
        </Container>
        <Box className={classes.box02}>
          <Container maxWidth='md'>
            <Typography className={classes.box02Title} variant='h6'>
              {t('international.our_partners')}
            </Typography>
            <ImageList className={classes.imageList} rowHeight='auto' cols={matches ? 1 : 3} gap={matches ? 16 : 24}>
              {businessPartners?.map((partner, index) => (
                <ImageListItem
                  key={partner?.id}
                  classes={{
                    item: classes.imageListItemItem,
                  }}
                  className={classes.imageListItem}
                >
                  <Link href={partner?.link || null} target='_blank' underline='none'>
                    <Box className={classes.partnerItem}>
                      <Box className={classes.country}>{tB('country', partner)}</Box>
                      <Typography className={classes.name} variant='subtitle1' color='primary'>
                        {partner?.name}
                      </Typography>
                      <Typography className={classes.partnerContent}>{tB('intro', partner)}</Typography>
                      <Box className={classes.partnerBtnWrapper}>
                        {partner?.link && (
                          <Button className={classes.viewBtn} variant='text' color='primary' endIcon={<RightIcon />}>
                            {t('common.learn_more')}
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </Link>
                </ImageListItem>
              ))}
            </ImageList>
          </Container>
        </Box>
        <Box className={classes.box03}>
          <Container disableGutters maxWidth='lg'>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <StaticImage
                  className={classes.sideImgWrapper}
                  imgClassName={classes.sideImg}
                  src='../assets/images/international_01.jpg'
                  alt='international img 01'
                  objectFit='fill'
                ></StaticImage>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className={classes.box03Wrapper}>
                  <Typography className={classes.box03Title} variant='h4' color='primary'>
                    {t('international.become_a_partner')}
                  </Typography>
                  <Typography variant={matches ? 'body2' : 'body1'} color='textPrimary'>
                    {t('international.become_a_partner_content')}
                  </Typography>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={throttle(async (values, { resetForm }) => {
                      if (!reCapStatus) {
                        return setReCapStatus(1)
                      }
                      if (loading) return
                      try {
                        setLoading(true)
                        await handleFetch(values)
                        toast.success(t('status.submit.success'))
                        resetForm()
                      } catch (error) {
                        toast.error(error)
                      }
                      setLoading(false)
                      setReCapStatus(0)
                    }, 1000)}
                  >
                    {(props) => {
                      const { values, handleSubmit, handleChange, touched, errors, setFieldValue } = props
                      const isError = (field) => touched[field] && Boolean(errors[field])
                      const errorText = (field) =>
                        touched[field] && errors[field] && <FormHelperText>{errors[field]}</FormHelperText>

                      const CusCancelButton = ({ field }) => (
                        <CancelButton
                          values={values}
                          touched={touched}
                          errors={errors}
                          field={field}
                          onCancel={(field) => setFieldValue(field, '')}
                        />
                      )

                      return (
                        <form onSubmit={handleSubmit} className={classes.form} noValidate>
                          <Box className={classes.formControlLine}>
                            <FormControl fullWidth error={isError('companyName')} required>
                              <EFormLabel>{t('form.company.label')}</EFormLabel>
                              <EInputBase
                                id='company-ame'
                                name='companyName'
                                margin='none'
                                value={values.companyName}
                                onChange={handleChange}
                                placeholder={
                                  isError('companyName')
                                    ? ''
                                    : t('form.placeholder.enter', {
                                        field: t('form.company.label'),
                                      })
                                }
                                type='text'
                                endAdornment={<CusCancelButton field='companyName' />}
                              />
                              {errorText('companyName')}
                            </FormControl>
                          </Box>
                          <Box className={classes.formControlLine}>
                            <FormControl fullWidth error={isError('name')}>
                              <EFormLabel>{t('form.contact.label')}</EFormLabel>
                              <EInputBase
                                id='contact-name'
                                name='name'
                                margin='none'
                                value={values.name}
                                onChange={handleChange}
                                type='text'
                                endAdornment={<CusCancelButton field='name' />}
                              />
                              {errorText('name')}
                            </FormControl>
                          </Box>
                          <Box className={classes.formControlLine}>
                            <FormControl fullWidth error={isError('email')} required className={classes.formControl}>
                              <EFormLabel>{t('form.email.label')}</EFormLabel>
                              <EInputBase
                                id='email'
                                name='email'
                                margin='none'
                                value={values.email}
                                onChange={handleChange}
                                placeholder={isError('email') ? '' : 'example@take2health.com'}
                                endAdornment={<CusCancelButton field='email' />}
                              />
                              {errorText('email')}
                            </FormControl>
                            <Box width='100%' display='flex' className={classes.formControl}>
                              <FormControl className={classes.dialingCodeFormControl}>
                                <EFormLabel>{t('form.phone.label')}</EFormLabel>
                                <ESelect
                                  labelId='dialingCode-select-label'
                                  id='dialingCode-type-select'
                                  name='dialingCode'
                                  value={values.dialingCode}
                                  onChange={handleChange}
                                  displayEmpty
                                >
                                  {DIALING_CODES.map((dialingCode) => (
                                    <EMenuItem key={dialingCode.value} value={dialingCode.value}>
                                      {dialingCode.label}
                                    </EMenuItem>
                                  ))}
                                </ESelect>
                              </FormControl>
                              <FormControl fullWidth error={isError('phone')}>
                                <EFormLabel className={classes.hiddenLabel}>hidden</EFormLabel>
                                <EInputBase
                                  id='phone'
                                  name='phone'
                                  margin='none'
                                  value={values.phone}
                                  onChange={handleChange}
                                  placeholder={t('form.phone.placeholder')}
                                  endAdornment={<CusCancelButton field='phone' />}
                                />
                                {errorText('phone')}
                              </FormControl>
                            </Box>
                          </Box>
                          <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='secondary'
                            className={classes.submitBtn}
                            disabled={reCapStatus === 1}
                          >
                            {loading ? <CircularProgress color='inherit' size={24} /> : t('common.submit')}
                          </Button>
                          {reCapStatus > 0 && <ReCaptcha onChange={(value) => setReCapStatus(value)}></ReCaptcha>}
                        </form>
                      )
                    }}
                  </Formik>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Layout>
  )
}

export default International

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
