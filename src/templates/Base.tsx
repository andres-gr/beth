import * as elements from 'typed-html'

const Base = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en" hidden>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/htmx.org@1.9.5"></script>
    <script type="module" src="https://cdn.skypack.dev/twind/shim"></script>
    <title>The BETH Stack</title>
  </head>
  ${children}
</html>
`
export default Base
