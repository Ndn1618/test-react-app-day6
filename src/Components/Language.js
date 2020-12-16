import {useState} from 'react'
import '../App.css'

function Language () {
  const [lang, setLang] = useState('en')
  const [heading, setHeading] = useState('Welcome')
  const [develepedBy, setDevelopedBy] = useState('Develeped by CompanyX')

  return (
    <>
      <h1 class="title">{heading}</h1>

      <select onChange={
        e => {
          setLang(e.target.value)
          if (e.target.value === 'uz') {
            setHeading('Hush kelibsiz')
            setDevelopedBy('CompanyX tomonidan ishlab chiqilgan')
          } else if (e.target.value === 'ru') {
            setHeading('Добро пожаловать')
            setDevelopedBy('Разработано CompanyX')
          }
        }}
        defaultValue={lang}
      >
        <option value='uz'>Uzbek</option>
        <option value='ru'>Russian</option>
        <option value='en'>English</option>
      </select>

      <p>{develepedBy}</p>
    </>
  )
}

export default Language
