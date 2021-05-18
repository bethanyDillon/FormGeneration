export class MeasureCategory {
    public externalInternalWallInsulation: string = "External/Internal Wall Insulation";
    public cavityWallInsulation: string = "Cavity Wall Insulation"; 
    public loftInsulation: string = "Loft Insulation"; 
    public otherInsulation: string = "Other Insulation"; 
    public boiler: string = "Boiler"; 
    public esh: string = "ESH"; 
    public districtHeatingSystem: string = "District Heating System"; 
    public otherHeating: string = "Other Heating"; 
    public microGeneration: string = "Micro-Generation"; 

    public getMeasureCategories() {
       return [this.externalInternalWallInsulation, this.cavityWallInsulation, this.loftInsulation,
    this.otherInsulation, this.boiler, this.esh, this.districtHeatingSystem, this.otherHeating, this.microGeneration]; 
    }
}