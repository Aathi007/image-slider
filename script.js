let cont1=document.querySelector('.cont1');
let btns=document.querySelectorAll('.btn');
let imalist=["m1","m2","m3","m4","m5"];
i=0;
let k=imalist.length
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left'))
        {
            i--;
            if(i<0)
            {
              i=imalist.length-1;
            }
            cont1.style.background= `url('images/${imalist[i]}.jpg') center/cover fixed no-repeat`

        }
        else
        {
            i++;
            if(i==k)
            {
             i=0;
            }
            cont1.style.background= `url('images/${imalist[i]}.jpg') center/cover fixed no-repeat` 
        }
    }
    )
}
)