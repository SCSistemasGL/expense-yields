export const nameSpace = (name) => {
  let newName = ''
  for (let i = 0; i < name.length; i++){
    if (name[i] === '_') {
      
      newName = newName + ' '
    } else {
      newName = newName + name[i]
    }
  }
  return newName
}