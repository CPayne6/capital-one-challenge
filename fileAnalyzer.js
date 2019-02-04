/*
    Author: Chris Payne
    Date: February 2nd, 2019

    This program performs the challenge except it reads through all files found in the 'check-in' directory instead of just one file at a time.
    In order to accurately process the comments of each file type, a supporting file with the comment layout for each file type can be found.
*/

//  Import the file reading dependancy, import the supporting file and declare the directory in which to search 
const fs = require('fs');
const checkinDir = __dirname+'/checkin-directory';
const codes = require('./commentCodes.js');

//  read through the directory and process each file
fs.readdir(checkinDir, (err, items) => {
    if(err){
        console.log(err);
    }
    else{
        items.forEach(name => {
            openFile(name);
        });
    }
});


/**
 * Opens a file in the checkin-directory with the given perameter as it's name.
 * If it is an accepted file it calls the analyzeData function with it's information
 * 
 * @param {String} fileName 
 */
function openFile(fileName){
    fs.readFile(checkinDir + '/' + fileName,'utf8', (err, data) => {
        //  Process the error if one exists
        if(err){
            console.log(err);
        }
        else{
            //  Check if the file starts with a '.'
            if(fileName.charAt(0) != '.'){
                console.log('File:\t'+fileName);
                var ext = fileName.split('.').pop();    // Extract the file extension
                if(ext){
                    analyzeData(data, codes.line[ext], codes.open[ext], codes.close[ext]);  // Process the file data with it's designated extentions
                }
                else{
                    console.log('File extension not recognized');
                }
            }
            else{
                console.log(fileName + ' Not supported');   // Notify the user that the inputted file is not supported
            }
        }
    });

}

/**
 * Reads the given data and outputs the ammount of lines of each type
 * 
 * @param {String} fileData 
 * @param {String} lineCommentIndicator 
 * @param {String} blockOpen 
 * @param {String} blockClose 
 */
function analyzeData(fileData, lineCommentIndicator, blockOpen, blockClose){

    //  Declare the counter variables
    var todoCount = 0;
    var lineCount = 0;
    var commentLineCount = 0;
    var blockCommentLineCount = 0;
    var blockCommentCount = 0;

    //  Declare the Regex for finding the ammount of lines as well as the TODOs in the file
    var lineRegex = new RegExp('\\n','g');
    var todoRegex = new RegExp('TODO','g');
    
    var lines = fileData.match(lineRegex);  

    // Record the amount of lines found by the regex
    if(lines){
        lineCount = lines.length + 1;
    }

    //  If the file type supports in line comments
    if(lineCommentIndicator){
        var commentLineRegex = new RegExp('^.*'+lineCommentIndicator+'.*$','gm');//  Matches single line comments
        var lineBlockCommentRegex = new RegExp('^\\s*'+lineCommentIndicator+'((?!\\n\\s*[\\w\\r])[^])*'+lineCommentIndicator+'.*','gm');    //  Matches single line comments on repeating lines
        
        var commentLines = fileData.match(commentLineRegex);    // Search the data for comment lines
        var lineBlockComments = fileData.match(lineBlockCommentRegex);  // Search the data for comment lines on consecutive lines

        //  If there were comment lines found
        if(commentLines){
            todoCount += (commentLines.toString().match(todoRegex) || []).length;   // Scan for TODO's
            commentLineCount = countLines(commentLines);                            // count the number of lines found
        }

        //  If there were consecutive comment lines found
        if(lineBlockComments){
            lineBlockComments.forEach(element => {                          // Process each set of lines
                var tempCommentLines = element.match(commentLineRegex);     // Check each block for single lines and add them to the block line counter
                commentLineCount -= tempCommentLines.length;
                blockCommentLineCount += tempCommentLines.length;           // Remove each line from the single line counter
                blockCommentCount++;                                        // Increment the block comment counter
            });
        }
    }

    //  If the file type supports block format comments
    if(blockOpen && blockClose){
        var blockCommentRegex = new RegExp(blockOpen + '((?!'+blockClose+')[^])*' + blockClose,'gm');//  Matches block comments
        var blockCommentLines = fileData.match(blockCommentRegex);
        
        //  If there were block comments found
        if(blockCommentLines){
            todoCount += (blockCommentLines.toString().match(todoRegex) || []).length;  // Scan for TODO's
            blockCommentCount = blockCommentLines.length;                               // Add the amount of block comments to the counter
            blockCommentLineCount = countLines(blockCommentLines);                      // Count the number of lines in the block comments and add them to the block comment line counter
        }
    }

    //  Output the calculated values from above to the user
    console.log('Total # of lines:\t' + lineCount);
    console.log('Total # of comment lines:\t' + (blockCommentLineCount + commentLineCount));
    console.log('Total # of single line comments:\t' + (commentLineCount));
    console.log('Total # of comment lines within block comments:\t' + blockCommentLineCount);
    console.log('Total # of block line comments:\t' + blockCommentCount);
    console.log('Total # of TODO\'s:\t' + todoCount);
    console.log('\n--------------------');
}

/**
 * Returns the number of lines in a given array of strings.
 * @param {Array<String>} arr 
 */
function countLines(arr){
    var regex = new RegExp('\\n','g');
    var count = 0;
    arr.forEach(element => {
        var lines = element.match(regex);
        if(lines){
            count += lines.length + 1;
        }
        else{
            count += 1;
        }
    });

    return count;
}