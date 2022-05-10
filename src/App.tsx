import { MyButton, MyInput } from 'ui_test_project'

const App = () => {
  return (
    <>
      Работает
      <MyButton color="red" big>
        Text
      </MyButton>
      <MyInput placeholder="Введите текст.." big label="label-test" />
    </>
  )
}

export { App }
