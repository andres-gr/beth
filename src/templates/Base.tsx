import Html from '@kitajs/html'

const Base = ({ children }: Html.PropsWithChildren) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta
        content="width=device-width, initial-scale=1.0"
        name="viewport"
      />
      <script src="https://unpkg.com/htmx.org@1.9.5" />
      <link
        href="public/styles/index.css"
        rel="stylesheet"
      />
      <title>The BETH Stack</title>
    </head>
    {children}
  </html>
)

export default Base
