import { lazy } from '@loadable/component'

export const Login = lazy(() => import(/* webpackChunkName: "login" */'./login'))
export const Registration = lazy(() => import(/* webpackChunkName: "registration" */'./registration'))