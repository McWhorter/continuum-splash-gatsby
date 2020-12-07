const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  return graphql(`
    {
      allWpPage {
        nodes {
          isFrontPage
        }
      }
    }
  `).then((result) => {
    result.data.allWpPage.nodes.forEach(page => {
      if (page.isFrontPage) {
        actions.createPage({
          path: '/',
          component: path.resolve(`./src/pages/index.js`),
        })
      }
    })
  })
}
