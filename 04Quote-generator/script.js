
const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');
const loader= document.getElementById('loader');



let apiQuotes=[];

async  function getQuotes(){
    loading();
    const apiUrl='https://type.fit/api/quotes';
    try{
        const response= await fetch(apiUrl);
        apiQuotes= await response.json();
        newQuote();
    }
    catch(error){
        console.log(error.message);
    }
    
}

function loading(){
    loader.hidden= false;
    quoteContainer.hidden=true;
    loader.hidden= false;
         quoteContainer.hidden=true;
}

function complete(){
    quoteContainer.hidden=false;
    loader.hidden=true;
}

function  tweetQuote(){
    loading();
    const tweetUrl=`https://twitter.com/intent/tweet?text=${quoteText.text} - ${authorText.textContent}`;
    window.open(tweetUrl,'_blank');
    }

    function newQuote(){
       const quote= apiQuotes[ Math.floor(Math.random() * apiQuotes.length)] ;
    
         if(!quote.author)
          authorText.textContent='Unknown'
        
        else
            authorText.textContent=quote.author
        

        if(quote.text.length>50)
            quoteText.classList.add('long-quote');
        
        else
            quoteText.classList.remove('long-quote')
        

       quoteText.textContent=quote.text;
       complete();
     
    }
    newQuoteBtn.addEventListener('click',getQuotes);
    twitterBtn.addEventListener('click',tweetQuote);
getQuotes();



