import Pages from './routes'
import './ui/app.scss'

import Handlebars from 'handlebars'
import RoundButton from '../shared/ui/round-button'
import Button from '../shared/ui/button'
import Input from '../shared/ui/input'
import Link from '../shared/ui/link'
import LoginForm from '../widgets/login-form'
import RegisterForm from '../widgets/register-form'

Handlebars.registerPartial('RoundButton', RoundButton)
Handlebars.registerPartial('Button', Button)
Handlebars.registerPartial('Input', Input)
Handlebars.registerPartial('LoginForm', LoginForm)
Handlebars.registerPartial('RegisterForm', RegisterForm)
Handlebars.registerPartial('Link', Link)

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app')
  const template = Handlebars.compile(Pages.Register)
  const result = template({})
  root.innerHTML = result
})
