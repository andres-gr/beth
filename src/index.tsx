import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'

import Base from '@/templates/Base'
import { BaseStyles, BtnStyles, SpanStyles } from '~/styles'

const PORT = 3000

const ely = new Elysia()
const app = ely.use(html()).use(staticPlugin())

app.get('/', ({ html }) =>
  html(
    <Base>
      <body class={BaseStyles}>
        <button
          class={BtnStyles}
          hx-post="/clicked"
          hx-swap="outerHTML"
        >
          helo, Click Me
        </button>
      </body>
    </Base>
  )
)

app.post('/clicked', () => (
  <div>
    <span class={SpanStyles}>from beyond the server</span>
  </div>
))

app.listen(PORT, () => {
  console.log(`🦊 running at http://${app.server?.hostname}:${app.server?.port}`)
})
