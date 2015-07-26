var fs = require('fs');

function mergeValues(values, content) {
  //Cycle over the keys 
  for (var key in values) {
    //Replace all {{key}} with the value from values object
    content = content.replace("{{" + key + "}}", values[key]);
  }
  //return merged  content
  return content;
}

function view(templateName, values, response) {
  //Read from the template file
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"})
  //Insert values into content
  fileContents = mergeValues(values, fileContents);  
  //Write out to response
  response.write(fileContents);

}    


module.exports.view = view