let db = JSON.parse(localStorage
  .getItem('db')) || [];

const list = document.getElementById("list")
const add = document.getElementById(
  "add")
const input = document.getElementById(
  "text")
const log = log => console.log(log)
const uuidv4 = () => {
  return ([1e7] + -1e3 + -4e3 + -
    8e3 + -1e11).replace(
    /[018]/g, c => (c ^
      crypto
      .getRandomValues(
        new Uint8Array(
          1))[0] &
      15 >> c / 4)
    .toString(16));
}

const removeValue = (id) => {
  db = db.filter(index => {
    if (index.id ==
      id) {
      return false
    }
    return true
  })
  saveData()
}
const loadClick = () => {
  document.addEventListener(
    "click", e => {
      const target = e
        .target
      if (target.classList
        .contains(
          "trash")) {
        let el = target
          .parentElement
          .parentElement
        removeValue(el
          .getAttribute(
            "id"
          ))
        el.remove()
      }
      if (target.classList
        .contains(
          "up-image")
      ) {
        const element =
          target
          .parentElement
          .querySelector(
            ".up-number"
          )
        element
          .innerText =
          parseInt(
            element
            .innerText
          ) + 1

        let id = element.parentElement.parentElement.getAttribute("id")
        //log({id, el:element.innerText})
        changeUp(id, element.innerText)

        saveData()
      }
      if (target.classList
        .contains(
          "down-image"
        )) {
        const element =
          target
          .parentElement
          .querySelector(
            ".down-number"
          )

        element
          .innerText =
          parseInt(
            element
            .innerText
          ) + 1

        let id = element.parentElement.parentElement.getAttribute("id")

        changeDown(id, element.innerText)

        saveData()
      }
    })
}

const saveData = () => {
  localStorage.setItem("db", JSON
    .stringify(db))
}

const addData = (id, name, up,
  down) => {
  db.push({
    id,
    name,
    up,
    down
  })
  saveData()
}

const changeUp = (id, up) => {
  db = db.map((element) => {
    if (element.id == id) {
      return {
        ...element,
        up
      }
    }
    return element
  })
}

const changeDown = (id, down) => {
  db = db.map((element) => {
    if (element.id == id) {
      return {
        ...element,
        down
      }
    }
    return element
  })
}

const createItem = (uid, name, up,
  down) => {
  const item = document
    .createElement("li")
  item.setAttribute("class",
    "item")
  item.setAttribute("id", uid)
  const base_title = document
    .createElement("div")
  base_title.setAttribute("class",
    "base_title")
  base_title.innerText = name
  const title = document
    .createElement("p")
  title.setAttribute("class",
    "title")
  const delete_icon = document
    .createElement("img")
  delete_icon.setAttribute(
    "class", "icon trash")
  delete_icon.src =
    "icons/trash.svg "
  base_title.appendChild(title)
  base_title.appendChild(
    delete_icon)
  const votes = document
    .createElement("div")
  votes.setAttribute("class",
    "votes")
  const up_votes = document
    .createElement("p")
  up_votes.setAttribute("class",
    "up-number")
  up_votes.innerText = up
  const up_icon = document
    .createElement("img")
  up_icon.setAttribute("class",
    "icon up-image")
  up_icon.src =
    "icons/arrow-up.svg"
  const down_votes = document
    .createElement("p")
  down_votes.setAttribute("class",
    "down-number")
  down_votes.innerText = down
  const down_icon = document
    .createElement("img")
  down_icon.setAttribute("class",
    "icon down-image")
  down_icon.src =
    "icons/arrow-down.svg"
  votes.appendChild(up_votes)
  votes.appendChild(up_icon)
  votes.appendChild(down_votes)
  votes.appendChild(down_icon)
  item.appendChild(base_title)
  item.appendChild(votes)
  list.appendChild(item)
}

const clearAll = () =>{
  list.innerHTML= ""
  db = []
  saveData()
}
