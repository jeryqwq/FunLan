export default function* arraytoGenerator<T>(arr: Array<T>) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}
