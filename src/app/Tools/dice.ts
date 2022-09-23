export function GetCharac() : number {
  let dice = []
  for(let i = 0; i< 4; i++) {
    dice.push(Math.floor(Math.random() *6)+1)
  }

  let total = 0
  dice.splice(dice.findIndex(x => x == Math.min(...dice)), 1)

  for(let i = 0; i<3;i++)
    {
      total += dice[i]
    }
  return total
}
