1) input.value

 
![dev tools console](./input-value.PNG)

2) input.value update
![dev tools console](./Capture2.PNG)

3) Accessing the elements of the form (alternative way):
![dev tools console](./Capture3.PNG)

![dev tools console](./Capture4.PNG)

![dev tools console](./Capture5.PNG)

4) We can access the collection of thr <form> elements using 'elements' property by typing 'console.dir(form)' in the dev tools console:

![dev tools console](./Capture6.PNG)


Here we can access, for example,  <input type="text" id="product" name="qty"> 
by the following: form.elements.qty.value
![dev tools console](./Capture7.PNG)


## [Click for the dev tools console](https://verson-tech.github.io/FormEvents/)