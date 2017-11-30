/**
 * Taken inspiration from https://github.com/facebook/fbjs/blob/v0.2.1/scripts/babel/dev-expression.js
 */

export default function({ types: t }) {
  const DEV_EXPRESSION = t.binaryExpression(
    '===',
    t.memberExpression(
      t.memberExpression(t.identifier('process'), t.identifier('env'), false),
      t.identifier('NODE_ENV'),
      false
    ),
    t.stringLiteral('development')
  );

  const PROD_EXPRESSION = t.binaryExpression(
    '===',
    t.memberExpression(
      t.memberExpression(t.identifier('process'), t.identifier('env'), false),
      t.identifier('NODE_ENV'),
      false
    ),
    t.stringLiteral('production')
  );

  return {
    visitor: {
      Identifier: {
        enter(path) {
          // replace __DEV__ with process.env.NODE_ENV === 'development'
          if (path.isIdentifier({ name: '__DEV__' })) {
            path.replaceWith(DEV_EXPRESSION);
          }
          // replace __PROD__ with process.env.NODE_ENV === 'production'
          if (path.isIdentifier({ name: '__PROD__' })) {
            path.replaceWith(PROD_EXPRESSION);
          }
        }
      }
    }
  };
}
