interface IAlgorithms {
  fisherYates(input: string): string;
}

function fisherYates(input: string): string {
  const arr = input.split("");

  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.join("");
}

function algorithms(): IAlgorithms {
  return {
    fisherYates,
  };
}

export function jumbleServices(input: string): string {
  return algorithms().fisherYates(input);
}
