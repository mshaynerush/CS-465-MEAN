export interface Trip {
    _id: string, // Internal MongoDB Primary Key
    code: string,
    name: string,
    length: string,
    start: Date,
    resort: string,
    perPerson: string,
    image: string,
    description: string

}