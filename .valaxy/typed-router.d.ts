/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/404': RouteRecordInfo<'/404', '/404', Record<never, never>, Record<never, never>>,
    '/about/': RouteRecordInfo<'/about/', '/about', Record<never, never>, Record<never, never>>,
    '/about/site': RouteRecordInfo<'/about/site', '/about/site', Record<never, never>, Record<never, never>>,
    '/archives/': RouteRecordInfo<'/archives/', '/archives', Record<never, never>, Record<never, never>>,
    '/archives/[year]/': RouteRecordInfo<'/archives/[year]/', '/archives/:year', { year: ParamValue<true> }, { year: ParamValue<false> }>,
    '/archives/[year]/[month]/': RouteRecordInfo<'/archives/[year]/[month]/', '/archives/:year/:month', { year: ParamValue<true>, month: ParamValue<true> }, { year: ParamValue<false>, month: ParamValue<false> }>,
    '/categories/': RouteRecordInfo<'/categories/', '/categories', Record<never, never>, Record<never, never>>,
    '/categories/[...its]': RouteRecordInfo<'/categories/[...its]', '/categories/:its(.*)', { its: ParamValue<true> }, { its: ParamValue<false> }>,
    '/girls/': RouteRecordInfo<'/girls/', '/girls', Record<never, never>, Record<never, never>>,
    '/links/': RouteRecordInfo<'/links/', '/links', Record<never, never>, Record<never, never>>,
    '/music/': RouteRecordInfo<'/music/', '/music', Record<never, never>, Record<never, never>>,
    '/page/[page]': RouteRecordInfo<'/page/[page]', '/page/:page', { page: ParamValue<true> }, { page: ParamValue<false> }>,
    '/posts/hello-valaxy': RouteRecordInfo<'/posts/hello-valaxy', '/posts/hello-valaxy', Record<never, never>, Record<never, never>>,
    '/posts/netty/netty': RouteRecordInfo<'/posts/netty/netty', '/posts/netty/netty', Record<never, never>, Record<never, never>>,
    '/project/': RouteRecordInfo<'/project/', '/project', Record<never, never>, Record<never, never>>,
    '/tags/': RouteRecordInfo<'/tags/', '/tags', Record<never, never>, Record<never, never>>,
    '/tags/[tag]/': RouteRecordInfo<'/tags/[tag]/', '/tags/:tag', { tag: ParamValue<true> }, { tag: ParamValue<false> }>,
  }
}
