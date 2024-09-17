import { CodeBarre } from "../codebarre.model";

export class CodeBarreBuilder {
  protected id!: string;
  protected name!: string;
  protected description!: string;
  protected provider!: string;

  withId(value: string) {
    this.id = value;
    return this;
  }

  withName(value: string) {
    this.name = value;
    return this;
  }

  withDescription(value: string) {
    this.description = value;
    return this;
  }

  withProvider(value: string) {
    this.provider = value;
    return this;
  }

  build(): CodeBarre {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      provider:this.provider
    };
  }
}

export class StubCodeBarreBuilder extends CodeBarreBuilder {
  protected override id = '1';
  protected override name = 'Nom du produit';
  protected override description = `Une description du produit`;
  protected override provider = `Un fournisseur d'information sur le produit`;

}
