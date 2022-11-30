import React from 'react'
import { makeStyles, IconButton, Box, alpha } from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { WHATS_APP_LINK } from '@utils/constant'
import { Trans } from 'gatsby-plugin-react-i18next'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import ETooltip from '@themes/components/ETooltip'
import { useMatch } from '@reach/router'
import useLangQuery from '@hooks/useLangQuery'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: theme.zIndex.appBar,
    right: theme.spacing(3),
    bottom: theme.spacing(2.75),
    display: 'flex',
    flexDirection: 'column',
  },
  whatsAppBtn: {
    backgroundColor: theme.palette.success.main,
    boxShadow: theme.shadows[4],
    '&:hover': {
      backgroundColor: alpha(theme.palette.success.main, 0.9),
    },
    marginBottom: theme.spacing(1.5),
  },
  whatsAppIcon: {
    color: theme.palette.primary.contrastText,
  },
  shopBtn: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    transition: `background-color ease 0.3s`,
    '&:hover': {
      backgroundColor: theme.palette.grey[100],
    },
  },
  shopBtnTooltip: {
    position: 'absolute',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    fontSize: 13,
    boxShadow: 'rgb(0 0 0 / 20%) 2px 2px 5px',
    right: `calc(100% + ${theme.spacing(1.75)}px)`,
    whiteSpace: 'nowrap',
    height: theme.spacing(5),
    padding: theme.spacing(0, 1.5),
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.spacing(1),
    top: `calc(50% - ${theme.spacing(4 / 2)}px)`,
  },
}))

const ShoppingBtn = () => {
  const classes = useStyles()
  const isReHealthPlansPage = useMatch('/rehealth-prevaccination-plans')
  const addLangQuery = useLangQuery()

  return (
    <Box className={classes.root}>
      {!isReHealthPlansPage && (
        <ETooltip placement='left' title='WhatsApp'>
          <IconButton
            className={classes.whatsAppBtn}
            aria-label='whatsapp icon'
            href={WHATS_APP_LINK}
            target='_blank'
            id='ECP_Sticky_Whatsapp'
          >
            <WhatsAppIcon className={classes.whatsAppIcon} />
          </IconButton>
        </ETooltip>
      )}
      <IconButton
        className={classes.shopBtn}
        href={addLangQuery()}
        target='_blank'
        variant='contain'
        id='ECP_Sticky_EH'
      >
        <ShoppingBasketIcon color='secondary'></ShoppingBasketIcon>
        <Box className={classes.shopBtnTooltip}>
          <Trans i18nKey='common.online_promotion_code'>
            網上預約
            <br />
            {/* 優惠碼{{ PROMOTION_CODE }} */}
          </Trans>
        </Box>
      </IconButton>
    </Box>
  )
}

export default ShoppingBtn
