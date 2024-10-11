

for(let row=1;row<=5;row++){
    let ans='';
    //
    for(let star=1;star<=row;star++){
        ans=ans+row; 
    }
    //new line 
    console.log(ans)
}

/*
l3 row=ram=1 
row<=5 1<=5 true
l4 ans=ram =''
l6 star=ram=1
star<=row 1<=1 true
l7 ans=ans+row ""+1=1
l6 star++ star=1+1=2
star<=row 2<=row 2<=1 false
l10 1
l3 row++ row=1+1=2
row<=5 2<=5 true
l4 ans=ram =""
l6 star=ram=1
star<=row 1<=2 true
l7 ans=ans+row ""+2=2
l6 star++ star=1+1=2
star<=row 2<=2 true
l7 ans=ans+row 2+2="22"
l6 star++ star=2+1=3
star<=row 3<=2 false
l10 22
l3 row++ row=3
row<=5 3<=5 true
l4 ans =""
l6 star=1 
star<=row 1<=3 true'


*/

// console.log("vikas"+4);


