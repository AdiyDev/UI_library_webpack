import { MyButton, MyInput } from 'ui_adiy_dev_project_framework'

const App = () => {
  return (
    <>
      Работает
      <MyButton color="red" big={false}>
        Text
      </MyButton>
      <MyInput placeholder="Введите текст.." big label="label-test" />
    </>
  )
}

export { App }
