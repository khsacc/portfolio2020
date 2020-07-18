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
    path: '/Profile',
    name: 'Profile',
    objectPosition: 65,
    shownTop: true,
    shownFooter: true
  },
  {
    path: '/Works',
    name: 'Works',
    objectPosition: 45,
    shownTop: true,
    shownFooter: true
  },
  {
    path: '/Contact',
    name: 'Contact',
    objectPosition: 100,
    shownTop: true,
    shownFooter: true
  }
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
