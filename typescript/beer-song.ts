export function verse(verseNumber: number) {
  return (
    `${verseNumber} bottles of beer on the wall, ${verseNumber} bottles of beer.\n` +
    `Take one down and pass it around, ${verseNumber - 1} bottles of beer on the wall.\n`
  )
}

export function sing(startingVerse = 99, endingVerse = 0) {
  return `Starting verse ${startingVerse}, ending version ${endingVerse}`
}
