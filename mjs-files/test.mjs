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

//
//
//
// Pagination
// Pagination can be used to limit the number of results returned by an API request. This is useful for reducing the amount of data that needs to be transferred over the network, and for reducing the amount of data that needs to be processed by the client.

// You can use the limit and page query parameters to paginate through the results of an API request. The limit parameter specifies the number of results to return per page, and the page parameter indicates which page of results to retrieve. For example, to get the first 10 results, you would set limit to 10 and page to 1. To access the next set of 10 results, simply switch page to 2.

let type = {
  limit: {
    type: 'integer',
    default: '100',
    description: 'The number of results to return.',
  },
  page: {
    type: 'integer',
    default: '1',
    description: 'The page of results to return.',
  },
};
