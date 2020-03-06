import { lazy } from '@loadable/component'

export const Details = lazy(() => import(/* webpackChunkName: "details" */'./Details'))
export const Terms = lazy(() => import(/* webpackChunkName: "terms" */'./Terms'))
export const Welcome = lazy(() => import(/* webpackChunkName: "welcome" */'./Welcome'))
