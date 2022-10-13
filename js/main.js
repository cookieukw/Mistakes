db.forEach(e =>{

  createItem(e.id, e.name, e.up, e.down)

})

add.addEventListener("click", () => {

  if (!input.value.trim()) {

    input.value = ''

    return alert("error")

  }

  let uid = uuidv4()

  createItem(uid, input.value, 0, 0)

  addData(uid, input.value, 0, 0)

  saveData()

  input.value = ""

})

loadClick()

