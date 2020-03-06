import { lazy } from '@loadable/component'

export const Login = lazy(() => import(/* webpackChunkName: "login" */'./Login'))
export const Registration = lazy(() => import(/* webpackChunkName: "registration" */'./Registration'))
