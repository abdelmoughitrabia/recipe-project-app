export class Recipe {
  public name: string;
  public description: string;
  public path: string;

  constructor(name: string, description: string, path: string) {
    this.name = name;
    this.description = description;
    this.path = path;
  }
}
