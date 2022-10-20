import React from 'react'
import {
  useTheme,
  useMediaQuery,
  Box,
  makeStyles,
  ImageList,
  ImageListItem,
  Typography,
  Button,
  alpha,
} from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import { useI18next, Trans } from 'gatsby-plugin-react-i18next'
import YouTube from 'react-youtube'
import SymptomSwiper from './SymptomSwiper'
import IntersectIcon from '@components/CampaignV2/images/intersect.svg'
import Link from '@components/Link'
import ImageTranslation from '../ImageTranslation'
import classnames from 'classnames'
import useLangQuery from '@hooks/useLangQuery'

const useStyles = makeStyles((theme) => ({
  imageList: {
    overflow: 'visible',
  },
  imageListItem: {
    overflow: 'visible',
  },
  videoContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  video: {
    borderRadius: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      borderRadius: theme.spacing(0.75),
    },
  },
  outlineButton: {
    whiteSpace: 'nowrap',
    color: theme.palette.primary.contrastText,
    backgroundColor: 'transparent',
    borderColor: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginTop: theme.spacing(1.5),
    },
  },
  circle: {
    background: `linear-gradient(180deg, ${alpha('#85B6FF', 0.1)} 0%, ${alpha(
      theme.palette.background.paper,
      0
    )} 100%)`,
  },
}))

const SYMPTOM_LIST = [
  {
    label: 'cp_v2.ngs_characteristic.diseases.0',
    icon: <StaticImage src='../../images/disease_01.png' alt='disease 01'></StaticImage>,
  },
  {
    label: 'cp_v2.ngs_characteristic.diseases.1',
    icon: <StaticImage src='../../images/disease_02.png' alt='disease 02'></StaticImage>,
  },
  {
    label: 'cp_v2.ngs_characteristic.diseases.2',
    icon: <StaticImage src='../../images/disease_03.png' alt='disease 03'></StaticImage>,
  },
]

const characteristics = [
  {
    img: <StaticImage src='../../images/npc_characteristic_01.png' alt='characteristic 01'></StaticImage>,
    detail: 'cp_v2.ngs_characteristic.characteristics.0',
  },
  {
    img: <StaticImage src='../../images/npc_characteristic_02.png' alt='characteristic 02'></StaticImage>,
    detail: 'cp_v2.ngs_characteristic.characteristics.1',
  },
  {
    img: <StaticImage src='../../images/npc_characteristic_03.png' alt='characteristic 03'></StaticImage>,
    detail: 'cp_v2.ngs_characteristic.characteristics.2',
  },
  {
    img: <StaticImage src='../../images/npc_characteristic_04.png' alt='characteristic 04'></StaticImage>,
    detail: 'cp_v2.ngs_characteristic.characteristics.3',
  },
]

