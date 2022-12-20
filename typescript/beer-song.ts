export function verse(verseNumber: number) {
  if (verseNumber === 1) {
    return (
      `1 bottle of beer on the wall, 1 bottle of beer.\n` +
      `Take it down and pass it around, no more bottles of beer on the wall.\n`
    )
  }
  return (
    `${verseNumber} bottles of beer on the wall, ${verseNumber} bottles of beer.\n` +
    `Take one down and pass it around, ${verseNumber - 1} bottles of beer on the wall.\n`
  )
}

export function sing(startingVerse = 99, endingVerse = 0) {
  return `Starting verse ${startingVerse}, ending version ${endingVerse}`
}
