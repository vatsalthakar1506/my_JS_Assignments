const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

let accordianBody;


const faqs = [];

const myDocument=document.querySelector('.accordian_body');
console.log(myDocument);
let signChecking=true
 function showFaq() {
 
  faqData.forEach(ele=>{
    const div=document.createElement('div');
    // /DECLARATION
    const h3=document.createElement('h3');
    const p=document.createElement('p');
    const divButton=document.createElement('div');
    const contentDiv=document.createElement('div');
    myDocument.appendChild(div);
    
    // STYLE
    
    p.style.display='none'
    // h3.style.cursor='pointer'
    div.classList.add('faq');
    
    // APPEND
    div.appendChild(contentDiv);
    contentDiv.classList.add('accordian');
    contentDiv.style.width="fit-content"
    contentDiv.appendChild(h3);
    contentDiv.appendChild(p);
    div.appendChild(divButton);
    divButton.classList.add("show_btn");
    const sign=document.querySelectorAll('.show_btn');
    h3.innerText=ele.question;
    p.innerText=ele.answer

  })

  }


function createFaq() {
  const sign=document.querySelectorAll('.faq');
 
  sign.forEach(ele=>{
      const checkStyle=ele.childNodes[0].childNodes[1]
   
    ele.addEventListener('click', ()=>{
      signChecking=false
      console.log(ele.childNodes[0].childNodes[1]);
      if(checkStyle.style.display==='none')
        checkStyle.style.display='block';
       
      else
        checkStyle.style.display='none';

    })
    
  })
 
}


function btnStatusUpdate() {


  const sign=document.querySelectorAll('.show_btn');
  console.log(signChecking);

  sign.forEach(ele=>{
    if(!signChecking)
    {
      ele.innerText='-';
      signChecking=true
    }
    else
      ele.innerText='+';


  })
 
}
showFaq();
btnStatusUpdate();
createFaq();




