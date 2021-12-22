import React, { useState } from 'react'
import {
  makeStyles,
  InputAdornment,
  Box,
  Container,
  Typography,
  Grid,
  alpha,
  FormControl,
  FormHelperText,
  CircularProgress,
  MenuItem,
  useTheme,
  useMediaQuery,
  Button,
} from '@material-ui/core'
import { debounce, throttle } from 'lodash-es'
import SearchIcon from '@images/icons/search.svg'
import { graphql } from 'gatsby'
import CareerItem from '@components/CareerItem'
import { Formik } from 'formik'
import { oriSchema } from '@utils/schema'
import { DEPARTMENTS, REGIONS } from '@utils/constant'
import {
  EInputBase,
  EFormLabel,
  ESelect,
  CancelButton,
} from '@themes/components/ETextField'
import { toast } from 'react-toastify'
import { StaticImage } from 'gatsby-plugin-image'

const useStyles = makeStyles((theme) => ({
  root: {},
  box01: {
    paddingTop: theme.spacing(9.5),
    paddingBottom: theme.spacing(8.5),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(19.5),
    },
  },
  box01Title: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
    },
  },
  headerRoot: {
    textAlign: 'center',
    padding: theme.spacing(0, 3),
  },
  countWrapper: {
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
    height: 138,
    padding: theme.spacing(4, 8),
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: theme.spacing(9.5),
    [theme.breakpoints.down('xs')]: {
      height: 122,
      marginTop: theme.spacing(5),
      padding: theme.spacing(4, 3),
      paddingTop: theme.spacing(4.5),
      alignItems: 'flex-start',
    },
  },
  careersWrapper: {
    padding: theme.spacing(0, 8),
    marginTop: theme.spacing(-1.5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 3),
      marginTop: theme.spacing(-4.25),
    },
  },
  box03: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(15),
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(24),
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
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(1),
    },
  },
  box03Wrapper: {
    maxWidth: 570,
    fontSize: theme.typography.body1.fontSize,
    padding: theme.spacing(0, 3),
  },
  sideImg: {
    borderRadius: `0 12px 12px 0`,
    width: `93%`,
    [theme.breakpoints.down('xs')]: {
      width: `calc(100% - ${theme.spacing(3)}px)`,
      marginTop: theme.spacing(-26),
    },
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
  requiredArea: true,
  requiredName: true,
  name: '',
  email: '',
  area: '',
  department: '',
}

const schema = oriSchema().pick(['name', 'email', 'area', 'department'])

