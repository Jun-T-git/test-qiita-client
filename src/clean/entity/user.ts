export class User {
  readonly id: string;
  readonly name: string;
  readonly iconUrl: string;

  constructor(id: string, name: string, iconUrl: string) {
    this.id = id;
    this.name = name;
    this.iconUrl = iconUrl;
  }
}
