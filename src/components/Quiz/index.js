import React, { useState } from 'react'
import { Formik, FieldArray } from 'formik'
import { throttle } from 'lodash-es'
import { oriSchema } from '@utils/schema'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { DIALING_CODES } from '@utils/constant'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import RadioGroup from '@material-ui/core/RadioGroup'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import TextField from '@material-ui/core/TextField'
import MaleIcon from '@images/icons/male.svg'
import FemaleIcon from '@images/icons/female.svg'
import GenderRadio from './GenderRadio'

const useStyle = makeStyles((theme) => ({
  root: {
    height: theme.spacing(82.5),
    borderRadius: theme.spacing(4),
    display: 'grid',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(15),
    // overflow: 'hidden',
  },
  quizBg: {
    gridArea: '1/1',
  },
  formRoot: {
    gridArea: '1/1',
    display: 'grid',
    position: 'relative',
  },
  quizLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const initialValues = {
  gender: '0',
  age: '',
  quiz: [
    { label: 'quiz1', value: '' },
    { label: 'quiz2', value: '' },
    { label: 'quiz3', value: '' },
    { label: 'quiz4', value: '' },
    { label: 'quiz5', value: '' },
    { label: 'quiz6', value: '' },
  ],
  email: '',
  phone: '',
  dialing: '',
}
const schema = oriSchema.pick(['gender'])

const Quiz = () => {
  const classes = useStyle()
  const [step, setStep] = useState(0)

  return (
    <Box className={classes.root}>
      {step > 0 && step <= initialValues?.quiz?.length ? (
        <StaticImage
          className={classes.quizBg}
          layout='fullWidth'
          src='../../assets/images/quiz_02.png'
          alt='quiz bg 01'
          objectFit='fill'
        ></StaticImage>
      ) : (
        <StaticImage
          className={classes.quizBg}
          layout='fullWidth'
          src='../../assets/images/quiz_01.png'
          alt='quiz bg 01'
          objectFit='fill'
        ></StaticImage>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={throttle(async (values) => {
          setStep(8)
        }, 1000)}
      >
        {(props) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            isSubmitting,
          } = props

          const handleStartQuiz = () => {
            if (values.gender && values.age) setStep(1)
          }

          const handleQuizBack = () =>
            setStep((oldValue) => Math.max(oldValue - 1, 1))

          const handleQuizNext = () =>
            setStep((oldValue) => Math.min(oldValue + 1, 7))
          return (
            <form onSubmit={handleSubmit} className={classes.formRoot}>
              {step === 0 && (
                <Grid container>
                  <Grid item className={classes.quizLeft} xs={6}>
                    <Box maxWidth={520}>
                      <StaticImage
                        src='../../assets/images/quiz_cover.png'
                        alt='quiz cover'
                      ></StaticImage>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box pt={11.75} pr={3}>
                      <Box mb={3}>
                        <Typography variant='h4' color='primary'>
                          免費測驗 了解健康
                        </Typography>
                      </Box>
                      <Box mb={2.5} color='grey.900'>
                        <Typography variant='body1'>
                          來個簡單測驗？可能逆轉一切！
                          <br />
                          雖然早期鼻咽癌病徵不明顯，但總有迹可尋。倘若晚期才確診，5年內存活率有機會跌至70%以下。以下簡單問題經專業人士設定，讓你了解鼻咽癌的徵狀。
                        </Typography>
                      </Box>
                      <FormControl component='fieldset'>
                        <Typography variant='subtitle2' color='primary'>
                          性別
                        </Typography>
                        <RadioGroup
                          name='gender'
                          value={values.gender}
                          onChange={handleChange}
                          row
                        >
                          <FormControlLabel
                            value='0'
                            control={
                              <GenderRadio
                                icon={<MaleIcon />}
                                checkedIcon={<MaleIcon />}
                              />
                            }
                            label='男性'
                          />
                          <FormControlLabel
                            value='1'
                            control={
                              <GenderRadio
                                icon={<FemaleIcon color='primary' />}
                                checkedIcon={<FemaleIcon color='primary' />}
                              />
                            }
                            label='女性'
                          />
                        </RadioGroup>
                      </FormControl>
                      <FormControl variant='outlined'>
                        <InputLabel shrink>Age</InputLabel>
                        <Select
                          labelId='age-select-label'
                          id='age-type-select'
                          name='age'
                          label='age'
                          value={values.age}
                          onChange={handleChange}
                          placeholder='请选择'
                        >
                          <MenuItem value=''>请选择</MenuItem>
                          <MenuItem value='0'>1~10</MenuItem>
                          <MenuItem value='1'>11~20</MenuItem>
                          <MenuItem value='2'>21~30</MenuItem>
                          <MenuItem value='3'>31~40</MenuItem>
                          <MenuItem value='4'>41~50</MenuItem>
                          <MenuItem value='5'>51~60</MenuItem>
                          <MenuItem value='6'>61~70</MenuItem>
                          <MenuItem value='7'>71~80</MenuItem>
                        </Select>
                      </FormControl>
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={handleStartQuiz}
                      >
                        開始免費測驗
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              )}
              {step > 0 && step <= 6 && (
                <>
                  <Box display='flex' alignItems='center'>
                    <Box width='100%' mr={1}>
                      <LinearProgress
                        variant='determinate'
                        value={(step / values?.quiz?.length) * 100}
                      />
                    </Box>
                    <Box minWidth={35}>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                      >{`${Math.round(
                        (step / values?.quiz?.length) * 100
                      )}%`}</Typography>
                    </Box>
                  </Box>
                  <FieldArray name='quiz'>
                    {() =>
                      values?.quiz?.length &&
                      values.quiz.map(
                        (item, index) =>
                          index + 1 === step && (
                            <FormControl key={index} component='fieldset'>
                              <FormLabel>{item.label}</FormLabel>
                              <RadioGroup
                                name={`quiz[${index}].value`}
                                value={item.value}
                                onChange={handleChange}
                                row
                              >
                                <FormControlLabel
                                  value='0'
                                  control={<Radio color='primary' />}
                                  label='a1'
                                  labelPlacement='end'
                                />
                                <FormControlLabel
                                  value='1'
                                  control={<Radio color='primary' />}
                                  label='a2'
                                  labelPlacement='end'
                                />
                              </RadioGroup>
                              <FormHelperText>error</FormHelperText>
                            </FormControl>
                          )
                      )
                    }
                  </FieldArray>
                  <Box display='flex'>
                    {step !== 1 && (
                      <Button
                        variant='text'
                        color='default'
                        onClick={handleQuizBack}
                      >
                        返回上一题
                      </Button>
                    )}
                    {step <= values.quiz.length && values.quiz[step - 1].value && (
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={handleQuizNext}
                      >
                        下一题
                      </Button>
                    )}
                  </Box>
                </>
              )}
              {step === 7 && (
                <Grid container>
                  <Grid item xs={6}>
                    images
                  </Grid>
                  <Grid item xs={6}>
                    <Box mb={3}>
                      <Typography variant='h4' color='primary'>
                        最後一個步驟免費獲取結果!
                      </Typography>
                    </Box>
                    <Box mb={2.5}>
                      <Typography variant='body1'>
                        來個簡單測驗？可能逆轉一切！
                        <br />
                        請輸入電郵以獲取結果，及後可通過得易健康服務平台網上系統免費登記成為Take2
                        ExtraCare會員,
                        或輸入電話號碼與線上註冊護士咨詢服務或產品內容!{' '}
                      </Typography>
                    </Box>
                    <TextField
                      variant='outlined'
                      margin='normal'
                      fullWidth
                      id='email'
                      label='電郵'
                      name='email'
                      placeholder='example@take2health.com'
                      value={values.email}
                      onChange={handleChange}
                    />
                    或
                    <FormControl variant='outlined'>
                      <Select
                        labelId='dialing-select-label'
                        id='age-type-select'
                        name='dialing'
                        label='dialing'
                        value={values.dialing}
                        onChange={handleChange}
                        placeholder='请选择'
                      >
                        <MenuItem value=''>请选择</MenuItem>
                        {DIALING_CODES.map((dialing) => (
                          <MenuItem value={dialing.value} key={dialing.value}>
                            {dialing.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <TextField
                      variant='outlined'
                      margin='normal'
                      fullWidth
                      id='phone'
                      label='電話號碼'
                      name='phone'
                      placeholder='9876 5432'
                      value={values.phone}
                      onChange={handleChange}
                    />
                    <Button type='submit' variant='contained' color='secondary'>
                      提交
                    </Button>
                  </Grid>
                </Grid>
              )}
              {step === 8 && (
                <Grid container>
                  <Grid item xs={6}>
                    images
                  </Grid>
                  <Grid item xs={6}>
                    <Box mb={3}>
                      <Typography variant='h4' color='primary'>
                        多謝參與！
                      </Typography>
                    </Box>
                    <Typography variant='h6' color='initial'>
                      測驗經已完成！
                    </Typography>
                    <Box mb={2.5}>
                      <Typography variant='body1'>
                        以上問題都與鼻咽癌息息相關，如持續出現上述一項或以上病徵，建議儘快向醫生諮詢。
                        <br />
                        你亦可立即登記，免費成為Take2 Extra
                        Care會員，預約進行檢測，或享用得易健康網上平台的服務。
                      </Typography>
                    </Box>
                    <Box display='flex'>
                      <Button variant='outlined' color='primary'>
                        了解更多
                      </Button>
                    </Box>
                    <Button variant='contained' color='secondary'>
                      登記成為會員
                    </Button>
                  </Grid>
                </Grid>
              )}
            </form>
          )
        }}
      </Formik>
    </Box>
  )
}

export default Quiz