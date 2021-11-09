import React from 'react'
import { makeStyles } from '@material-ui/core/'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import ConsultImage from '@images/homepage_consult.jpg'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(14),
    marginBottom: theme.spacing(15),
  },
  leftWrapper: {
    paddingRight: theme.spacing(8),
  },
  rightWrapper: {
    padding: theme.spacing(0, 1.75),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contentWrapper: {
    maxWidth: theme.spacing(73.4),
  },
  content: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightLight,
    color: theme.palette.text.primary,
    marginTop: theme.spacing(2),
  },
  bg: {
    width: '100%',
    height: theme.spacing(66),
    backgroundImage: `url(${ConsultImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center right',
    borderRadius: `0 6px 6px 0`,
  },
  greyLink: {
    color: theme.palette.grey[600],
  },
  blueLink: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
  },
  btn: {
    marginRight: theme.spacing(2),
  },
}))

const Consult = () => {
  const classes = useStyles()
  return (
    <Container disableGutters className={classes.root} maxWidth='xl'>
      <Grid container>
        <Grid className={classes.leftWrapper} item xs={6}>
          <Box className={classes.bg}></Box>
        </Grid>
        <Grid className={classes.rightWrapper} item xs={6}>
          <Box>
            <Typography variant='h5' color='primary' component='div'>
              立即登記 線上專業諮詢
              <Box className={classes.content}>
                只需輸入簡單資料，便可與我們保持聯繫，亦可享用線上醫療諮詢服務或特快預約測試，接收專業資訊、測試提示、活動推廣及首輪優惠等。
                <Link to='' className={classes.greyLink}>
                  條款及細則
                </Link>
              </Box>
            </Typography>
            <Box mt={4}>
              <Button
                className={classes.btn}
                variant='outlined'
                color='primary'
              >
                了解更多
              </Button>
              <Button variant='contained' color='secondary'>
                立即登記
              </Button>
            </Box>
            <Box mt={5}>
              <Link className={classes.blueLink} to='' comments='div'>
                了解更多我們的產品
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Consult