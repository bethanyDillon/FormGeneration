export class Property {
    address: string;            
    formsGenerated: boolean;    
    formsSigned: boolean;       
    installComplete: boolean;   
    installDate: string;        
    installers: string[]; 
    installManager: string; 
    measureCategory: string;    
    measureType: string;        
    organisationId: string;     
    postcode: string;           
    propertyId: string;         
    surveyComplete: boolean;    
    surveyDate: string;         
    tenure: string;             

    public Property(address: string, formsGenerated: boolean, formsSigned: boolean, installComplete: boolean,
        installDate: string, installers: string[], installManager: string, measureCategory: string, 
        measureType: string, organisationId: string, postcode: string, propertyId: string, 
        surveyComplete: boolean, surveyDate: string, tenure: string) {
            this.address = address;
            this.formsGenerated = formsGenerated;
            this.formsSigned = formsSigned;
            this.installComplete = installComplete;
            this.installDate = installDate;
            this.installers = installers;
            this.installManager = installManager;
            this.measureCategory = measureCategory;
            this.measureType = measureType;
            this.organisationId = organisationId;
            this.postcode = postcode;
            this.propertyId = propertyId;
            this.surveyComplete = surveyComplete;
            this.surveyDate = surveyDate;
            this.tenure = tenure;
    }

    public deserialiseAsProperty(respObj: any) {
        var property = new Property();

        property.address = respObj.address;
        property.formsGenerated = respObj.formsGenerated;
        property.formsSigned = respObj.formsSigned;
        property.installComplete = respObj.installComplete;
        property.installDate = respObj.installDate;
        property.installers = respObj.installers;
        property.installManager = respObj.installManager;
        property.measureCategory = respObj.measureCategory;
        property.measureType = respObj.measureType;
        property.organisationId = respObj.organisationId;
        property.postcode = respObj.postcode;
        property.propertyId = respObj.propertyId;
        property.surveyComplete = respObj.surveyComplete;
        property.surveyDate = respObj.surveyDate;
        property.tenure = respObj.tenure;

        return property;
      }
}