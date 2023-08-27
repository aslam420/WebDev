We have two types of Jump Statements -
1) break;
2) continue;

-> Break says if you are running something you just have to break the execution
-> Continue says if you are doing something, just do not running anything after this work, later on whatever is there we just have to again come to the beginning

break example -
for( i = 1 to 5)
{
    if(i == 2) {
        break;
    }
    console.log(i);
}
-> This will print '1' and again this loop will increment and 'i' become '2' but '2' will not print because once i == 2 then it will break and cannot print.

Note : Break will stop the execution, it will break the for loop.

for(let i = 1; i <= 10; i++)
{
    if(i == 7) {
        break;
    }
    console.log("count : " + i);
}
console.log("hi");

Output :
count : 1
count : 2
count : 3
count : 4
count : 5
count : 6
hi

-> We are having 2 loops here. Here, we just want to use a break statement :
for(let i = 0; i < 3; i++)
{
    if(i == 2)
    {
        break;
    }
    for(let j = 0; j < 3; j++)
    {
        console.log(i);
    }
}
So, when this i == 2 we will not be executing inner for loop because break keyword will break the loop.

Output :
0
0
0
1
1
1


Example :
for(let i = 0; i < 3; i++)
{
    for(let j = 0; j < 3; j++)
    {
        console.log(i);
        if(i == 2)
        {
            break;
        }
        console.log(j);
    }
}

Output :
i : 0
j : 0
j : 1
j : 2
i : 1
j : 0
j : 1
j : 2
i : 2


Continue statement :
-> let's say we have value of 'i' -> 1 to 5. What if in the output we want something like -
i = 1, 3, 4, 5 (we are not working if the value is 2)
-> In break statement we were coming out of statement but continue says if they are meeting one condition, in such case don't run the statement after it but rest of the execution is going to work in the same form.

for(let i = 0; i <= 5; i++)
{
    if(i == 2)
    {
        continue; 
    }
    console.log("Count : " + i);
}

Output :
Count : 0
Count : 1
Count : 3
Count : 4

-> Whenever it is going to see the continue, it is going to skip all the values after the continue statement and put the control to the beginning of the for loop and it is going to just skip that value.

Q) Where we can use these in the practical coding?
-> Let's say we are running a loop, after reaching to a point we don't want to run it further, in such case we are going to "break"
-> For example, we want to login to a website, in such case we are putting a wrong password. So, if we have relaised some of the websites allow us to enter password "3" times, after that if block our account for sometime. So, they just see how many attempts we are doing.

Q) If we have 100 natural numbers. Can we print only odd no.s by using continue?
Solution :
for(let i = 1; i <= 100; i++)
{
    if(i % 2 == 0)
    {
        continue;
    }
    console.log(i);
}

Output :
1
3
5
7
9
11
13
15
17
19
21
23
25
27
29
31
33
35
37
39
41
43
45
47
49
51
53
55
57
59
61
63
65
67
69
71
73
75
77
79
81
83
85
87
89
91
93
95
97
99

