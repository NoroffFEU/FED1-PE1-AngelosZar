// https://docs.noroff.dev/docs/v2/differences-from-v1
// Offset replaced by Page
// By default, the Noroff API sets the limit query parameter to 100. This is also the max. To get the next 100 results, you need to use pagination.

// In v1, the offset query parameter was used to paginate results.

// v1 - Example of pagination

// const response = await fetch(`${NOROFF_API_URL}/social/posts?offset=100`)
// const data = await response.json()
// In v2, the offset query parameter has been replaced by the page query parameter. Instead of providing the number of results to skip, you now provide the page number.

// v2 - Example of pagination

// const response = await fetch(`${NOROFF_API_URL}/social/posts?page=2`)
// const data = await response.json()
// You can read more about pagination on the Pagination & Sorting page.
