function findNeedle(haystack) {
  const x = haystack.findIndex(stack => stack === 'needle')
  return `found the needle at position ${x}`
}

const arr = ["hay", "junk", 'needle', "hay", "hay", "moreJunk", "needle", "randomJunk"]
console.log(findNeedle(arr) );