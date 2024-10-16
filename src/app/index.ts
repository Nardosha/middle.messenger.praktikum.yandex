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
import Conversation from '../enteties/conversation'
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
Handlebars.registerPartial('Conversation', Conversation)
Handlebars.registerPartial('ConversationList', ConversationList)

Handlebars.registerHelper("arr", (...args) => args.slice(0, -1))


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app')
  const template = Handlebars.compile(Pages.Home)
  const result = template({ConversationList})
  root.innerHTML = result
})
