export function currentBalance(starter, positions) {
  let total = 0;

  positions.forEach((position) => {
    if (position.bet.status === 'win')
      total += position.value * position.bet.odds;
    if (position.bet.status === 'lose') total -= position.value;
  });

  return starter + total;
}
