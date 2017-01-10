# ListView-Scroll-Issue
NativeScript + Angular gotcha!
This isn't a bug, but it can be easily encountered. 

When scrolling, the child components seem to jump around to different parent components. 

`ngOnChanges` (instead of `ngOnInit`) should be used to set instance variables that are based off an `@Input()`.

![Screen capture](https://github.com/jzgoda/ListView-Scroll-Issue/blob/master/TheIllustratedVersion.gif)
