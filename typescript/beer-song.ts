export function verse(verseNumber: number) {
  if (verseNumber === 2) {
    return (
      `2 bottles of beer on the wall, 2 bottles of beer.\n` +
      `Take one down and pass it around, 1 bottle of beer on the wall.\n`
    )
  }

  if (verseNumber === 1) {
    return (
      `1 bottle of beer on the wall, 1 bottle of beer.\n` +
      `Take it down and pass it around, no more bottles of beer on the wall.\n`
    )
  }

  if (verseNumber === 0) {
    return (
      `No more bottles of beer on the wall, no more bottles of beer.\n` +
      `Go to the store and buy some more, 99 bottles of beer on the wall.\n`
    )
  }

  return (
    `${verseNumber} bottles of beer on the wall, ${verseNumber} bottles of beer.\n` +
    `Take one down and pass it around, ${verseNumber - 1} bottles of beer on the wall.\n`
  )
}

export function sing(startingVerse = 99, endingVerse = 0) {
  const output: string[] = []

  for (let i = startingVerse; i >= endingVerse; i--) {
    output.push(verse(i))
  }

  return output.join('\n')
}
