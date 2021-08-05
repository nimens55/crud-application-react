export const initialState = {
  users: [
    {
      id: 1,
      fullName: 'Жуков Максим Тимофеевич',
      age: 20,
      gender: 'Мужской',
      cityResidence: 'Воронеж'
    },
    {
      id: 2,
      fullName: 'Степанов Герман Константинович',
      age: 36,
      gender: 'Мужской',
      cityResidence: 'Москва'
    },
    {
      id: 3,
      fullName: 'Кузина Мария Михайловна',
      age: 28,
      gender: 'Женский',
      cityResidence: 'Москва'
    }
  ],
  newItemUser: {
    isNewUser: false,
    newUser: {}
  },
  editItemUser: {
    idEditUser: null,
    editUser: {}
  },
  alert: null
}