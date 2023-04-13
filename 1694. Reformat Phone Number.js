/**
You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.

You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. The final digits are then grouped as follows:

2 digits: A single block of length 2.
3 digits: A single block of length 3.
4 digits: Two blocks of length 2 each.
The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2.

Return the phone number after formatting.

 

Example 1:

Input: number = "1-23-45 6"
Output: "123-456"
Explanation: The digits are "123456".
Step 1: There are more than 4 digits, so group the next 3 digits. The 1st block is "123".
Step 2: There are 3 digits remaining, so put them in a single block of length 3. The 2nd block is "456".
Joining the blocks gives "123-456

 */
var reformatNumber = function(number) {
    // Use the replaceAll method to remove the dashes and spaces
    number = number.replaceAll("-", "");
    number = number.replaceAll(" ", "");
    console.log(number);

    //use a loop with multiple conditions to group the numbers


    // take a chunk of 5 characters

    let temp = "";
    let String = ""; 
    let count = 0;
    while( count< number.length){

        temp = number.substring(count, count+5);
        if(temp.length < 4){
            String += temp +"-"
            count = count + 4; 
        }
        if(temp.length == 4){
           String += temp.substring(0,2) +"-"+temp.substring(2)+"-";
           count = count + 4; 
        }
        if(temp.length == 5){
           String += temp.substring(0,3) +"-";
           count = count + 3;
        }
    }
    return String.substring(0, String.length-1);
};
