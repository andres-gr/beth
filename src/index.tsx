import * as elements from 'typed-html'
import html from '@elysiajs/html'
import { Elysia } from 'elysia'
import { tw } from 'twind'

import Base from '@/templates/Base'

const PORT = 3000

const ely = new Elysia()
const app = ely.use(html())

const S = {
  body: tw`flex flex-col w-full h-screen justify-center items-center`,
  span: tw`text-blue-600`,
}

app.get('/', ({ html }) =>
  html(
    <Base>
      <body class={S.body}>
        <button
          hx-post="/clicked"
          hx-swap="outerHTML"
        >
          Helo, Click Me
        </button>
      </body>
    </Base>
  )
)

app.post('/clicked', () => (
  <div>
    <span class={S.span}>from beyond the server</span>
  </div>
))

app.listen(PORT, () => {
  console.log(`🦊 running at http://${app.server?.hostname}:${app.server?.port}`)
})
