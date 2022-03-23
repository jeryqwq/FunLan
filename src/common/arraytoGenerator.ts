export default function* arraytoGenerator(arr: Array<string>) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}
