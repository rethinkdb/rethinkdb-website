import uniq from 'lodash.uniq'

export default pages => {
  const isDocs = location.pathname.indexOf('/docs') > -1
  const isApi = location.pathname.indexOf('/api') > -1

  const parentPage = isDocs ? 'docs' : isApi ? 'api' : null

  if (!parentPage) {
    return {
      additionalTree: [],
      additionalTreeToggles: [],
    }
  }

  let additionalTree = []

  let additionalPages = pages.filter(page => page.parentPage === parentPage)

  uniq(additionalPages.map(p => p.category)).forEach(header => {
    additionalTree.push({
      name: header,
      children: [],
    })
  })

  additionalPages.forEach(page => {
    const headerIndex = additionalTree.findIndex(
      entry => entry.name === page.category
    )

    additionalTree[headerIndex].children.push(page)
  })

  return {
    additionalTree,
    additionalTreeToggles: additionalTree.map(() => false),
  }
}
