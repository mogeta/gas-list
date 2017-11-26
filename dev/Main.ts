//gas document

var properties = PropertiesService.getScriptProperties()
//var trelloKey:string = properties.getProperty("trello_key");


//https://developers.google.com/apps-script/guides/html/
function doGet(e:any){
    var params = JSON.stringify(e);
    return HtmlService
        .createTemplateFromFile('Index')
        .evaluate();
}

function doPost(e:any){

}

function processForm(formData:any){
    Logger.log("processform");
    Logger.log(formData);
}

//using from html template
function include(filename:string) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
}

//https://developers.google.com/apps-script/reference/properties/properties-service
function SaveProperties(){
    PropertiesService.getScriptProperties().setProperty("","");
}
