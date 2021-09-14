import React from 'react'
import { render } from 'react-dom'
import { RecoilRoot } from 'recoil'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>,
    document.getElementById('app')
  )
})
