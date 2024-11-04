const makeList = () => {
    //GET CONTENT FROM INPUT BOX
    const input = document.getElementById('thing-to-make');
    const thingToMake = input.value;
    
    //ADDING THE INPUT TO THE ONSCREEN LIST
    const theList = document.getElementById('the-list');
    //create new list item
    const newListItem = document.createElement('li');
    //update the text of the new list item to be the input
    newListItem.textContent = thingToMake;
    //add the new list item to the ul on the screen
    theList.appendChild(newListItem);
}