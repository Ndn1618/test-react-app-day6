import {useState} from 'react'
import '../App.css'

function Language () {
  const [lang, setLang] = useState('en')
  const [heading, setHeading] = useState('Welcome')
  const [develepedBy, setDevelopedBy] = useState('Develeped by CompanyX')

  const changeLanguage = (language) => {
    console.log(language)
    if (language === 'uz') {
      setHeading('Hush kelibsiz')
      setDevelopedBy('CompanyX tomonidan ishlab chiqilgan')
    } else if (language === 'ru') {
      setHeading('Добро пожаловать')
      setDevelopedBy('Разработано CompanyX')
    } else {
      setHeading('Welcome')
      setDevelopedBy('Developed by CompanyX')
    }
  }

  return (
    <>
      <h1 className="title">{heading}</h1>

      <select onChange={
        (e) => {
          setLang(e.target.value)
          changeLanguage(e.target.value)
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
