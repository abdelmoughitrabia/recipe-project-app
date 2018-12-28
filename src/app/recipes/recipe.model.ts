export class Recipe {
  public name: string;
  public descriptio: string;
  public path: string;

  constructor(name: string, descriptio: string, path: string) {
    this.name = name;
    this.descriptio = descriptio;
    this.path = path;
  }
}
