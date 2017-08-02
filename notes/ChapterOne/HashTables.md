# Hash Tables

Much wow! Extremely efficient lookup time!

## Creating

A simple implementation would be to use an array of linked lists and a hash code function.

To insert a key:
- Computer the key's hash code, which will usually be an `int` or a `long`. (*the differing keys could have the same hash code due to an infinite number of keys and a finite number of ints*)
- Map the hash code to an index in the array. For example: `hash(key) % array_length`. *Two different hash codes could map to the same index.*
- At the index, there is a linked list of keys and values. Store the key and value in this index. *Linked lists avoid collisions if you have two different keys with the same hash code, or two different hash codes that map to the same index.*

## Retrieving

To retrieve the value pair by its key, compute the hash code from the key, then computer to index from the hash code. Search through the linked list for the value with this key.

## Run Time

Worst case is `O(N)` if the occurrence of collisions is high, where `N` is the number of keys.
