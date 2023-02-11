 
//  document.getElementById('h2').style.color = 'lightblue';

//  function makeLightblue()
//  {
//       document.getElementsByTagName('h2').style.color = 'lightblue';
//  }
const hTags = document.getElementsByTagName('h2'); 
for(const tag of hTags)
{
    tag.style.color = 'lightblue';
}
function textWhite()
{
    style.color = 'white';
}
// document.getElementsByClassName('card').style.borderRadius = "30px";
// // document.getElementsByClassName("col").style.borderRadius = "30px";
document.getElementById('tomato').style.backgroundColor = 'red';

document.getElementById('click-handler').addEventListener('click', function(){
    console.log('touched click handler');
})
document.getElementById('foot').style.backgroundColor = 'rgb(247, 233, 236)';
document.getElementById('foot').addEventListener('dblclick', function(){
    console.log('clicked this foot')
      document.getElementById('foot').style.backgroundColor = "red";
})

document.getElementById('input').addEventListener('keyup', function(event){
    const inputField = event.target.value;
    const submitButton = document.getElementById('btn-submit');

    if(inputField === 'email')
    {
        submitButton.removeAttribute('disabled');
        submitButton.style.backgroundColor = 'pink';
    }
    else
    {
        submitButton.setAttribute('disabled', true);
        submitButton.style.backgroundColor = 'red';
    }
})
document.getElementById('btn-one').addEventListener('click', function(){
    console.log("clicked button");
    const card = document.getElementById('card-one');
    card.style.display = 'none';
})