import {fetchBookmarks}  from '~/lib/getPocket'

export default defineEventHandler(async (event) => {
  const response = await fetchBookmarks()
 return response
})
