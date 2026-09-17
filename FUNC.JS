function get_Result(marks,passMarks=40)
{
  if(marks>=80)
  {
    return ("A")
  } 
  else if(marks>=60)
  {
    return ("B")
  }
  else if(marks>=40)
  {
    return ("pass")
  }
  else
  {
    return ("fail")
  }
  
}
let result = get_Result(72)
console.log(result)
