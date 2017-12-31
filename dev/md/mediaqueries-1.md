```
.selector {
  color: red;
  @include from(m) {
    color: blue;
  }

  @include from(700px) {
    color: red
  }
}
```
