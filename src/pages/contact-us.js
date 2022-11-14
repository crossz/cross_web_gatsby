import React, { useState } from 'react'
import { makeStyles, Container, Grid, useMediaQuery, useTheme } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import useSiteMetadata from '@hooks/useSiteMetadata'
import PhoneIcon from '@images/icons/phone.svg'
import WhatsappIcon from '@images/icons/whatsapp.svg'
import EmailIcon from '@images/icons/mail.svg'
import MessengerIcon from '@images/icons/messenger.svg'
// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { Formik } from 'formik'
import { oriSchema } from '@utils/schema'
import { throttle } from 'lodash-es'
import { DIALING_CODES } from '@utils/constant'
import FormControl from '@material-ui/core/FormControl'
import { EInputBase, EFormLabel, ESelect, CancelButton } from '@themes/components/ETextField'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import classnames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'
import { graphql } from 'gatsby'
import { toast } from 'react-toastify'
import ReCaptcha from '@components/ReCaptcha'
import fetchWithTimeout from '@utils/fetchWithTimeout'
import { useI18next } from 'gatsby-plugin-react-i18next'
import Layout from '@layouts/Layout'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    paddingBottom: theme.spacing(11),
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 0,
    },
  },
  tabRoot: {
    borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.body1.fontSize,
    minWidth: 'auto',
    padding: theme.spacing(0, 3),
    opacity: 1,
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      fontSize: theme.typography.body2.fontSize,
    },
  },
  leftWrapper: {
    paddingRight: theme.spacing(11.5),
    [theme.breakpoints.down('sm')]: {
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
    },
  },
  selected: {
    fontWeight: theme.typography.fontWeightBold,
  },
  scrollButtons: {
    color: theme.palette.primary.contrastText,
  },
  imageList: {
    overflow: 'unset',
  },
  imageListItem: {
    height: 'auto',
  },
  imageListItemItem: {
    overflow: 'initial',
  },
  contentRoot: {
    padding: theme.spacing(0, 3),
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  button: {
    width: '100%',
    height: theme.spacing(11),
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    fontSize: theme.typography.body1.fontSize,
    justifyContent: 'flex-start',
    textTransform: 'none',
    borderRadius: theme.spacing(1.5),
    '& svg': {
      width: theme.spacing(5),
      height: theme.spacing(5),
      [theme.breakpoints.down('md')]: {
        width: theme.spacing(4),
        height: theme.spacing(4),
      },
      [theme.breakpoints.down('sm')]: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.body2.fontSize,
      height: theme.spacing(8),
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1.5),
    },
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(9),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
  activeIcon: {
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
  form: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 5),
    borderRadius: theme.spacing(1.5),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 3),
      paddingBottom: theme.spacing(7.5),
      borderRadius: `${theme.spacing(1.5)} ${theme.spacing(1.5)} 0 0 `,
    },
  },
  formTitle: {
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing(1.5),
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.down('xs')]: {
      color: theme.palette.primary.main,
      margin: theme.spacing(0, 3),
      marginTop: theme.spacing(6),
      fontSize: theme.typography.body2.fontSize,
    },
  },
  dialingCode: {
    flexShrink: 0,
  },
  textarea: {
    borderColor: theme.palette.grey[300],
    borderRadius: theme.spacing(0.75),
    padding: theme.spacing(2),
    fontSize: theme.typography.body1,
    color: theme.palette.supporting.supporting03,
    '&::placeholder': {
      color: theme.palette.grey[400],
    },
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
}))

const initialValues = {
  companyName: '',
  dialingCode: '852',
  phone: '',
  email: '',
  message: '',
}

