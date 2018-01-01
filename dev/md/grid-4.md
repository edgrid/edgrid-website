```
.gallery{
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:wrap;
      flex-wrap:wrap;
  margin-left:-.5em;
  margin-right:-.5em;
}

.gallery > .image{
  width:calc(100% - 1em);
  margin:.5em;
}

@media screen and (min-width:64em){
  .gallery > .image{
    width:calc(50% - 1em);
  }
}

@media screen and (min-width:90em){
  .gallery > .image{
    width:calc(33.33333% - 1em);
  }
}
```
