import { MOBILE_REGEX_HK, MOBILE_REGEX_CN, MOBILE_REGEX_MO } from './regex'
import { keyBy } from 'lodash-es'
export const PROMOTION_CODE = 'NEW330'
export const HEADER_HEIGHT = 10.5
export const MOBILE_HEADER_HEIGHT = 7.5
export const POST_ASPECT_RATIO = 471 / 228
export const MDX_MEDIA_MAXWIDTH = 570
export const LOGO_TYPE = {
  take2FullColor: 'take2_full_color',
  take2White: 'take2_white',
  take2WhiteOrange: 'take2_white_orange',
  prophecyWhite: 'prophecy_white',
  prophecyBlue: 'prophecy_blue',
  prophecyFullColor: 'prophecy_full_color',
}
export const FOOTER_HEIGHT = 20
export const LABEL_WIDTH = 20
export const MOBILE_LABEL_WIDTH = 12
export const INPUT_WIDTH = 30
export const MOBILE_INPUT_WIDTH = 24
export const POST_PAGE_SIZE = 6

export const DATE_FORMAT = 'yyyy-MM-dd'
export const DATE_FORMAT_WITHOUT_CONNECT = 'yyyyMMdd'
export const DAY_OF_WEEK = 'eeee'
export const DATE_FORMAT_WITH_WEEK = `yyyy-MM-dd(${DAY_OF_WEEK})`
export const DATE_FORMAT_WITH_TIME = 'yyyy-MM-dd HH:mm'
export const DATABASE_DATE_TIME_FORMAT = 'yyyy-MM-dd HH:mm:ss'
export const TIME_SLICE = 'HH:mm'
export const DIALING_CODES = [
  {
    label: '+852',
    value: '852',
    regex: MOBILE_REGEX_HK,
  },
  {
    label: '+086',
    value: '086',
    regex: MOBILE_REGEX_CN,
  },
  {
    label: '+853',
    value: '853',
    regex: MOBILE_REGEX_MO,
  },
]

export const POST_TYPES = [
  { label: 'options.post_types.all_updates', value: '', color: '' },
  {
    label: 'options.post_types.company_trends',
    value: 'company_trends',
    color: 'supporting.supporting01',
  },
  {
    label: 'options.post_types.company_awards_and_achievements',
    value: 'company_awards_and_achievements',
    color: 'secondary.main',
  },
  {
    label: 'options.post_types.industry_information',
    value: 'industry_information',
    color: 'prophecySupporting.supporting01',
  },
  // {
  //   label: 'options.post_types.business_cooperation',
  //   value: 'business_cooperation',
  //   color: 'prophecyPrimary.main',
  // },
  {
    label: 'options.post_types.ceo_sharing',
    value: 'ceo_sharing',
    color: 'prophecySupporting.supporting02',
  },
]

export const REGIONS = {
  所有地區: 'options.regions.all',
  香港: 'options.regions.hongkong',
  澳門: 'options.regions.macao',
  九龍西: 'options.regions.kowloon_west',
  九龍中: 'options.regions.kowloon_central',
  九龍東: 'options.regions.kowloon_east',
  香港島西: 'options.regions.west_of_hongkong_island',
  香港島東: 'options.regions.east_of_hongkong_island',
  新界北: 'options.regions.new_territories_north',
  新界東南: 'options.regions.southeast_new_territories',
  新界西北: 'options.regions.northwest_new_territories',
  新界東北: 'options.regions.northeast_new_territories',
  新界西南: 'options.regions.southwest_new_territories',
  其他地區: 'options.regions.other',
}

export const FAQ_TYPES = {
  所有問題: 'options.faq_types.all',
  篩查服務: 'options.faq_types.detection_service',
  篩查技術: 'options.faq_types.detection_technology',
  價錢及服務點: 'options.faq_types.price_and_service',
  網上預約及付款流程: 'options.faq_types.book_online_and_pay_process',
  測試需知及結果: 'options.faq_types.notes_and_result',
  有關鼻咽癌: 'options.faq_types.about_npc',
  'Take2 Extra Care會員計劃': 'options.faq_types.membership_program',
  私隱及電子紀錄: 'options.faq_types.privacy_and_electronic_records',
}

const QUIZ_ANSWERS = {
  type01: ['no', 'unclear', 'yes'],
  typeO2: ['never', 'rarely', 'sometimes', 'often'],
}

export const QUIZ = [
  {
    question: 'quiz.questions.0',
    answers: QUIZ_ANSWERS.type01,
  },
  {
    question: 'quiz.questions.1',
    answers: QUIZ_ANSWERS.typeO2,
    type: 'slider',
  },
  {
    question: 'quiz.questions.2',
    answers: QUIZ_ANSWERS.type01,
  },
  {
    question: 'quiz.questions.3',
    answers: QUIZ_ANSWERS.typeO2,
    type: 'slider',
  },
  {
    question: 'quiz.questions.4',
    answers: QUIZ_ANSWERS.typeO2,
    type: 'slider',
  },
  {
    question: 'quiz.questions.5',
    answers: QUIZ_ANSWERS.typeO2,
    type: 'slider',
  },
]

export const CAREER_REGIONS = [
  {
    label: 'options.career_regions.all',
    value: '',
  },
  {
    label: 'options.career_regions.hongkong_special_administrative_region',
    value: 'hongkong_special_administrative_region',
  },
  {
    label: 'options.career_regions.mainland_china',
    value: 'mainland_china',
  },
]

export const GENDER_OPTIONS = [
  {
    label: 'options.gender.male',
    value: 'male',
  },
  {
    label: 'options.gender.female',
    value: 'female',
  },
]

const QUIZ_ANSWER_OPTIONS = [
  {
    label: 'options.quiz.no',
    value: 'no',
  },
  {
    label: 'options.quiz.unclear',
    value: 'unclear',
  },
  {
    label: 'options.quiz.yes',
    value: 'yes',
  },
  {
    label: 'options.quiz.never',
    value: 'never',
  },
  {
    label: 'options.quiz.rarely',
    value: 'rarely',
  },
  {
    label: 'options.quiz.sometimes',
    value: 'sometimes',
  },
  {
    label: 'options.quiz.often',
    value: 'often',
  },
]

export const QUIZ_ANSWER_KEYS = keyBy(QUIZ_ANSWER_OPTIONS, 'value')

export const AGE_OPTIONS = [
  {
    label: 'options.age.20_or_below',
    value: '20_or_below',
  },
  {
    label: '21-30',
    value: '21_to_30',
  },
  {
    label: '31-40',
    value: '31_to_40',
  },
  {
    label: '41-50',
    value: '41_to_50',
  },
  {
    label: '51-60',
    value: '51_to_60',
  },
  {
    label: 'options.age.61_or_above',
    value: '61_or_above',
  },
]

export const DEPARTMENT_OPTIONS = [
  {
    label: 'options.department.all',
    value: '',
  },
  {
    label: 'options.department.business_strategic_cooperation',
    value: 'business_strategic_cooperation',
  },
  {
    label: 'DITE',
    value: 'dite',
  },
]
