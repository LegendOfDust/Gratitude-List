console.log("connected");

const makeList = () => {
    //get content from input box
    const input = document.getElementById('thing-to-make');
    const thingToMake = input.value;
    //add it to list
    const theList = document.getElementById('the-list');
    const newListItem = document.createElement('li');
    newListItem.textContent = thingToMake;
    theList.appendChild(newListItem);
}