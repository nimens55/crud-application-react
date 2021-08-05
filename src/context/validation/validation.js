export const validation = (user) => {
  const errorValid = []

  if (!(user.fullName && user.fullName.trim())) {
    errorValid.push("Поле «полное имя» не должно быть пустым")
  } else if (user.fullName.trim().split(' ').length < 3) {
    errorValid.push("Неправильный формат поля «полное имя», требуется «Фамилия Имя Отчество»")
  }

  if (!(user.age && String(user.age).trim())) {
    errorValid.push("Поле «возраст» не должно быть пустым")
  } else if (isNaN(Number(user.age))) {
    errorValid.push("Поле «возраст» должно быть числом")
  } else if (user.age > 110) {
    errorValid.push(`Возраст указан некорректно, вам не может быть ${user.age}`)
  } else if (user.age < 0) {
    errorValid.push("Возраст не может быть отрицательным")
  }
  
  if (!(user.cityResidence && user.cityResidence.trim())) errorValid.push("Поле «город» не должно быть пустым")

  return errorValid
}