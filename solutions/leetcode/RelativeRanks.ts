function findRelativeRanks(score: number[]): string[] {
  const sortedScore = [...score].sort((a, b) => b - a);

  const rankMap = new Map<number, string>();

  for (let i = 0; i < sortedScore.length; i++) {
    const point = sortedScore[i];

    if (i === 0) {
      rankMap.set(point, 'Gold Medal');
    } else if (i === 1) {
      rankMap.set(point, 'Silver Medal');
    } else if (i === 2) {
      rankMap.set(point, 'Bronze Medal');
    } else {
      rankMap.set(point, (i + 1).toString());
    }
  }
  return score.map((s) => rankMap.get(s)!);
}
