import { workData } from '@/assets/workData'

export type pageDatum = {
  path: string,
  name: string,
  objectPosition: number,
  shownTop: boolean
  shownFooter: boolean
}

const otherPageData: pageDatum[] = [
  {
    path: '/',
    name: 'Top Page',
    objectPosition: 8,
    shownTop: false,
    shownFooter: true
  },
  {
    path: '/profile',
    name: 'Profile',
    objectPosition: 65,
    shownTop: true,
    shownFooter: true
  },
  {
    path: '/works',
    name: 'Works',
    objectPosition: 45,
    shownTop: true,
    shownFooter: true
  },
  {
    path: '/works/search',
    name: 'Works Search',
    objectPosition: 55,
    shownTop: false,
    shownFooter: false
  },
]

const workPageData:pageDatum[] = workData.map(work => ({
  path: work.to,
  name: work.abstractTitle,
  objectPosition: work.objectPosition,
  shownTop: false,
  shownFooter: false
}))

export const pageData = [
  ...otherPageData,
  ...workPageData
]
