import { Injectable } from '@angular/core';
const Blockchains = {
  eth: 'ethereum',
  imx: 'immutablex',
  sol: 'solana',
  customBlockchain: 'customBlockchain',
};
@Injectable({
  providedIn: 'root',
})
export class SearchResultInnerService {
  constructor() {
    this.setChains();
  }

  public blockchains: any[] = [];
  private algoBk: string = '';
  private selectedSettingsIndex = 0;

  public setAlgoBk(chain: string): void {
    this.algoBk = chain;
  }

  public getAlgoBk(): string {
    return this.algoBk;
  }

  public setChains() {
    for (const chain in Blockchains) {
      this.blockchains.push({
        chain,
        selected: false,
      });
    }
    this.blockchains[this.selectedSettingsIndex].selected = true;
  }

  public setCurrentChain(index: any) {
    this.blockchains[this.selectedSettingsIndex].selected = false;
    this.selectedSettingsIndex = index;
    this.blockchains[this.selectedSettingsIndex].selected = true;
  }

  public getCurrentChain(){
      return this.blockchains[this.selectedSettingsIndex].chain;
  }
}
