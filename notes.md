# Notes
* 1 em = 16 pixels
* Block elements occupy 100% of the width. Eg. \<h1>

* We can call elements in css by name, id or class.
* By default, inline style has more priority than style tag. If we want to give priority to the tag then we could use ~!important~.

* Border: Top, Bottom, Right, Left
* Border is the outline, margin is the outside space while padding is the inside space.

* Content box : Border + width + padding
* Border box : Border - width - padding

* `<figure>` can be used to group together img tags
* `<td colspan = "3">Student</td>` means that Student will span over 3 column cells.

* `<article>` is for independent content
* `<aside>` 

* **class** can only be accessed in css files while **id** can be accessed in both css and html.
* **class** can be applied to many tags while **id** is **unique** for to each tag.

* Single Colon (unset : ) = Pseudo-Class (States): Used to style an element's temporary state or structural condition.
    - Examples: :hover, :focus (when clicked into an input), :nth-child(2) (the second item in a list).
* Double Colon (unset :: ) = Pseudo-Element (Parts): Used to style a specific, virtual piece of an element rather than the whole thing.
	- Examples: p::first-letter (styles just the very first letter of a paragraph), button::before (inserts virtual content before the button text).
