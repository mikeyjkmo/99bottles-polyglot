export function verse(verseNumber: number) {
  return `Verse number ${verseNumber}`;
}

export function sing(startingVerse = 99, endingVerse = 0) {
  return `Starting verse ${startingVerse}, ending version ${endingVerse}`;
}
