for(let i = 0; i < 3; i++)
{
    console.log("i : " + i);
    for(let j = 0; j < 3; j++)
    {
        if(i == 2)
        {
            break;
        }
        console.log("j : " + j);
    }
}