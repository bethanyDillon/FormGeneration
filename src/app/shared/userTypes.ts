export class UserTypes {
    public admin: string = "Admin";
    public installer: string = "Installer"; 
    public installManager: string = "Install Manager"; 

    getAccountTypes() {
       return [this.admin, this.installer, this.installManager]; 
    }
}