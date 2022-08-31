import React from 'react'
import ClockIcon from '@components/CampaignV2/images/clock.svg'
import { makeStyles, useTheme, useMediaQuery, Hidden, Box, Button, Typography } from '@material-ui/core'
import { PROMOTION_CODE } from '@utils/constant'
import classnames from 'classnames'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { toast } from 'react-toastify'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import useLangQuery from '@hooks/useLangQuery'

const useStyles = makeStyles((theme) => ({
  icon: {
    flexShrink: 0,
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
    },
  },
  whiteBgIcon: {
    '& path': {
      stroke: theme.palette.prophecyPrimary.main,
    },
  },
  button: {
    height: theme.spacing(6),
    marginLeft: 'auto',
    fontSize: theme.typography.body1.fontSize,
    padding: theme.spacing(0, 3.5),
    fontWeight: theme.typography.fontWeightBold,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2),
    },
  },
  codeWrapper: {
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 0.5),
    },
  },
  priceText: {
    [theme.breakpoints.down('xs')]: {
      lineHeight: 1,
    },
  },
}))
const PromotionContent = ({ whiteBg }) => {
  const classes = useStyles()
  const { t, language } = useI18next()
  const isEn = language === 'en'
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const isTable = useMediaQuery(theme.breakpoints.down('sm'))
  const addLangQuery = useLangQuery()

  const handleCopy = (e) => toast.success('優惠碼複製成功！')

  return (
    <>
      <Box
        color={whiteBg ? 'prophecyPrimary.main' : 'secondary.contrastText'}
        justifyContent={isMobile ? 'flex-start' : 'center'}
        display={isMobile ? 'block' : 'flex'}
        height='100%'
        alignItems={isMobile ? 'flex-start' : 'center'}
        fontWeight='fontWeightBold'
        flexWrap={isMobile ? 'wrap' : 'nowrap'}
        flexGrow={1}
        pt={isMobile ? 0.25 : 0}
        overflow='hidden'
      >
        <Box
          width={isMobile ? '100%' : 'auto'}
          alignItems='center'
          mt={isMobile ? 1 : 0}
          display='flex'
          flexShrink={0}
          justifyContent={isMobile ? 'center' : null}
        >
          <ClockIcon
            className={classnames(classes.icon, {
              [classes.whiteBgIcon]: whiteBg,
            })}
          />
          <Box
            pl={0.5}
            fontSize={isTable ? (isMobile ? 'body2.fontSize' : 'body1.fontSize') : 'h6.fontSize'}
            component='span'
            whiteSpace='nowrap'
          >
            {t('cp_v2.promotion.title')}
            <Hidden xsDown>
              <Box fontWeight='fontWeightLight' component='span'>
                ｜
              </Box>
            </Hidden>
          </Box>
        </Box>
        <Box overflow='hidden' alignItems='center' display='flex' justifyContent={isMobile ? 'center' : null}>
          <Box
            fontSize={isMobile ? 'body2.fontSize' : 'body1.fontSize'}
            flexShrink={0}
            component='span'
            fontWeight='fontWeightMedium'
          >
            {t('cp_v2.promotion.enter')}
          </Box>
          <CopyToClipboard text={PROMOTION_CODE} onCopy={handleCopy}>
            <Box
              fontSize={isMobile ? 'body2.fontSize' : 'h6.fontSize'}
              bgcolor={whiteBg ? 'secondary.main' : 'secondary.contrastText'}
              alignItems='center'
              height={isMobile ? 18 : 32}
              display='flex'
              color={whiteBg ? 'secondary.contrastText' : 'prophecyPrimary.main'}
              borderRadius={4}
              px={isMobile ? 1 : 1.5}
              mx={isMobile ? 0.5 : 1.5}
              component='span'
              className={classes.codeWrapper}
            >
              {PROMOTION_CODE}
            </Box>
          </CopyToClipboard>
          <Typography className={classes.priceText} component='span' noWrap>
            <Box
              fontSize={isMobile ? 'body2.fontSize' : 'body1.fontSize'}
              fontWeight='fontWeightMedium'
              component='span'
            >
              {t('cp_v2.promotion.price')}
            </Box>
            {/* {!isMobile &&
              (isTable || (isEn && whiteBg) ? (
                <Box
                  fontWeight='fontWeightMedium'
                  fontSize={isMobile ? 'body2.fontSize' : 'body1.fontSize'}
                  lineHeight={1}
                >
                  {t('cp_v2.promotion.tip')}
                </Box>
              ) : (
                <Box
                  fontWeight='fontWeightMedium'
                  fontSize={isMobile ? 'body2.fontSize' : 'body1.fontSize'}
                  component='span'
                  pl={0.5}
                >
                  {t('cp_v2.promotion.tip')}
                </Box>
              ))} */}
          </Typography>
        </Box>
        {/* {isMobile && (
          <Box
            display='inline-block'
            fontWeight='fontWeightMedium'
            fontSize={isMobile ? 'body2.fontSize' : 'body1.fontSize'}
            component='span'
            lineHeight={1}
          >
            {t('cp_v2.promotion.tip')}
          </Box>
        )} */}
      </Box>
      {whiteBg && (
        <Button
          className={classes.button}
          size='small'
          variant='contained'
          color='secondary'
          id='ECP_Stickybar_EH'
          href={addLangQuery()}
          target='_blank'
        >
          {t('common.book_now')}
        </Button>
      )}
    </>
  )
}

export default PromotionContent
