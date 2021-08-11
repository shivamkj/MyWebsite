---
title: Classes in Dart
date: 2021-06-21
summary:  Classes in Dart
---

### Enums
Enums (Enumerated types/enumerations) are a special kind of class used to represent a fixed number of constant values.
```dart
// each value have index getter, which returns the zero-based position.
print(State.loading.index == 0);
// values property returns the List of all values.
List<State> values = State.values;
print(values);
// using enums
State currentState = State.loading;
String message =  currentState == State.loading ? "loading" : "content";
print(message);
// limitations - can’t subclass, mix in, implement or explicitly instantiate an enum.
```
