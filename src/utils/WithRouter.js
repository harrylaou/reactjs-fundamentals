import React from 'react'

const WithRouter = (MyComponent) => {
  const withRouter = (props, context) => (
    <MyComponent {...props} router={context.router} />
  )

  withRouter.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  return withRouter
}

export default WithRouter
