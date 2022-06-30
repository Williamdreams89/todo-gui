
# Introduction
SWR is a React Hooks library for data fetching.

The name “SWR” is derived from stale-while-revalidate, a cache invalidation strategy popularized by HTTP RFC 5861. SWR first returns the data from cache (stale), then sends the request (revalidate), and finally comes with the up-to-date data again.

With just one hook, you can significantly simplify the data fetching logic in your project. And it also covered in all aspects of speed, correctness, and stability to help you build better experiences:

Fast, lightweight and reusable data fetching
Transport and protocol agnostic
Built-in cache and request deduplication
Real-time experience
Revalidation on focus
Revalidation on network recovery
Polling
Pagination and scroll position recovery
SSR and SSG
Local mutation (Optimistic UI)
Built-in smart error retry
TypeScript
React Suspense
React Native
...and a lot more.

With SWR, components will get a stream of data updates constantly and automatically. Thus, the UI will be always fast and reactive.
# Quick Start With useSWR

import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
In this example, the React Hook useSWR accepts a key and a fetcher function. The key is a unique identifier of the request, normally the URL of the API. And the fetcher accepts key as its parameter and returns the data asynchronously.

useSWR also returns 2 values: data and error. When the request (fetcher) is not yet finished, data will be undefined. And when we get a response, it sets data and error based on the result of fetcher and rerenders the component.

Note that fetcher can be any asynchronous function, you can use your favourite data-fetching library to handle that part.
