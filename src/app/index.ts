import Pages from './routes'
import './styles/global.scss'
import './ui/app.scss'

import Handlebars from 'handlebars'
import RoundButton from '../shared/ui/components/round-button'
import Button from '../shared/ui/components/button'
import Input from '../shared/ui/components/input'
import Link from '../shared/ui/components/link'
import Search from '../shared/ui/components/search'
import ProfileButton from '../features/profile-button'
import IconButton from '../shared/ui/components/icon-button'
import Banner from '../shared/ui/components/banner'
import EmptyState from '../shared/ui/components/empty-state'
import LoginForm from '../widgets/login-form'
import RegisterForm from '../widgets/register-form'
import Pane from '../widgets/pane'
import Chat from '../widgets/chat'
import Sidebar from '../widgets/sidebar'
import ConversationList from '../widgets/conversation-list'
import UserProfile from '../widgets/user-profile'
import BurgerButton from '../features/burger-button'

Handlebars.registerPartial('RoundButton', RoundButton)
Handlebars.registerPartial('Button', Button)
Handlebars.registerPartial('Input', Input)
Handlebars.registerPartial('LoginForm', LoginForm)
Handlebars.registerPartial('RegisterForm', RegisterForm)
Handlebars.registerPartial('Link', Link)
Handlebars.registerPartial('Search', Search)
Handlebars.registerPartial('ProfileButton', ProfileButton)
Handlebars.registerPartial('IconButton', IconButton)
Handlebars.registerPartial('BurgerButton', BurgerButton)
Handlebars.registerPartial('EmptyState', EmptyState)
Handlebars.registerPartial('Sidebar', Sidebar)
Handlebars.registerPartial('Pane', Pane)
Handlebars.registerPartial('Chat', Chat)
Handlebars.registerPartial('Banner', Banner)
Handlebars.registerPartial('UserProfile', UserProfile)
Handlebars.registerPartial('ConversationList', ConversationList)

Handlebars.registerHelper('arr', (...args) => args.slice(0, -1))

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app')

  if (window.location.pathname === '/login') {
    const template = Handlebars.compile(Pages.Login)
    const result = template({})

    if (!root) return

    root.innerHTML = result
  }

  if (window.location.pathname === '/register') {
    const template = Handlebars.compile(Pages.Register)
    const result = template({})

    if (!root) return

    root.innerHTML = result
  }

  if (window.location.pathname === '/home') {
    const template = Handlebars.compile(Pages.Home)
    const result = template({})

    if (!root) return

    root.innerHTML = result
  }

  if (window.location.pathname === '/profile') {
    const template = Handlebars.compile(Pages.Profile)
    const result = template({})

    if (!root) return

    root.innerHTML = result
  }

  if (window.location.pathname === '/not-found') {
    const template = Handlebars.compile(Pages.PageNotFound)
    const result = template({})

    if (!root) return

    root.innerHTML = result
  }

  if (window.location.pathname === '/server-error') {
    const template = Handlebars.compile(Pages.PageServerError)
    const result = template({})

    if (!root) return

    root.innerHTML = result
  }
})
