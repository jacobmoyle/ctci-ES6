# Merge Sort

**Time:** O(*log* n)
**Space:** O(n)

Merge Sort is a [Divide and Conquer](http://www.geeksforgeeks.org/divide-and-conquer-introduction/) sort algorithm, below I use a *Top-Down* approach which is just one of [many](https://en.wikipedia.org/wiki/Merge_sort#Algorithm) implementations.

![Merge Sort Visualization](https://i.imgur.com/5rV2CF2.gifv)

In this sort an unordered list in recursively split in half until the sub-lists are a length of 1. At this point, lists are sorted and returned up the stack, sorted, combined, returned... rinsed and repeated until the entire list is complete:

![Merge Sort Step by Step Visualization](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

The following Ruby code may be run in [IRB](https://www.jetbrains.com/help/ruby/running-irb-console.html):

```Ruby
def merge_sort(array)
  return array if array.length <= 1

  mid_point = array.length / 2
  a, b = merge_sort(array[0...mid_point]), merge_sort(array[mid_point..-1])

  result = []
  while[a, b].none?(&:empty?) do
    result << (a[0] < b[0] ? a.shift : b.shift)
  end

  result.concat(a).concat(b)
end

100.times do
  test = 30.times.map { rand(10000) }
  raise "Something went wrong!" unless test.sort == merge_sort(test)
end
```
