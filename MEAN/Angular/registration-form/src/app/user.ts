export class User {
  constructor(
    public id: number = null,
    public first_name: string = "",
    public last_name: string = "",
    public email: string = "",
    public password: string = "",
    public password_confirmation: string = "",
    public street_address: string = "",
    public unit_apt: string = "",
    public city: string = "",
    public state: string = "Alaska",
    public lucky: boolean = true
  ){}
}