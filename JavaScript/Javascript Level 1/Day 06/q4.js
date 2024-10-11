/*

5678

8
7
6
5

5678%10=8 print
567%10=7 print
56%10=6 print
5%10=5 print



*/

let num=56478;
while(num>0){
    let ld=num%10;
    console.log(ld)
    num=Math.floor(num/10);

}

/*

l19 num=ram=5678
l20 num>0 5678>0 true
l21 ld=ram=num%10 5678%10=8
l22 8
l23 num=num/10 5678/10 567.8 567
l20 num>0 567>0 true
l21 ld=ram=567%10=7
l22 7
l23 num=num/10 567/10 56.7 56
l20 num>0 56>0 true
l21 ld=num%10 56%10=6
l22 6
l23 num=num/10 56/10 5.6 5
l20 num>0 5>0 true
l21 ld=5%10=5
l22 5
l23 num=num/10 5/10 0.5 0
l20 num>0 0>0 false



*/

/*

243786
oddcount ? 2
evencount=? 4




*/