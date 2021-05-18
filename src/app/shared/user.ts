export class User {
    userId: string;
    name: string;
    email: string;
    accountType:string;
    organisationId: string;

    public User(userId: string, name: string, email: string, accountType: string, organisationId: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.accountType = accountType;
        this.organisationId = organisationId;
    }

    public deserialiseAsUser(respObj: any) {
        var user = new User();
        user = new User();
        user.userId = respObj.userId;
        user.name = respObj.name;
        user.email = respObj.email;
        user.accountType = respObj.accountType;
        user.organisationId = respObj.organisationId;
        return user;
      }
}