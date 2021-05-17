'user strict';


// global array for the objects.
let busMall = [];
console.log(busMall);
// global elemant by id 
let lfetImg = document.getElementById('left-img');
let centImg = document.getElementById('center-img');
let rightImg = document.getElementById('right-img');
let image = document.getElementById('image');

// global array for the name of iteams 
let itemName = [];
// global array for the iteam vote 
let itemVotes = [];

// shown goats array
let itemShown = [];

//  firstshow
let firstShow = [];


// global variables
let leftImageIndex;
let centerImageIndex;
let rightImageIndex;

/// constructer for the bussmall.

function MallIdea(name , source){
    this.name = name;
    this.source = source;


    // votes for images
    this.votes = 0;
//  num of shown 
     this.shown = 0 ;
    // push to array 
    busMall.push(this);
    //  push the name to iteams name array
    itemName.push(this.name);

}

new MallIdea('bag', 'images/bag.jpg');
new MallIdea('banana', 'images/banana.jpg');
new MallIdea('bathroom', 'images/bathroom.jpg');
new MallIdea('boots', 'images/boots.jpg');
new MallIdea('breakfast', 'images/breakfast.jpg');
new MallIdea('bubblegum', 'images/bubblegum.jpg');
new MallIdea('chair', 'images/chair.jpg');
new MallIdea('cthulhu', 'images/cthulhu.jpg');
new MallIdea('dog-duck', 'images/dog-duck.jpg');
new MallIdea('dragon', 'images/dragon.jpg');
new MallIdea('pen', 'images/pen.jpg');
new MallIdea('pet-sweep', 'images/pet-sweep.jpg');
new MallIdea('scissors', 'images/scissors.jpg');
new MallIdea('shark', 'images/shark.jpg');
new MallIdea('sweep', 'images/sweep.png');
new MallIdea('tauntaun', 'images/tauntaun.jpg');
new MallIdea('unicorn', 'images/unicorn.jpg');
new MallIdea('water-can', 'images/water-can.jpg');
new MallIdea('wine-glass', 'images/wine-glass.jpg');

//  consol the array 
// console.log(busMall);

// random function to generate index
function generateRandomIndex() {
    return Math.floor(Math.random() * busMall.length);
}



// render busmall images

function renderThreeImage (){
    // use the var for new generate
    leftImageIndex = generateRandomIndex();
    centerImageIndex= generateRandomIndex();
    rightImageIndex = generateRandomIndex();


// for (let i = 0; i < 3; i++) {
    
    if (leftImageIndex === rightImageIndex || rightImageIndex==firstShow[0] || rightImageIndex==firstShow[1] || rightImageIndex==firstShow[2]){
        
        rightImageIndex = generateRandomIndex();

    } else if (leftImageIndex === centerImageIndex || centerImageIndex==firstShow[0] || centerImageIndex==firstShow[1] || centerImageIndex==firstShow[2]){
        
        centerImageIndex = generateRandomIndex();

    } else if (rightImageIndex === centerImageIndex || centerImageIndex==firstShow[0] || centerImageIndex==firstShow[1] || centerImageIndex==firstShow[2]){
        
        centerImageIndex = generateRandomIndex();

    } else {
        lfetImg.src = busMall[leftImageIndex].source;
        centImg.src = busMall[centerImageIndex].source;
        rightImg.src = busMall[rightImageIndex].source;

       
    
        

            

        // 
        busMall[leftImageIndex].shown++;
        busMall[centerImageIndex].shown++;
        busMall[rightImageIndex].shown++;
    
    // }
   
    }
    firstShow=[leftImageIndex,centerImageIndex,rightImageIndex];
    console.log(firstShow);

}
  
    
renderThreeImage();


// now we create event to make vote for the image .

// lfetImg.addEventListener('click',  Clicker);
// centImg.addEventListener('click', Clicker);
// rightImg.addEventListener('click', Clicker);
image.addEventListener('click', Clicker);


// global counter and attempt
let maxAttempts = 25;
let userAttemptsCounter = 0

// function testAtt(){
// maxAttempts = document.getElementById('test').Value;
// console.log(maxAttempts);
// }


// creat function 
function Clicker(event){

    userAttemptsCounter++;

    // console.log(userAttemptsCounter);

    if (userAttemptsCounter <= maxAttempts) {
        // console.log(userAttemptsCounter);

        if (event.target.id === 'left-img') {
            busMall[leftImageIndex].votes = busMall[leftImageIndex].votes + 1;
        } else if (event.target.id === 'center-img'){
            busMall[centerImageIndex].votes = busMall[centerImageIndex].votes + 1;
        } else { 
            busMall[rightImageIndex].votes = busMall[rightImageIndex].votes + 1;

        }
    

        renderThreeImage();

    } else {
        // lfetImg.removeEventListener('click', Clicker);
        // centImg.removeEventListener('click', Clicker);
        // rightImg.removeEventListener('click', Clicker);
        image.removeEventListener('click', Clicker);
        // getting the element
        // let list = document.getElementById('result');
        // let liElement;
        // for (let i = 0; i < busMall.length; i++) {
        //     liElement = document.createElement('li');
        //     list.appendChild(liElement);
        //     liElement.textContent = `${busMall[i].name} has ${busMall[i].votes}  votes`;

        // }


        for (let i = 0; i < busMall.length; i++){

            itemVotes.push(busMall[i].votes);
            itemShown.push(busMall[i].shown);
        }
        
    }

}

function test(){
    chartView();
}


////////////////////////////chartjs///////////////////////////////


// console.log(itemName);

function chartView() {
    let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: itemName ,
        datasets: [{
            label: '# of pick',
            data: itemVotes,
            backgroundColor: [
                'rgb(255, 102, 0)'
            ],
            borderColor: [
                'rgb(255, 102, 0)'

            ],
            borderWidth: 1
        },{
            label: '# of item shown',
                    backgroundColor: 'red',
                    borderColor: 'red',
                    data: itemShown

        }
    ]
    },
    options: {
       
    }
});
 }
// console.log('show',itemShown);