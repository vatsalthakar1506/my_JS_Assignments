const camel=document.querySelector('#camel-case');
const pascal=document.querySelector('#pascal-case');
const snake=document.querySelector('#snake-case');
const screaming=document.querySelector('#screaming-snake-case');
const Kebab=document.querySelector('#kebab-case');
const KebabScreaming=document.querySelector('#screaming-kebab-case');
 


const convert=document.querySelector('#convert-btn');
const text=document.querySelector('#text');
    

result=()=>{
    const inputValue=text.value;
    if(!inputValue){
        alert('Enter Value');
    }
    else{

        toCamelCase(inputValue);
        toPascalCase(inputValue);
        toSnakeCase(inputValue);
        toScreamingCase(inputValue);
        Kebab.innerHTML= toKebab(inputValue);
         KebabScreaming.innerHTML= toKebabScreaming(inputValue);
    }
      
}

toCamelCase=(inputValue)=>{
    let words=inputValue.replace(/[^a-zA-Z0-9]/g, ' ').split(' ');
    const camelCase=words.map((ele,index) =>  index===0 ? ele.toLowerCase() : ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase());
    camel.innerHTML = camelCase.join('');  

}

toPascalCase=(inputValue)=>{
    let words=inputValue.replace(/[^a-zA-Z0-9]/g,' ').split(' ');   
    const pascalcase=words.map((ele,index)=> index===0 ?  ele.charAt(0).toUpperCase()+ele.slice(1).toLowerCase() : ele.charAt(0).toUpperCase()+ ele.slice(1).toLowerCase());
    pascal.innerHTML=pascalcase.join('');
}


toSnakeCase=(inputValue)=>{
    let lowerCase=inputValue.replace(/[A-Z]/g, (match)=>{
        return '_'+ match.toLowerCase();
    })
    
    var snakeCaseString = lowerCase.replace(/[\W_]+/g, '_');
    snake.innerHTML=snakeCaseString
    console.log(snakeCaseString); 

}
toScreamingCase=(inputValue)=>{
    let lowerCase=inputValue.replace(/[A-Z]/g, (match)=>{
        return '_'+ match.toLowerCase();
    })
    
    var snakeCaseString = lowerCase.replace(/[\W_]+/g, '_');
    screaming.innerHTML=snakeCaseString.toUpperCase();
    console.log(snakeCaseString); 

}
toKebab=(inputValue)=>{
    return inputValue
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/_/g, '-') // Replace underscores with hyphens
    .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters except hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with a single hyphen
    .replace(/^-|-$/g, '');

}
toKebabScreaming=(inputValue)=>{
    return inputValue
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/_/g, '-') // Replace underscores with hyphens
    .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters except hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with a single hyphen
    .replace(/^-|-$/g, '').toUpperCase();

}


