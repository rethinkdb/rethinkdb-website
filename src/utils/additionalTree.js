export default (pages, headers) => {
  const isDocs = location.pathname.indexOf('/docs') > -1
  const isApi = location.pathname.indexOf('/api') > -1

  console.log(headers)

  const parentPage = isDocs ? 'docs' : isApi ? 'api' : null

  if (!parentPage) {
    return {
      additionalTree: [],
      additionalTreeToggles: [],
    }
  }

  let additionalTree = []

  let additionalPages = pages.filter(page => page.parentPage === parentPage)

  headers.forEach(header => {
    additionalTree.push({
      name: header,
      children: [],
    })
  })

  additionalPages.forEach(page => {
    const headerIndex = headers.indexOf(page.category)

    additionalTree[headerIndex].children.push(page)
  })

  return {
    additionalTree,
    additionalTreeToggles: additionalTree.map(() => false),
  }
}