const JoinUs = ({ data }) => {
  const classes = useStyles()
  const nodes = data?.allMdx?.nodes || []
  const pageInfo = data?.allMdx?.pageInfo
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const [loading, setLoading] = useState(false)

  const handleSearch = debounce((e) => {
    console.log('e', e.target.value)
  }, 300)

  const handleSubmit = async (values) => {
    try {
      const res = await fetch(`${process.env.GATSBY_API_URL}/joinUs/add`, {
        method: 'POST',
        body: JSON.stringify(values), // data can be `string` or {object}!
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      })
      const resData = await res.json()
      if (resData?.code !== 1000)
        return Promise.reject(resData?.message || '提交失敗')
      return
    } catch (error) {
      return Promise.reject('提交失敗')
    }
  }

  return (
    <Box className={classes.root}>
      <Container className={classes.box01} disableGutters maxWidth='md'>
        <Container className={classes.headerRoot} disableGutters maxWidth='sm'>
          <Typography
            className={classes.box01Title}
            variant='h4'
            color='primary'
          >
            加入我們
          </Typography>
          <Typography variant={matches ? 'body2' : 'body1'} color='textPrimary'>
            作為一家初創企業，我們期待與更多生物科技行業的專才，及各行業的專業人士合作，攜手帶領
            Take2 Health在本地及海外市場拓展，改寫人類健康。
            <br />
            <br />
            誠邀閣下加入我們團隊，成為我們一份子，一起為人類健康努力，共同發掘無限可能。
          </Typography>
        </Container>
        <Box className={classes.countWrapper}>
          <Typography variant='h5' color='primary'>
            瀏覽現有空缺 ({pageInfo.totalCount})
          </Typography>
        </Box>
        <Box className={classes.careersWrapper}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <EInputBase
                className={classes.searchInput}
                placeholder='Search'
                onChange={handleSearch}
                startAdornment={
                  <InputAdornment position='start'>
                    <SearchIcon color='disabled' />
                  </InputAdornment>
                }
              ></EInputBase>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box>
                {nodes?.map((node) => (
                  <CareerItem
                    key={node.id}
                    slug={node?.fields?.slug}
                    {...node.frontmatter}
                  ></CareerItem>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box className={classes.box03}>
        <Container disableGutters maxWidth='lg'>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <StaticImage
                className={classes.sideImg}
                src='../../assets/images/join_us_01.jpg'
                alt='international img 01'
                objectFit='fill'
              ></StaticImage>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className={classes.box03Wrapper}>
                <Typography
                  className={classes.box03Title}
                  variant='h4'
                  color='primary'
                >
                  加入我們
                </Typography>

                <Typography
                  variant={matches ? 'body2' : 'body1'}
                  color='textPrimary'
                >
                  如現時未有合適空缺，歡迎留下聯絡方法，
                  <br />
                  第一時間獲取最新空缺資料：
                </Typography>
                <Formik
                  initialValues={initialValues}
                  validationSchema={schema}
                  onSubmit={throttle(async (values) => {
                    if (loading) return
                    try {
                      setLoading(true)
                      await handleSubmit(values)
                      toast.success('已成功提交')
                    } catch (error) {
                      toast.error(error)
                    }
                    setLoading(false)
                  }, 1000)}
                >
                  {(props) => {
                    const {
                      values,
                      handleSubmit,
                      handleChange,
                      touched,
                      errors,
                      setFieldValue,
                    } = props
                    const isError = (field) =>
                      touched[field] && Boolean(errors[field])
                    const errorText = (field) =>
                      touched[field] &&
                      errors[field] && (
                        <FormHelperText>{errors[field]}</FormHelperText>
                      )

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
                      <form
                        onSubmit={handleSubmit}
                        className={classes.form}
                        noValidate
                      >
                        <Box className={classes.formControlLine}>
                          <FormControl
                            fullWidth
                            error={isError('name')}
                            required
                          >
                            <EFormLabel>聯絡人姓名</EFormLabel>
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
                          <FormControl
                            fullWidth
                            error={isError('email')}
                            required
                          >
                            <EFormLabel>電郵</EFormLabel>
                            <EInputBase
                              id='email'
                              name='email'
                              margin='none'
                              value={values.email}
                              onChange={handleChange}
                              placeholder={
                                isError('email')
                                  ? ''
                                  : 'example@take2health.com'
                              }
                              endAdornment={<CusCancelButton field='email' />}
                            />
                            {errorText('email')}
                          </FormControl>
                        </Box>

                        <Box className={classes.formControlLine}>
                          <FormControl
                            fullWidth
                            error={isError('area')}
                            className={classes.formControl}
                            required
                          >
                            <EFormLabel>地區</EFormLabel>
                            <ESelect
                              displayEmpty
                              labelId='area-label'
                              id='area'
                              name='area'
                              value={values.area}
                              onChange={handleChange}
                            >
                              {REGIONS[0]?.districts?.map((district) => (
                                <MenuItem
                                  key={district.value}
                                  value={district.value}
                                  disabled={!Boolean(district.value)}
                                >
                                  {district.label}
                                </MenuItem>
                              ))}
                            </ESelect>
                            {errorText('area')}
                          </FormControl>
                          <FormControl
                            fullWidth
                            error={isError('department')}
                            className={classes.formControl}
                            required
                          >
                            <EFormLabel>部門</EFormLabel>
                            <ESelect
                              displayEmpty
                              labelId='department-label'
                              id='department'
                              name='department'
                              value={values.department}
                              onChange={handleChange}
                            >
                              {DEPARTMENTS?.map((department) => (
                                <MenuItem
                                  key={department.value}
                                  value={department.value}
                                  disabled={!Boolean(department.value)}
                                >
                                  {department.label}
                                </MenuItem>
                              ))}
                            </ESelect>
                            {errorText('department')}
                          </FormControl>
                        </Box>
                        <Button
                          type='submit'
                          fullWidth
                          variant='contained'
                          color='secondary'
                          className={classes.submitBtn}
                        >
                          {loading ? (
                            <CircularProgress color='inherit' size={24} />
                          ) : (
                            '提交'
                          )}
                        </Button>
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
  )
}

export default JoinUs

export const query = graphql`
  {
    allMdx(
      limit: 1000
      filter: { fileAbsolutePath: { regex: "/join-us/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD/MM/YYYY")
          title
          type
          region
        }
      }
      pageInfo {
        totalCount
      }
    }
  }
`
