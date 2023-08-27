Question :
if(10 == "10")
{
    console.log("equal");
}

-> Here, we have a number "10" and string "10". If we are going to compare it, it is giving value as "equal".

Q) Why "equal" is coming in this case?
-> Because if we use "==", this will compare the values.

Question :
if(10 === "10")
{
    console.log("equal");
}
-> If we are going to put "===", in such a case it is not running.

Question :
if(10 === "10")
{
    console.log("equal");
}
else
{
    console.log("not equal");
}

Q) Why "not equal" is coming in this case?
-> Because if we use "===", this will compare both - values as well as datatypes.

Q) When to use what?
-> If we are comparing two values and at that time we really want it to be in the same datatype, in such a case use "===".
-> If we are not concerned about the datatype, use "==".

Compare it with boolean -
if(false === 0)
{
    console.log("equal");
}
else 
{
    console.log("not equal");
}