// see if name is free

export function nameFree(task, arr) {
  if (task === '' || task == null) return false

  if (task.length < 3) return false

  let littleName = task.toLowerCase()
  for (let i = 0; i < arr.length; i++){
    if (arr[i].name.toLowerCase() === littleName){
      return false
    }
  }
  return true
}