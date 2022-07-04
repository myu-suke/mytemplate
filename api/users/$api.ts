import type { AspidaClient } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_userId@number'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/users'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'

  return {
    _userId: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody']>(prefix, prefix0, GET, option).json(),
        $get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody']>(prefix, prefix0, GET, option).json().then(r => r.body),
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['delete']['resBody']>(prefix, prefix0, DELETE, option).json(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['delete']['resBody']>(prefix, prefix0, DELETE, option).json().then(r => r.body),
        post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['post']['resBody']>(prefix, prefix0, POST, option).json(),
        $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['post']['resBody']>(prefix, prefix0, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
    $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json(),
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