const SectionOne = () => {
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles()
  const addLangQuery = useLangQuery()

  return (
    <>
      <ImageTranslation filename='section_banner_01' alt='section banner 01'></ImageTranslation>
      <Box fontSize={isMobile ? 16 : 18} mx='auto' boxSizing='content-box' px={2.5} pb={8} maxWidth={784}>
        <Box position='relative' mt={isMobile ? -5.25 : -8} mb={isMobile ? 6 : 8}>
          <Box pt={`${(9 / 16) * 100}%`} position='relative'>
            <YouTube
              containerClassName={classes.videoContainer}
              className={classes.video}
              videoId='wOPREMoVhys'
              opts={{
                width: '100%',
                height: '100%',
              }}
              id='ECP_Video_Play'
            />
          </Box>
          <Box textAlign={isMobile ? 'left' : 'center'} color='grey.900' component='p'>
            {t('cp_v2.ngs_characteristic.paragraphs.0')}
          </Box>
        </Box>
        <ImageList
          className={classnames('gsap-fade-in-1-trigger', classes.imageList)}
          rowHeight='auto'
          cols={isMobile ? 1 : 2}
          gap={isMobile ? 24 : 32}
        >
          {characteristics.map((item, index) => (
            <ImageListItem className='gsap-fade-in-1' classes={{ item: classes.imageListItem }} key={index}>
              <Box
                bgcolor='background.paper'
                p={isMobile ? 2.5 : 3}
                pr={isMobile ? 2.5 : 1.5}
                flexDirection={isMobile ? 'column' : 'row'}
                alignItems='center'
                display='flex'
                borderRadius={16}
                boxShadow={`0 5px 30px 0 ${alpha('#7C7C7C', 0.1)}`}
              >
                <Box flexShrink={0} width={105} height={105} mr={isMobile ? 0 : 3} mb={isMobile ? 2 : 0}>
                  {item.img}
                </Box>
                <Box color='grey.900' textAlign={isMobile ? 'center' : 'left'} fontWeight='fontWeightBold' mx={1}>
                  <Trans i18nKey={item.detail}>
                    .<sup>2</sup>
                  </Trans>
                </Box>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
        <Box className='gsap-fade-in-2-trigger' mt={6} textAlign='center' color='grey.900'>
          {t('cp_v2.ngs_characteristic.paragraphs.1')}
        </Box>
      </Box>
      <Box
        className='gsap-fade-in-2'
        py={isMobile ? 5 : 6}
        textAlign={isMobile ? 'left' : 'center'}
        maxWidth={1192}
        borderRadius={12}
        bgcolor='#E0F2FF'
        color='#326F99'
        mx='auto'
        px={2.5}
        position='relative'
        zIndex={1}
        mb={-16}
      >
        <Box className='gsap-fade-in-2' maxWidth={988} mx='auto'>
          <Typography variant={isMobile ? 'h4' : 'h5'} color='secondary'>
            {t('cp_v2.ngs_characteristic.paragraphs.2')}
          </Typography>
          <Box mt={2} fontWeight='fontWeightRegular' fontSize={isMobile ? 16 : 18}>
            <Trans i18nKey='cp_v2.ngs_characteristic.paragraphs.3'>
              .<sup>.</sup>.
            </Trans>
          </Box>
        </Box>
      </Box>
      <Box overflow='hidden' px={2} pt={25} pb={isMobile ? 8 : 14} position='relative' bgcolor='prophecyPrimary.main'>
        <Box
          flexDirection='column'
          alignItems='center'
          color='primary.contrastText'
          fontWeight='fontWeightBold'
          display='flex'
          maxWidth={785}
          mx='auto'
          justifyContent='center'
        >
          <Box
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            display='flex'
            fontSize={isMobile ? 20 : 28}
            pb={isMobile ? 3 : 3.5}
          >
            <Box mb={isMobile ? 4 : 5}>{t('cp_v2.ngs_characteristic.paragraphs.4')}</Box>
            <IntersectIcon
              style={{
                width: isMobile ? 64 : 100,
              }}
            />
          </Box>
          <Box width='100%' height={240} position='relative'>
            <Box
              top={0}
              bottom={0}
              width={isMobile ? 534 : 780}
              left='50%'
              right={0}
              position='absolute'
              zIndex={1}
              style={{
                transform: `translateX(-50%)`,
              }}
            >
              <SymptomSwiper></SymptomSwiper>
            </Box>
            <Box
              className={classnames('gsap-scale-1', classes.circle)}
              position='absolute'
              left='50%'
              top={isMobile ? '-60%' : '-110%'}
              width={isMobile ? 780 : 1371}
              height={isMobile ? 780 : 1371}
              borderRadius='50%'
              minWidth={640}
              zIndex={0}
              style={{
                transform: `translateX(-50%)`,
              }}
            ></Box>
            <Box
              className={classnames('gsap-scale-2', classes.circle)}
              position='absolute'
              left='50%'
              top={isMobile ? '-60%' : '-110%'}
              width={isMobile ? 612 : 1213}
              height={isMobile ? 612 : 1213}
              borderRadius='50%'
              minWidth={640}
              zIndex={0}
              style={{
                transform: `translateX(-50%)`,
              }}
              mt={10.5}
            ></Box>
          </Box>
          <Box
            className='gsap-fade-in-3-trigger gsap-fade-in-3'
            width='100%'
            mt={4}
            mb={isMobile ? 4 : 5}
            justifyContent='space-around'
            display='flex'
          >
            {SYMPTOM_LIST.map((symptom) => (
              <Box
                key={symptom.label}
                fontSize={isMobile ? 'body1.fontSize' : 'h5.fontSize'}
                alignItems='center'
                display='flex'
                flexDirection='column'
                textAlign='center'
              >
                <Box width={isMobile ? 88 : 120}>{symptom.icon}</Box>
                <Box mt={isMobile ? 1.5 : 2}>{t(symptom.label)} ?</Box>
              </Box>
            ))}
          </Box>
          <Box
            className='gsap-fade-in-3'
            fontSize={isMobile ? 'body1.fontSize' : 'h6.fontSize'}
            textAlign={isMobile ? 'left' : 'center'}
          >
            {t('cp_v2.ngs_characteristic.paragraphs.5')}
          </Box>
          <Box
            className='gsap-fade-in-3'
            mt={isMobile ? 4 : 8}
            flexWrap={isMobile ? 'wrap' : 'nowrap'}
            display='flex'
            width='100%'
            maxWidth={isMobile ? 'auto' : 480}
          >
            <Button
              fullWidth
              variant='contained'
              color='secondary'
              href={addLangQuery()}
              target='_blank'
              id='ECP_Symptoms_EH'
            >
              {t('common.book_now')}
            </Button>
            <Box width='100%' target='_blank' to='/service-location/' component={Link}>
              <Button className={classes.outlineButton} fullWidth variant='outlined' id='ECP_Symptoms_Location'>
                {t('cp_v2.common.view_service_location')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default SectionOne
