export class TenureType {
    public ownerOccupied: string = "Owner Occupied";
    public socialEFG: string = "Social E, F & G"; 
    public prsAE: string = "PRS A-E"; 
    public prsFG: string = "PRS F-G"; 

    public getTenureTypes() {
       return [this.ownerOccupied, this.socialEFG, this.prsAE, this.prsFG];
    }
}