// Description:
// --------------------------------------
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// Solution:
// --------------------------------------
using System;

public static class Kata
{
  public static string Solution(string str) 
  {
    
    char[] charArray = str.ToCharArray();
    Array.Reverse(charArray);
    
    return new string(charArray);
    
    throw new NotImplementedException("TODO: Kata.Solution(string) => string");
  }
}