const ContactUs = () => {
  const classes = useStyles()
  const { t } = useI18next()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const [activeTab, setActiveTab] = useState(0)
  const [loading, setLoading] = useState(false)
  const [reCapStatus, setReCapStatus] = useState(0)
  const { whatsapp, email, phone, messenger } = useSiteMetadata()

  const schema = oriSchema(t).pick(['companyName', 'message', 'dialingCode', 'phone', 'email'])

  const contactTypes = [
    {
      label: '+852 3613 0533',
      Icon: PhoneIcon,
      tabLabel: t('contact_us.types.0'),
      type: 'phone',
      link: phone,
    },
    {
      label: 'info@take2.health',
      Icon: EmailIcon,
      tabLabel: t('contact_us.types.1'),
      type: 'email',
      link: email,
    },
    {
      label: 'WhatsApp',
      Icon: WhatsappIcon,
      tabLabel: t('contact_us.types.2'),
      type: 'link',
      link: whatsapp,
    },
    {
      label: 'Messenger',
      Icon: MessengerIcon,
      tabLabel: t('contact_us.types.3'),
      type: 'link',
      link: messenger,
    },
  ]

  // const handleTabChange = (event, newValue) => setActiveTab(newValue)

  const handleFetch = async (values) => {
    try {
      const res = await fetchWithTimeout('/contactUs/add', { values })
      if (res?.code !== 1000) return Promise.reject(res?.message || t('status.submit.fail'))
      return
    } catch (error) {
      return Promise.reject(t('status.submit.fail'))
    }
  }

  const getHref = (type, link) => {
    switch (type) {
      case 'phone':
        return `tel:${link}`
      case 'email':
        return `mailto:${link}`
      default:
        return link
    }
  }

  return (
    <Layout>
      <Box className={classes.root}>
        <Container className={classes.container} disableGutters maxWidth='xl'>
          <Box height={matches ? 118 : 190} bgcolor='primary.main' mb={-13.75}></Box>
          <Box className={classes.contentRoot}>
            <Container disableGutters maxWidth='md'>
              <Grid container spacing={0}>
                <Grid className={classes.leftWrapper} item xs={12} sm={7}>
                  <Box
                    mt={1.5}
                    px={matches ? 3 : 0}
                    fontSize={matches ? 'body2.fontSize' : 'body1.fontSize'}
                    color='primary.contrastText'
                  >
                    {t('contact_us.title')}
                  </Box>
                  {/* <Tabs
                  scrollButtons='off'
                  variant='scrollable'
                  indicatorColor='secondary'
                  value={activeTab}
                  onChange={handleTabChange}
                  classes={{
                    root: classes.tabsRoot,
                    flexContainer: classes.flexContainer,
                    scrollButtons: classes.scrollButtons,
                  }}
                >
                  {contactTypes.map((contactType) => (
                    <Tab
                      key={contactType.label}
                      label={contactType.tabLabel}
                      classes={{
                        root: classes.tabRoot,
                        selected: classes.selected,
                      }}
                    ></Tab>
                  ))}
                </Tabs> */}
                  <Box px={matches ? 3 : 0} mt={matches ? 2 : 1.5}>
                    <ImageList className={classes.imageList} rowHeight='auto' cols={matches ? 1 : 2} gap={16}>
                      {contactTypes.map(({ label, Icon, type, link }, index) => (
                        <ImageListItem
                          key={label}
                          classes={{
                            item: classes.imageListItemItem,
                          }}
                          className={classes.imageListItem}
                        >
                          <Button
                            className={classes.button}
                            classes={{
                              startIcon: classes.startIcon,
                            }}
                            variant={index ? 'outlined' : 'contained'}
                            color={index === activeTab ? 'secondary' : 'primary'}
                            startIcon={<Icon className={classnames(index === activeTab && classes.activeIcon)} />}
                            size='large'
                            href={getHref(type, link)}
                            target={type === 'link' ? '_blank' : ''}
                          >
                            {label}
                          </Button>
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Box className={classes.formTitle}>{t('contact_us.form_title')}</Box>
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
                          <Box mb={4}>
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
                          <Box mb={4}>
                            <Box mb={1}>
                              <EFormLabel>{t('form.phone.label')}</EFormLabel>
                            </Box>
                            <Box display='flex'>
                              <Box mr={0.5}>
                                <FormControl className={classes.dialingCode} required>
                                  <ESelect
                                    labelId='dialingCode-select-label'
                                    id='dialingCode-type-select'
                                    name='dialingCode'
                                    value={values.dialingCode}
                                    onChange={handleChange}
                                    displayEmpty
                                  >
                                    {DIALING_CODES.map((dialingCode) => (
                                      <MenuItem key={dialingCode.value} value={dialingCode.value}>
                                        {dialingCode.label}
                                      </MenuItem>
                                    ))}
                                  </ESelect>
                                </FormControl>
                              </Box>
                              <FormControl fullWidth error={isError('phone')}>
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
                          <Box mb={4}>
                            <FormControl fullWidth error={isError('email')} required>
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
                          </Box>
                          <Box mb={4}>
                            <FormControl fullWidth>
                              <EFormLabel>{t('form.message.label')}</EFormLabel>
                              <TextareaAutosize
                                className={classes.textarea}
                                minRows={6}
                                aria-label='message'
                                name='message'
                                onChange={handleChange}
                                value={values.message}
                                placeholder={t('form.message.placeholder')}
                              />
                            </FormControl>
                            <FormHelperText>
                              <Box color='primary.main' component='span'>
                                {t('form.message.validation.required')}
                              </Box>
                            </FormHelperText>
                          </Box>
                          <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='secondary'
                            disabled={reCapStatus === 1}
                          >
                            {loading ? <CircularProgress color='inherit' size={24} /> : t('common.submit')}
                          </Button>
                          {reCapStatus > 0 && <ReCaptcha onChange={(value) => setReCapStatus(value)}></ReCaptcha>}
                        </form>
                      )
                    }}
                  </Formik>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default ContactUs

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
