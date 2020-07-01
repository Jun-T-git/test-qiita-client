export class User {
  readonly id: number;
  readonly screenName: string;
  readonly name: string;
  readonly iconUrl: string;

  constructor(id: number, screenName: string, name: string, iconUrl: string) {
    this.id = id;
    this.screenName = screenName;
    this.name = name;
    this.iconUrl = iconUrl;
  }
}
